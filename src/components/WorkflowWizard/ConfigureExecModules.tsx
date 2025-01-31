import React from 'react';
import ExecModuleForm from '../../thor/redux/components/form/ExecModuleForm';


interface ConfigureExecModulesProps {

  execModules: any[];

  setExecModules: React.Dispatch<React.SetStateAction<any[]>>;

}



const ConfigureExecModules: React.FC<ConfigureExecModulesProps> = ({ execModules, setExecModules }) => {

  return (
    <div>
      <h2>ConfigureExecModules</h2>
      <ExecModuleForm />
    </div>
  );
};

export default ConfigureExecModules;
