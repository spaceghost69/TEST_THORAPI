import React from 'react';
import { Alert } from 'react-bootstrap';


interface DeployAndTestProps {

  workflow: any;

  tasks: any[];

  execModules: any[];

}



const DeployAndTest: React.FC<DeployAndTestProps> = ({ workflow, tasks, execModules }) => {

  return (
    <div>
      <h2>DeployAndTest</h2>
      
      <Alert variant="warning">BUILD SUCCESS</Alert>
      <Alert variant="warning">CONNECT FRONT END</Alert>
      <Alert variant="warning">PUSH TO GITHUB</Alert>
      <Alert variant="warning">DEPLOY TO SERVER</Alert>

    </div>
  );
};

export default DeployAndTest;
