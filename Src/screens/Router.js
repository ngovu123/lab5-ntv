import React from "react";
import Admin from './Admin'
import Login from './Login';
import Customer from './Customer'
import { useMyContextController } from "../context";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler'

const Stack = createStackNavigator()

const Router = () => {
    const [controller, dispatch] = useMyContextController()
    const {userLogin} = controller

    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Admin" component={Admin}/>
            <Stack.Screen name="Customer" component={Customer}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}
export default Router;
