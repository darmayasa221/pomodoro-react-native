// ui type component
import {PropsWithChildren} from 'react';

export type ButtonCostumProps = PropsWithChildren<{
  onPress?: () => void;
  style: {};
}>;
export type ButtonPrimaryProps = PropsWithChildren<{
  text: string;
  onPress?: () => void;
  styleView?: {};
  styleText?: {};
  isActived?: boolean;
}>;
export type CheckBoxProps = {
  onPress: () => void;
  isChecked: boolean;
};
