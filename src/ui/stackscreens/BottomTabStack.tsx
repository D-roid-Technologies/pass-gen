import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import UserNameScreen from "../screens/UserNameScreen";
import PasswordScreen from "../screens/PasswordScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BlurView } from "expo-blur";

const Tab = createBottomTabNavigator();

const BottomTabStack: React.FC<any> = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: "#8B8000",
        tabBarActiveTintColor: "#FFDB51",
        tabBarStyle: {
          backgroundColor: "#00008B",
          marginBottom: 12,
          height: 80,
          borderRadius: 20,
          marginLeft: 20,
          marginRight: 20,
          paddingBottom: 10
        },
      }}
    >
      <Tab.Screen
        name="User Name"
        component={UserNameScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Password"
        component={PasswordScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pin" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
