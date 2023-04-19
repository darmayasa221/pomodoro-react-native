import {
  TaskActionType,
  TaskInitialStateType,
  TaskItemType,
} from '../../types/store/task/task';

const taskReducer = (
  state: TaskInitialStateType,
  action: TaskActionType,
): TaskInitialStateType => {
  if (action.type === 'ADD_TASK') {
    const newState = {...state};
    const task: TaskItemType = {
      activedTask: false,
      name: action.payload.name,
    };
    newState.data.push(task);
    return newState;
  }
  if (action.type === 'ACTIVED_TASK') {
    return state;
  }
  return state;
};

export default taskReducer;
