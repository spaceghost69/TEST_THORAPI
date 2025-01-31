

import { Dispatch, SetStateAction } from "react";
import TaskForm from "../../thor/redux/components/form/TaskForm";



interface ConfigureTasksProps {

  tasks: any[];

  setTasks: Dispatch<SetStateAction<any[]>>;

}



const ConfigureTasks = ({ tasks, setTasks }: ConfigureTasksProps) => {

  return (
    <div>
      <h2>ConfigureTasks</h2>
      <TaskForm />
    </div>
  );
};

export default ConfigureTasks;
