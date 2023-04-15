import {PropsWithChildren} from 'react';
// button
type ButtonCostumProps = PropsWithChildren<{
  style: {};
}>;
type ButtonPrimaryProps = PropsWithChildren<{
  text: string;
  onPress?: () => void;
  styleView?: {};
  styleText?: {};
}>;
// tasks
type AddTaskProps = {
  style: {};
};
export {ButtonCostumProps, ButtonPrimaryProps, AddTaskProps};
