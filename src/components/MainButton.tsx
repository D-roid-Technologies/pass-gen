import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
// import { COLORS } from "../utils/constant";
import { MainButtonContainer } from "../utills/types";
import { COLORS } from "../utills/constants";

const MainButton: React.FC<MainButtonContainer> = ({
  title,
  disabled,
  redOutlineWhiteBg,
  onPressFunction,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      style={[
        redOutlineWhiteBg ? styles.redOutlineBtn : styles.button,
        {
          backgroundColor: disabled
            ? "#B6CCE1"
            : redOutlineWhiteBg
            ? "#FFFFFF"
            : `${COLORS.colorFour}`,
        },
      ]}
      disabled={disabled}
    >
      <Text
        style={
          redOutlineWhiteBg ? styles.redOutlineTextStyle : styles.textStyle
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    borderRadius: 15,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    alignSelf: "center",
    marginBottom: 50
  },
  redOutlineBtn: {
    borderRadius: 15,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderWidth: 2,
    borderColor: "#FC0F0F",
  },
  textStyle: {
    color: `${COLORS.colorTwo}`,
    fontSize: 18,
    fontWeight: "600",
  },
  redOutlineTextStyle: {
    color: "#FC0F0F",
    fontSize: 18,
    fontWeight: "600",
  },
  opacity: {
    opacity: 0.8,
  },
});

export default MainButton;