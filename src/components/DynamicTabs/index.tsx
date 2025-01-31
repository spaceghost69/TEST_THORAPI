import React, { forwardRef, ReactNode, useImperativeHandle, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { CloseButton, Tab, Tabs } from 'react-bootstrap';
import "./index.css";

export interface DynamicTabsHandle {
  addTab: (title: string, component: ReactNode) => void;
  removeTab: (key: string) => void;
}

interface DynamicTabsProps {
  children?: ReactNode;
}
const DynamicTabs = forwardRef<DynamicTabsHandle, DynamicTabsProps>((props, ref) => {
  // Parse children for initial tabs
  const initialTabs = React.Children.toArray(props.children)
    .flatMap((child: any) => {
      if (child && child.type === Tab) {
        const { eventKey, title, children } = child.props;
        return [{
          key: eventKey || `tab-${Date.now()}`,
          title: title || 'Untitled Tab',
          component: children
        }];
      }
      return [];
    });

  const [tabs, setTabs] = useState(() => {
    if (initialTabs.length > 0) {
      return initialTabs;
    }
    return [
      { key: 'initial', title: 'Initial Tab', component: <div>Welcome!</div> }
    ];
  });

  const [activeKey, setActiveKey] = useState(() => {
    return initialTabs.length > 0 ? initialTabs[0].key : 'initial';
  });

  // Expose addTab and removeTab functions via ref
  useImperativeHandle(ref, () => ({
    addTab: (title: string, component: ReactNode) => {
      const newKey = `tab-${Date.now()}`;
      const newTab = { key: newKey, title, component };
      setTabs((prev) => [...prev, newTab]);
      setActiveKey(newKey);
    },
    removeTab: (key: string) => {
      handleRemoveTab(key);
    }
  }));

  const handleRemoveTab = (key: string) => {
    setTabs((prevTabs) => {
      const newTabs = prevTabs.filter((t) => t.key !== key);
      // If removing active tab, choose a fallback
      if (key === activeKey && newTabs.length > 0) {
        setActiveKey(newTabs[newTabs.length - 1].key);
      }
      return newTabs;
    });
  };

  const handleSelect = (key: string | null) => {
    if (key) setActiveKey(key);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedTabs = Array.from(tabs);
    const [removed] = reorderedTabs.splice(result.source.index, 1);
    reorderedTabs.splice(result.destination.index, 0, removed);
    setTabs(reorderedTabs);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tabs" direction="horizontal">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Tabs
              activeKey={activeKey}
              onSelect={handleSelect}
              id="dynamic-tabs"
              className="mb-3"
            >
              {tabs.map((tab, index) => (
                <Tab
                  
                  key={tab.key}
                  eventKey={tab.key}
                  title={
                    <Draggable draggableId={tab.key} index={index}>
                      {(dragProvided) => (
                        <div
                          className="tabHeader"
                          ref={dragProvided.innerRef}
                          {...dragProvided.draggableProps}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            ...dragProvided.draggableProps.style
                          }}
                          
                        >
                          <div {...dragProvided.dragHandleProps} style={{ marginRight: 8, cursor: 'grab' }}>
                            <h1>&#9776;</h1> {/* A simple drag handle icon */}
                          </div>
                          <span style={{ marginRight: '8px' , overflow: 'hidden' }}>{tab.title}</span>
                          <CloseButton onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveTab(tab.key);
                          }} />
                        </div>
                      )}
                    </Draggable>
                  }
                >
                  {tab.component}
                </Tab>
              ))}
            </Tabs>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});

export default DynamicTabs;
