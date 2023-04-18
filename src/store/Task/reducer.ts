import {
  TaskActionType,
  TaskInitialStateType,
} from '../../types/store/task/task';

const taskReducer = (
  state: TaskInitialStateType,
  action: TaskActionType,
): TaskInitialStateType => {
  if (action.type === 'ADD_TASK') {
    return state;
  }
  if (action.type === 'ACTIVED_TASK') {
    return state;
  }
  return state;
};

export default taskReducer;
