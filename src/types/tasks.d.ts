import {TypeModal} from './modal';
import {TaskItemType} from './store/task/task';

// tasks type component
export type TaskFooterProps = {
  addTaskOnPress: (type: TypeModal) => void;
};

export type TasksProps = {
  tasks: Array<TaskItemType>;
};

export type TaskProps = {
  task: TaskItemType;
};
