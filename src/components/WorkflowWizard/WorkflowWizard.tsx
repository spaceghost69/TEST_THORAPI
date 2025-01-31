import { useState } from "react";
import { Button, ButtonGroup, Carousel, Modal } from "react-bootstrap";


import { useAddWorkflowMutation } from "../../redux/services/WorkflowCommandService";
import { useAddExecModuleMutation } from "../../thor/redux/services/ExecModuleService";
import { useAddTaskMutation } from "../../thor/redux/services/TaskService";
import ConfigureExecModules from "./ConfigureExecModules";
import ConfigureTasks from "./ConfigureTasks";
import ConfigureWorkflow from "./ConfigureWorkflow";
import DeployAndTest from "./DeployAndTest";

const WorkflowWizard = () => {
  const [index, setIndex] = useState(0);
  const [workflow, setWorkflow] = useState({});
  const [tasks, setTasks] = useState([]);
  const [execModules, setExecModules] = useState([]);

  const [addWorkflow] = useAddWorkflowMutation();
  const [addTask] = useAddTaskMutation();
  const [addExecModule] = useAddExecModuleMutation();

  const handleNext = () => {
    if (index < 3) setIndex(index + 1);
  };

  const handlePrevious = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleSave = async () => {
    try {
      const savedWorkflow = await addWorkflow(workflow).unwrap();
      const savedTasks = await Promise.all(
        tasks.map(async (task) => {
          const savedTask = await addTask({
            ...task,
            workflowId: savedWorkflow.id,
          }).unwrap();
          return savedTask;
        })
      );
      await Promise.all(
        execModules.map(async (module) => {
          await addExecModule(module).unwrap();
        })
      );
      // Deployment logic...
    } catch (error) {
      console.error("Error saving workflow:", error);
    }
  };

  const handleCancel = () => {
    // Reset state or navigate away
  };

  return (
    <Modal
      
    >
      <Carousel
        activeIndex={index}
        onSelect={() => { }}
        controls={false}
        indicators={false}
        interval={null}
      >
        <Carousel.Item>
          <ConfigureWorkflow workflow={workflow} setWorkflow={setWorkflow} />
        </Carousel.Item>
        <Carousel.Item>
          <ConfigureTasks tasks={tasks} setTasks={setTasks} />
        </Carousel.Item>
        <Carousel.Item>
          <ConfigureExecModules
            execModules={execModules}
            setExecModules={setExecModules}
          />
        </Carousel.Item>
        <Carousel.Item>
          <DeployAndTest
            workflow={workflow}
            tasks={tasks}
            execModules={execModules}
          />
        </Carousel.Item>
      </Carousel>
      <div className="wizard-controls">
        <ButtonGroup>
          <Button
            className="tinyButton"
            variant="secondary"
            onClick={handlePrevious}
            disabled={index === 0}
          >
            Previous
          </Button>
          {index < 3 ? (
            <Button variant="primary"
              className="tinyButton"
              onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button variant="success"
              className="tinyButton"
              onClick={handleSave}>
              Save
            </Button>
          )}
          <Button variant="danger"
            className="tinyButton"
            onClick={handleCancel}>
            Cancel
          </Button>
        </ButtonGroup>
      </div>
    </Modal>
  );
};

export default WorkflowWizard;
