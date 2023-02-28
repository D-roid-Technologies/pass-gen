import { TextProps } from "react-native";

export interface TextType extends TextProps {
  children: string;
}
export interface MainButtonContainer {
    title: string,
    disabled?: boolean,
    // whiteStyling?: boolean,
    // style: any, 
    onPressFunction?: any,
    redOutlineWhiteBg?: boolean,

};