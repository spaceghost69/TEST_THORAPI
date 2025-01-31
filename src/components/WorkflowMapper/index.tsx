import { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDrag, useDrop } from 'react-dnd';

import { Workflow } from '../../thor/model';
import { useAddTaskMutation } from "../../thor/redux/services/TaskService";
import { useAddWorkflowMutation, useGetWorkflowsQuery } from "../../thor/redux/services/WorkflowService";
import CoolButton from '../CoolButton';

const workflow: Workflow = {

  id: '000-000-000-000'
}

const ItemTypes = {
  FIELD: 'field',
};

const TaskCard = ({ task, index, moveTask, handleDrop }) => {
  const [, ref] = useDrag({
    type: ItemTypes.FIELD,
    item: { index, task },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.FIELD,
    hover(draggedItem: { index: number }) {
      if (draggedItem.index !== index) {
        moveTask(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <Card ref={(node) => ref(drop(node))} className="mb-2">
      <Card.Body>
        <Card.Title>{task.label}</Card.Title>
        <Card.Text>Status: {task.status}</Card.Text>
        <CoolButton variant="primary" onClick={() => handleDrop(task)}>
          Execute Task
        </CoolButton>
      </Card.Body>
    </Card>
  );
};

const WorkflowMapper = () => {
  const { data: workflows } = useGetWorkflowsQuery();
  const [addTask] = useAddTaskMutation();
  const [addWorkflow] = useAddWorkflowMutation();
  const [workflowName, setWorkflowName] = useState('');
  const [taskLabel, setTaskLabel] = useState('');
  const [currentWorkflowId, setCurrentWorkflowId] = useState(null);
  const [tasks, setTasks] = useState([]);

  const handleCreateWorkflow = async () => {
    workflow.description = (workflowName);
    const newWorkflow = await addWorkflow(workflow);
    setCurrentWorkflowId(workflow.id);
  };

  const handleAddTask = async () => {
    const updatedWorkflow = await addTask({ workflowId: currentWorkflowId, description: taskLabel });
    setTasks(workflow.tasks);
  };

  const moveTask = (fromIndex, toIndex) => {
    const updatedTasks = [...tasks];
    const [removed] = updatedTasks.splice(fromIndex, 1);
    updatedTasks.splice(toIndex, 0, removed);
    setTasks(updatedTasks);
  };

  const handleDrop = async (task) => {
    // handle task execution logic here
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Create Workflow</h2>
          <Form.Control
            type="text"
            placeholder="Enter Workflow Name"
            value={workflowName}
            onChange={(e) => setWorkflowName(e.target.value)}
          />
          <CoolButton onClick={handleCreateWorkflow}>
            Create
          </CoolButton>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Add Task</h2>
          <Form.Control
            type="text"
            placeholder="Enter Task Label"
            value={taskLabel}
            onChange={(e) => setTaskLabel(e.target.value)}
          />
          <CoolButton onClick={handleAddTask} >
            Add Task
          </CoolButton>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Tasks</h2>
          {tasks.map((task, index) => (
            <TaskCard key={index} task={task} index={index} moveTask={moveTask} handleDrop={handleDrop} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};


export default WorkflowMapper;