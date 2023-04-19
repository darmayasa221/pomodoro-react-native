import {Dispatch} from 'react';
import {TypeModal} from './modal';
import {
  TaskActionType,
  TaskItemType,
  TaskSelectedType,
} from './store/task/task';

// tasks type component
export type TaskFooterProps = {
  addTaskOnPress: (type: TypeModal) => void;
};

export type TasksProps = {
  tasks: Array<TaskItemType>;
  color?: string;
  onCheck: Dispatch<TaskActionType>;
  selected: TaskSelectedType;
};

export type TaskProps = {
  task: TaskItemType;
  color?: string;
  onCheck: Dispatch<TaskActionType>;
  taskIndex: number;
  isSelected?: boolean;
};
