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
      activedTask: true,
      name: action.payload?.name as string,
      isSelected: false,
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
    const selected = newState.data.find(({isSelected}) => isSelected === true);
    if (selected !== undefined) {
      const indexSelected = newState.data.findIndex(
        ({name}) => name === selected?.name,
      );
      newState.data[indexSelected].isSelected = false;
    }
    const actived = newState.data[action.payload?.index as number].isSelected;
    newState.data[action.payload?.index as number].isSelected = actived
      ? false
      : true;
    return newState;
  }
  return state;
};

export default taskReducer;
