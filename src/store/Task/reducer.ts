import {
  TaskActionType,
  TaskInitialStateType,
  TaskItemType,
  TaskSelectedType,
} from '../../types/store/task/task';

const taskReducer = (
  state: TaskInitialStateType,
  action: TaskActionType,
): TaskInitialStateType => {
  if (action.type === 'ADD_TASK') {
    const newState = {...state};
    const task: TaskItemType = {
      activedTask: true,
      name: action.payload?.name as string,
    };
    newState.data.push(task);
    return newState;
  }
  if (action.type === 'ACTIVED_TASK') {
    const newState = {...state};
    const actived = newState.data[action.payload?.index as number].activedTask;
    newState.data[action.payload?.index as number].activedTask = actived
      ? false
      : true;
    return newState;
  }
  if (action.type === 'SELECT_TASK') {
    const newState = {...state};
    const taskSelected: TaskSelectedType = {
      ...newState.selected,
      name: action.payload?.name,
      activedTask: action.payload?.activedTask,
      isSelected: true,
    };
    newState.selected = taskSelected;
    return newState;
  }
  return state;
};

export default taskReducer;
