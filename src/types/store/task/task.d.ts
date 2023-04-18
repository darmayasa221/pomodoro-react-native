export type TaskContextProviderType = PropsWithChildren;
export type TaskItemType = {
  name: string;
  activedTask: boolean;
};
export type TaskInitialStateType = {
  data: Array<TaskItemType>;
};
export type ActionType = 'ADD_TASK' | 'ACTIVED_TASK';
export type TaskActionType = {
  type: ActionType;
  payload: TaskItemType;
};
export type TaskContextType = {
  state: TaskInitialStateType;
  dispatch: Dispatch<TaskActionType>;
};
