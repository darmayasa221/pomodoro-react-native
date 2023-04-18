import {FC} from 'react';
import {TaskContextProviderType} from '../../types/store/task/task';
import TaskContext from './context';

const TaskContextProvider: FC<TaskContextProviderType> = ({children}) => {
  return <TaskContext.Provider value={{}}>{children}</TaskContext.Provider>;
};

export default TaskContextProvider;
