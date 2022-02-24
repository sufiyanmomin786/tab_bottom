import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { RegisterUserStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
    return (
        <Tab.Navigator



            screenOptions={({ route }) => ({
                //tabBarActiveTintColor: "#f5610a",
                // tabBarInactiveTintColor: "#555",
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarStyle: {
                    backgroundColor: '#833471'
                }
            })}
        >
            <Tab.Screen name="Register as Muqtadi" options={{ headerShown: false }} component={RegisterUserStackNavigator} />
            <Tab.Screen name="Register as Masjid Mgmt" options={{ headerShown: false }} component={RegisterUserStackNavigator} />
            <Tab.Screen name="Register as Imam" options={{ headerShown: false }} component={RegisterUserStackNavigator} />
        </Tab.Navigator>

    );
}

export default BottomTabNavigator;