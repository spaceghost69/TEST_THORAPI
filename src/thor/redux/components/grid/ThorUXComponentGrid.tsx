import React, { useState, useEffect, useRef } from 'react';
import { Form as BSForm, Col, Tab, Tabs, Row, Container, Spinner, Modal, Button } from 'react-bootstrap';
import {  FaTrash, FaPlus, FaCopy, FaPaste, FaArrowDown, FaArrowRight, FaCheckCircle, FaEye, FaChevronRight, FaChevronDown } from 'react-icons/fa';

import CoolButton from '../../../../components/CoolButton';
import { DataObject, ThorUXComponent } from '../../../model';

import { useLazyGetThorUXComponentsQuery, useAddThorUXComponentMutation, useUpdateThorUXComponentMutation } from '../../services/ThorUXComponentService';
import ObjectTreeView from '../../../../components/ObjectTreeView'; // Ensure you have this component

import SplitPaneView2 from '../../../../components/SplitPane/SplitPaneView2';
import ThorUXComponentChart from '../chart/ThorUXComponentChart';
import ThorUXComponentForm from '../form/ThorUXComponentForm';


const fieldSkipList = ['ownerId', 'keyHash', 'workflowStateId', 'createdDate', 'lastAccessedById', 'lastAccessedDate', 'lastModifiedDate', 'lastModifiedById'];

const ThorUXComponentGrid: React.FC = () => {
  const [trigger, { data: newData = [], isFetching }] = useLazyGetThorUXComponentsQuery();
  const [addThorUXComponent] = useAddThorUXComponentMutation();
  const [updateThorUXComponent] = useUpdateThorUXComponentMutation();

  const [data, setData] = useState<ThorUXComponent[]>([]);
  const [page, setPage] = useState(1);
  const [editRowId, setEditRowId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<ThorUXComponent>>({});
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showAllFields, setShowAllFields] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  // For large text popup editing
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<{ id?: string; key?: string; value?: any }>({});
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const [copiedRow, setCopiedRow] = useState<ThorUXComponent | null>(null);

  // Function to handle row selection
  const handleRowSelect = (id: string) => {
    setSelectedRows((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  // Function to handle delete action
  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  // Function to confirm deletion
  const confirmDelete = () => { // actually perform a delete using redux...
    setData((prevData) => prevData.filter((item) => !selectedRows.has(item.id)));
    setSelectedRows(new Set());
    setShowDeleteModal(false);
  };

  // Function to add a new row
  const handleAddRow = () => {
    const newRow = {
      id: Date.now().toString(),
      // Initialize other fields as needed
    };
    setData((prevData) => [newRow, ...prevData]);
  };

  // Function to copy a row
  const handleCopyRow = () => {
    if (selectedRows.size === 1) {
      const rowId = Array.from(selectedRows)[0];
      const rowToCopy = data.find((item) => item.id === rowId) || null;
      setCopiedRow(rowToCopy);
    } else {
      alert('Please select exactly one row to copy.');
    }
  };

  // Function to paste a row
  const handlePasteRow = () => {
    if (copiedRow) {
      const newRow = { ...copiedRow, id: Date.now().toString() };
      setData((prevData) => [newRow, ...prevData]);
    } else {
      alert('No row copied. Please copy a row first.');
    }
  };

  // For complex objects (arrays/objects)
  const [expandedObjects, setExpandedObjects] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Load initial data
    trigger({ page: 1 });
  }, [trigger]);

  useEffect(() => {
    if (newData) {
      setData((prevData) => [...prevData, ...newData]);
    }
  }, [newData]);

  useEffect(() => {
    const handleScroll = () => {
      if (!tableRef.current || isFetching) return;

      const { scrollTop, scrollHeight, clientHeight } = tableRef.current;
      if (scrollHeight - scrollTop <= clientHeight + 50) {
        // Fetch the next page when nearing the bottom
        setPage((prevPage) => {
          const nextPage = prevPage + 1;
          trigger({ page: nextPage });
          return nextPage;
        });
      }
    };

    const currentRef = tableRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [trigger, isFetching]);
  
    const handleDoubleClick = (id: string, key: string, value: any) => {
    // Determine editing mode
    if (value === null || value === undefined) {
      value = '';
    }
    if (typeof value === 'string') {
      // String field
      if (value.length <= 20) {
        // Inline edit
        setEditRowId(`${id}~${key}`);
        const currentRow = data.find((item) => item.id === id);
        if (currentRow) {
          setFormData({ [key]: currentRow[key] });
        }
      } else {
        // Large string: use modal
        setModalData({ id, key, value });
        setModalVisible(true);
      }
    } else if (typeof value === 'object') {
      // Complex object: toggle ObjectTreeView
      const objKey = `${id}~${key}`;
      setExpandedObjects((prev) => ({
        ...prev,
        [objKey]: !prev[objKey],
      }));
    } else {
      // number, boolean or other primitive
      const strValue = String(value);
      if (strValue.length <= 20) {
        setEditRowId(`${id}~${key}`);
        const currentRow = data.find((item) => item.id === id);
        if (currentRow) {
          setFormData({ [key]: currentRow[key] });
        }
      } else {
        // large number or other type
        setModalData({ id, key, value: strValue });
        setModalVisible(true);
      }
    }
  };

  const handleSave = async (editKey: string) => {
    const [id, key] = editKey.split('~');
    const currentItem = data.find((item) => item.id === id);
    if (!currentItem) {
      console.error('Item not found with id:', id);
      return;
    }
    const updatedItem = { ...currentItem, [key]: formData[key] };
    try {
      await updateThorUXComponent(updatedItem).unwrap();
      setData((prevData) => prevData.map((item) => (item.id === id ? updatedItem : item)));
    } catch (error) {
      console.error('Failed to update ThorUXComponent:', error);
    }
    setEditRowId(null);
    setFormData({});
  };

  const handleCancel = () => {
    setEditRowId(null);
    setFormData({});
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleKeyDown = (event: React.KeyboardEvent, editKey: string) => {
    if (event.key === 'Enter') {
      handleSave(editKey);
    } else if (event.key === 'Escape') {
      handleCancel();
    }
  };

  const handleBlur = () => {
    if (editRowId) {
      handleSave(editRowId);
    }
  };

  const renderValue = (value: any, itemId: string, key: string) => {
    if (value === null || value === undefined) {
      return '';
    }
    if (typeof value === 'object') {
      // Show toggle button instead of raw JSON
      const objKey = `${itemId}~${key}`;
      const isExpanded = expandedObjects[objKey] || false;
      return (
        <Button variant="info" size="sm" className="tinyButton" onClick={() => handleDoubleClick(itemId, key, value)}>
          {isExpanded ? <FaChevronDown /> : <FaChevronRight />} {key}
        </Button>
      );
    }

    return value;
  };

  const handleModalSave = async () => {
    const { id, key, value } = modalData;
    if (!id || !key) {
      setModalVisible(false);
      return;
    }
    const currentItem = data.find((item) => item.id === id);
    if (!currentItem) {
      console.error('Item not found:', id);
      setModalVisible(false);
      return;
    }
    const updatedItem = { ...currentItem, [key]: value };
    try {
      await updateThorUXComponent(updatedItem).unwrap();
      setData((prevData) => prevData.map((item) => (item.id === id ? updatedItem : item)));
    } catch (error) {
      console.error('Failed to update from modal:', error);
    }
    setModalVisible(false);
  };

  const handleModalChange = (newValue: any) => {
    setModalData((prev) => ({ ...prev, value: newValue }));
  };
  const [activeTab, setActiveTab] = useState('');
  
  return (

    <SplitPaneView2>
    
    <Tabs key={'ThorUXComponent'}>
        
        <Tab
             title="ThorUXComponent" 
             eventKey="ThorUXComponentC" 
             active={ activeTab == 'ThorUXComponent' }
        >
              <ThorUXComponentChart /> 
          </Tab>
          
          <Tab title='New ThorUXComponent'
                  eventKey="ThorUXComponentN"
          >
              <ThorUXComponentForm />
          </Tab>
        
        </Tabs>

      <div ref={tableRef} className="tableContainer" style={ { overflowY: 'auto', height: '100%' } }>
        {isFetching && <Spinner animation="border" />}
        <table className="spreadsheet-table">
          <thead>
            <tr>
              <th onClick={() => setShowAllFields(!showAllFields)}>
                <FaEye />
              </th>
              <th>
                <input type="checkbox" />
                <FaArrowDown />
              </th>
              {data.length > 0 &&
                Object.keys(data[0]).map((key) =>
                  showAllFields || fieldSkipList.indexOf(key) === -1 ? (
                    <th key={key + 'xx'}>
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                    </th>
                  ) : null
                )}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rownum) => {
              const rowCells = Object.keys(item)
                .filter((key) => showAllFields || fieldSkipList.indexOf(key) === -1)
                .map((key) => {
                  const cellValue = item[key];
                  const cellKey = `${item.id}~${key}`;
                  const isEditing = editRowId === cellKey;

                  return (
                    <td key={key + 'xe'} onDoubleClick={() => handleDoubleClick(item.id, key, cellValue)}>
                      {isEditing ? (
                        <BSForm.Control
                          ref={inputRef}
                          type="text"
                          value={formData[key] || ''}
                          onChange={(e) => handleInputChange(key, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, cellKey)}
                          onBlur={handleBlur}
                        />
                      ) : (
                        renderValue(cellValue, item.id, key)
                      )}
                    </td>
                  );
                });

              return (
                <React.Fragment key={item.id + 'xy'}>
                  <tr>
                    <td className="spreadsheet-rownum">{rownum}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedRows.has(item.id)}
                        onChange={() => handleRowSelect(item.id)}
                      />
                    </td>
                    {rowCells}
                  </tr>
                  {/* Expanded ObjectTreeView rows */}
                  {Object.keys(item)
                    .filter((key) => typeof item[key] === 'object' && (expandedObjects[item.id + '~' + key] || false))
                    .map((key) => (
                      <tr key={item.id + '~' + key + '_objectview'}>
                        <td colSpan={Object.keys(data[0]).length + 2} style={ { backgroundColor: '#555' } }>
                          <div style={ {maxWidth:"600px"} }>
                            <ObjectTreeView
                              data={item[key]}
                              editable={true}
                              onChange={(updatedObj) => {
                                const updatedItem = { ...item, [key]: updatedObj };
                                setData((prev) => prev.map((d) => (d.id === item.id ? updatedItem : d)));
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>


        {/* Delete Confirmation Modal */}
        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete the selected rows?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="tinyButton" onClick={() => setShowDeleteModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => confirmDelete()}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal for large text editing */}
        <Modal show={modalVisible} onHide={() => setModalVisible(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Editing ThorUXComponent</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalData.value && typeof modalData.value === 'string' && modalData.value.length > 20 ? (
              <BSForm.Control
                as="textarea"
                rows={10}
                value={modalData.value}
                onChange={(e) => handleModalChange(e.target.value)}
              />
            ) : (
              // For objects or other complex data, if you want, you can switch to ObjectTreeView:
              // <ObjectTreeView
              //   data={modalData.value}
              //   editable={true}
              //   onChange={(updatedObj) => handleModalChange(updatedObj)}
              // />
              <div>No large text data available or unsupported type.</div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalVisible(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleModalSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    
    </SplitPaneView2>



  );
};

export default ThorUXComponentGrid;
