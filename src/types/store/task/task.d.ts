import {Dispatch, PropsWithChildren} from 'react';
export type TaskContextProviderType = PropsWithChildren;
export type TaskItemType = {
  name?: string;
  activedTask?: boolean;
  isSelected?: boolean;
};

export type TaskInitialStateType = {
  data: Array<TaskItemType>;
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
