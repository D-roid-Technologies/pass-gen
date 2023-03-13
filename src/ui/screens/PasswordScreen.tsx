import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainText from "../../components/mainText";
import MainButton from "../../components/MainButton";
import { COLORS } from "../../utills/constants";

const PasswordScreen: React.FC<any> = ({ navigation }) => {
  const alpha: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers: string = "0123456789";
  const specialChar: string = "`~!@#$%^&*-_)+(>/<,:=;|";
  let ekene = "";
  let mainData = "";
  
  function generatePassword() {
    for (let i = 0; i < 10; i++) {
      ekene += alpha.charAt(Math.floor(Math.random() * alpha.length));
    }
  
    for (let i = 0; i < 5; i++) {
      ekene += numbers.charAt(Math.floor(Math.random() * numbers.length));
      ekene += specialChar.charAt(Math.floor(Math.random() * specialChar.length));
    }
  
    for (let i = 0; i < 15; i++) {
      mainData += ekene.charAt(Math.floor(Math.random() * ekene.length));
    }
  }

  // let data = ekene

  console.log("ghgghgj", mainData);

  return (
    <SafeAreaView>
      <View
        style={{
          height: 80,
          backgroundColor: "#00008B",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#FFDB51", fontSize: 18, fontWeight: "600" }}>
          Passwords
        </Text>
      </View>

      <View
        style={[
          styles.homeWelcomeCon,
          Platform.OS === "android"
            ? styles.homeWelConAndroid
            : styles.homeWelConIos,
        ]}
      >
        <MainText
          children="You can now generate your Unique password, click on the button below."
          style={{
            color: "#000000",
            fontSize: 23,
            fontWeight: "200",
            paddingBottom: 25,
          }}
        />

        <MainText
          children="Your Unique password is..."
          style={{
            color: "#000000",
            fontSize: 23,
            fontWeight: "200",
            paddingBottom: 45,
          }}
        />

        <MainText
          children={mainData === "" ? "Your unique password here" : mainData}
          style={{
            color: COLORS.colorOne,
            fontSize: 23,
            fontWeight: "400",
            paddingBottom: 25,
            textAlign: "center",
          }}
        />

        {/* {mainViewS()} */}
      </View>
      <MainButton
        title="Generate Password"
        // disabled={true}
        onPressFunction={() => generatePassword()}
        // redOutlineWhiteBg={}
      />

      <TouchableOpacity onPress={generatePassword}>
        <Text>{mainData}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PasswordScreen;

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
