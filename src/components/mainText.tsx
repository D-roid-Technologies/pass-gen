import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import { TextType } from '../utills/types';

const MainText: React.FC<TextType>  = ({style, ...props}: TextType) => {

    return (
        <View>
            <Text {...props} style={style}/>
        </View>
    )
}

export default MainText;