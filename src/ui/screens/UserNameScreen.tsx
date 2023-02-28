import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UserNameScreen: React.FC<any> = () => {
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
          User Name
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default UserNameScreen;

const styles = StyleSheet.create({});
