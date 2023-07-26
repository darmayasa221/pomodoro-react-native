import React, {FC, useMemo, useReducer} from 'react';
import {
  TaskContextProviderType,
  TaskInitialStateType,
} from '../../types/store/task/task';
import TaskContext from './context';
import taskReducer from './reducer';
const taskInitialState: TaskInitialStateType = {
  data: [],
};

const TaskContextProvider: FC<TaskContextProviderType> = ({children}) => {
  console.log('TASK CONTEX');
  const [state, dispatch] = useReducer(taskReducer, taskInitialState);
  const stateMemo = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );
  return (
    <TaskContext.Provider value={stateMemo}>{children}</TaskContext.Provider>
  );
};

export default TaskContextProvider;
