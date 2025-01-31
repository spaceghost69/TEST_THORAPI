import React from 'react';
import WorkflowForm from '../../thor/redux/components/form/WorkflowForm';


interface ConfigureWorkflowProps {

  workflow: any;

  setWorkflow: React.Dispatch<React.SetStateAction<any>>;

}



const ConfigureWorkflow: React.FC<ConfigureWorkflowProps> = ({ workflow, setWorkflow }) => {

  return (
    <div>
      <h2>ConfigureWorkflow</h2>
      <WorkflowForm />
    </div>
  );
};

export default ConfigureWorkflow;
