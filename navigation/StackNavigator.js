import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterUser from "../screens/RegisterUser";
import ActivateUser from "../screens/ActivateUser";
import MuqtadiProfile from "../screens/MuqtadiProfile";


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#833471",
  },
  headerTintColor: "white",


  headerShown: true,
  headerTitleStyle: {
    fontweight: 'bold',
    hight: 100,

  }

};


const RegisterUserStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Register User" component={RegisterUser} />
      <Stack.Screen name="Activate User" component={ActivateUser} />
      <Stack.Screen name="Muqtadi Profile" component={MuqtadiProfile} />
    </Stack.Navigator>
  );
}



export { RegisterUserStackNavigator };

