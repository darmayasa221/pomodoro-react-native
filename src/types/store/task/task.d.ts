export type TaskContextProviderType = PropsWithChildren;
export type TaskItemType = {
  name?: string;
  activedTask?: boolean;
};
export type TaskSelectedType = TaskItemType & {
  isSelected?: boolean;
};
export type TaskInitialStateType = {
  data: Array<TaskItemType>;
  selected: TaskSelectedType;
};
export type ActionType = 'ADD_TASK' | 'ACTIVED_TASK' | 'SELECT_TASK';
export type TaskActionType = {
  type: ActionType;
  payload?: TaskItemType & {
    index?: number;
  };
};
export type TaskContextType = {
  state: TaskInitialStateType;
  dispatch: Dispatch<TaskActionType>;
};
