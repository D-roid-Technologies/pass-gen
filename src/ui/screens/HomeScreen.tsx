import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopComponent from "../../components/TopComponent";

const HomeScreen: React.FC<any> = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {/* <TopComponent textU="Home"/> */}
      <View
        style={{
          height: 80,
          backgroundColor: "#00008B",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#FFDB51", fontSize: 18, fontWeight: "600" }}>
          Home
        </Text>
      </View>
      <View>
        
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
