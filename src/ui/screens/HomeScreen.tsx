import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TextInput,
  Button,
  Pressable,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopComponent from "../../components/TopComponent";
import MainText from "../../components/mainText";
import { COLORS, app_name, bot_name } from "../../utills/constants";
import MainButton from "../../components/MainButton";

const HomeScreen: React.FC<any> = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [hideView, setHideView] = React.useState<boolean>(true);
  const [hideButton, setHideButton] = React.useState<boolean>(true);
  const [hideButtonTwo, setHideButtonTwo] = React.useState<boolean>(false);
  const [finalButtons, setFinalButtons] = React.useState<boolean>(false);
  const [userName, setUserName] = React.useState<string>("");
  // console.log(userName)
  const [welcomeMes, setWelcomeMes] = React.useState<string>("");

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  function changeWelcomeMessage() {
    if (userName === "") {
      return "Hi There,";
    } else {
      return "Hello,";
    }
  }

  function showtextInput(): any {
    setHideView(true);
    // setHideButton(hideButton)
  }
  const noName = (
    <View>
      {/* <Animated.View style={[{opacity: fadeAnim,}]} > */}
      <MainText
        children={`Welcome to ${app_name}. I am ${bot_name}! ${app_name} is designed to simply help you automate your username and password.`}
        style={{
          color: "#000000",
          fontSize: 18,
          fontWeight: "300",
          marginBottom: 15,
        }}
      />
      {/* </Animated.View> */}

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
        children={`It is really good to meet you. We are going to have so much FUN!`}
        style={{ color: "#000000", fontSize: 18, fontWeight: "200", marginBottom: 40 }}
      />

      <MainText
        children={`Okay ${userName}, Lets begin. Click on any of the buttons below, i'm EXCITED!`}
        style={{ color: "#000000", fontSize: 18, fontWeight: "500"}}
      />
    </View>
  );

  function mainViewS() {
    if (userName === "") {
      return noName;
    } else {
      return nameExist;
    }
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "space-between",
      }}
    >
      <View
        style={[
          styles.homeWelcomeCon,
          Platform.OS === "android"
            ? styles.homeWelConAndroid
            : styles.homeWelConIos,
        ]}
      >
        <MainText
          children={`${changeWelcomeMessage()} ${userName}`}
          style={{
            color: "#000000",
            fontSize: 23,
            fontWeight: "900",
            paddingBottom: 15,
          }}
        />

        {mainViewS()}
      </View>
      <View style={{ marginBottom: 100 }}>
        {hideView ? null : (
          <TextInput
            placeholder="First Name"
            style={{
              alignSelf: "center",
              paddingBottom: 10,
              paddingTop: 10,
              fontSize: 18,
              fontWeight: "400",
              // backgroundColor: "red",
              borderWidth: 1,
              width: "90%",
              textAlign: "center",
              borderLeftColor: "#ffffff",
              borderTopColor: "#ffffff",
              borderRightColor: "#ffffff",
              borderBottomColor: `${COLORS.colorOne}`,
            }}
            onChangeText={(value) => setUserName(value)}
          />
        )}
        {/* <MainButton
          title="What is your Name?"
          // disabled={true}
          onPressFunction={showtextInput()}
          // redOutlineWhiteBg={}
        /> */}
      </View>
      {hideButton ? (
        <MainButton
          title="What is your Name?"
          // disabled={true}
          onPressFunction={() => {
            setHideView(false);
            setHideButton(false);
            setHideButtonTwo(true);
          }}
          // redOutlineWhiteBg={}
        />
      ) : null}

      {hideButtonTwo ? (
        <MainButton
          title="Done"
          // disabled={true}
          onPressFunction={() => {
            setHideView(true);
            setHideButtonTwo(false);
            setFinalButtons(true);
            // setHideButton(false);
          }}
          // redOutlineWhiteBg={}
        />
      ) : null}

      {finalButtons ? (
        <View>
          <MainButton
            title="Generate Unique User Name"
            // disabled={true}
            onPressFunction={() => {
              setHideView(true);
              setHideButtonTwo(false);
              navigation.navigate("User Name");
              // setHideButton(false);
            }}
            // redOutlineWhiteBg={}
          />
          <MainButton
            title="Generate Unique Password"
            // disabled={true}
            onPressFunction={() => {
              setHideView(true);
              setHideButtonTwo(false);
              navigation.navigate("Password");
              // setHideButton(false);
            }}
            // redOutlineWhiteBg={}
          />
        </View>
      ) : null}
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
