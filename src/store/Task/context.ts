import {createContext} from 'react';
import {TaskContextType} from '../../types/store/task/task';

const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export default TaskContext;
