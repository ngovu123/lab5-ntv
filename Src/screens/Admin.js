import React from 'react';
import { View, Text, Button } from 'react-native';
import { useMyContextController, logout } from "../context"
const Admin = () => {
    const [controller, dispatch] = useMyContextController(); 

    const handleLogout = () => {
        logout(dispatch);
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to the Admin page!</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

export default Admin;
