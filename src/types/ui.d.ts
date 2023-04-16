// ui type component
import {PropsWithChildren} from 'react';

export type ButtonCostumProps = PropsWithChildren<{
  style: {};
}>;
export type ButtonPrimaryProps = PropsWithChildren<{
  text: string;
  onPress?: () => void;
  styleView?: {};
  styleText?: {};
}>;
export type CheckBoxProps = {
  onPress: () => void;
  isChecked: boolean;
};
