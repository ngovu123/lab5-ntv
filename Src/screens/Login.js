import React from 'react';
import { useState, useEffect } from "react"
import { View } from "react-native"
import { useMyContextController, login } from "../context"
import { Button, Text, TextInput} from "react-native-paper"
import COLORS from "../../COLORS"

const Login = ({navigation})=> {
    const [email, setEmail] = useState("kiet2708@tdmu.edu.vn")
    const [password, setPassword] = useState("123456")
    const [showPassword, setShowPassword] = useState(false)
    const [controller, dispatch] = useMyContextController()
    const {userLogin} = controller

    useEffect(()=>{
        if(userLogin!=null)
        {
            if(userLogin.role == "admin")
                navigation.navigate("Admin")
            else
                navigation.navigate("Customer")
        }
    }, [userLogin])

    const onSubmit = () =>{
        login(dispatch, email, password)
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
          }}>
            <Text style={{
              fontSize: 40,
              fontWeight: "bold",
              alignSelf: "center",
              color: COLORS.pink,
              marginBottom: 30
            }}>Login</Text>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={{ margin: 10 }}
              mode="outlined"
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={{ margin: 10 }}
              right={
                <TextInput.Icon
                  icon="eye"
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              mode="outlined"
            />
            <Button mode="contained-tonal" 
                onPress={onSubmit}
                style={{ margin: 10, padding: 5 }} 
                labelStyle={{ fontSize: 20 }}>
                Đăng Nhập
            </Button>
        </View>
    )
}
export default Login;