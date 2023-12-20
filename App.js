import React, { useEffect } from "react";
import {firebase}  from "./config";
import { NavigationContainer } from "@react-navigation/native";
import { MyContextControllerProvider } from "./Src/context";
import Router from "./Src/screens/Router"
const initial = ()=> {
  const USERS = firebase.firestore().collection("USERS")
  const admin = {
    name: "admin",
    phone: "0909090909",
    address: "Binh Duong",
    email: "kiet2708@tdmu.edu.vn",
    password: "123456",
    role: "admin"
  }
  
  USERS.doc(admin.email)
  .onSnapshot(u=> {
    if(!u.exists){
      firebase.auth().createUserWithEmailAndPassword(admin.email, admin.password)
      .then(()=>
        USERS.doc(admin.email).set(admin)
        .then(()=>console.log("Add new admin"))
      )
    }
  })
}

const App = () => {
  useEffect(()=>{
    initial()
  },[])
  return (
    <MyContextControllerProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </MyContextControllerProvider>
  )}

export default App