import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopComponent from "../../components/TopComponent";
import MainText from "../../components/mainText";
import { app_name, bot_name } from "../../utills/constants";

const HomeScreen: React.FC<any> = () => {
  const [userName, setUserName] = React.useState<string>("ekene");

  const noName = (
    <View>
      <MainText
        children={`Welcome to ${app_name}. I am ${bot_name}! ${app_name} is designed to help you automate your username and password.`}
        style={{
          color: "#000000",
          fontSize: 18,
          fontWeight: "300",
          marginBottom: 15,
        }}
      />

      <MainText
        children={`I would help you set up your UNIQUE Id and Password in a bit, but first... I would like to know you.`}
        style={{
          color: "#000000",
          fontSize: 18,
          fontWeight: "300",
          marginBottom: 15,
        }}
      />

      <MainText
        children={`Click the button below and let me know what your name is.`}
        style={{ color: "#000000", fontSize: 18, fontWeight: "400" }}
      />
    </View>
  );

  const nameExist = (
    <View>
      <MainText
        children={`It is really good to meet you, ${userName}. We are going to have so much FUN`}
        style={{ color: "#000000", fontSize: 18, fontWeight: "200" }}
      />
    </View>
  );

  function mainViewS() {
    if (userName === "") {
      return noName
    } else {
      return nameExist
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View
        style={[
          styles.homeWelcomeCon,
          Platform.OS === "android"
            ? styles.homeWelConAndroid
            : styles.homeWelConIos,
        ]}
      >
        <MainText
          children={`Hi there, ${userName}`}
          style={{
            color: "#000000",
            fontSize: 23,
            fontWeight: "900",
            paddingBottom: 15,
          }}
        />

        {mainViewS()}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeWelcomeCon: {
    height: 270,
    width: "90%",
    backgroundColor: "#ffffff",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 20,
    padding: 15,
  },
  homeWelConAndroid: {
    elevation: 30,
    shadowColor: "#000000",
  },
  homeWelConIos: {
    shadowColor: "#00000038",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 7,
  },
});
