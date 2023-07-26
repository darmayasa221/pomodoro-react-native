import {Dispatch} from 'react';
import {TypeModal} from './modal';
import {
  TaskActionType,
  TaskInitialStateType,
  TaskItemType,
} from './store/task/task';

// tasks type component
export type TaskFooterProps = {
  addTaskOnPress: (type: TypeModal) => void;
};

export type TasksProps = {
  tasks: TaskInitialStateType;
  color?: string;
  onCheck: Dispatch<TaskActionType>;
};

export type TaskProps = {
  task: TaskItemType;
  color?: string;
  onCheck: Dispatch<TaskActionType>;
  taskIndex: number;
  isSelected?: boolean;
};
