import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PasswordScreen: React.FC<any> = () => {
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
    </SafeAreaView>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({});
