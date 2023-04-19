import React, {FC, useMemo, useReducer} from 'react';
import {TaskContextProviderType} from '../../types/store/task/task';
import TaskContext from './context';
import taskReducer from './reducer';

const TaskContextProvider: FC<TaskContextProviderType> = ({children}) => {
  const [state, dispatch] = useReducer(taskReducer, {data: []});
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
