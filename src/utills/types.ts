import { TextProps } from "react-native";

export interface TextType extends TextProps {
  children: string;
}
export interface MainButtonContainer {
    title: string,
    disabled?: boolean,
    onPressFunction?: any,
    redOutlineWhiteBg?: boolean,

};