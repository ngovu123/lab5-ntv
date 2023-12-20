import useMyContextController from "../context"
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import COLORS from "../..//COLORS"

export default Setting = ({navigation})=>{
    const [controller, dispatch] = useMyContextController()
    const {userLogin} = controller
    useEffect(()=>{
        if(userLogin==null)
            navigation.navigate("Login")
    },[userLogin])

    return(
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ 
                height:100, 
                backgroundColor: COLORS.pink,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space between",
            }}>
                <Text variant="displaySmall" style={{ color: COLORS.white }}>
                    {(userLogin != null) && userLogin.name.toUpperCase()}
                </Text>
                <IconButton
                    icon="account-circle"
                    size={40}
                    iconColor={COLORS.white}
                />
            </View>
            <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                <Image source={require("./source-logo.png")} style={{ margin: 10, alignSelf: "center" }} />
                <View style={{
                    height: 50,
                    backgroundColor: COLORS.white,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space between",
                }}>
                    <Text variant="headlineSmall" style={{ color: COLORS.black, fontWeight: "bold" }}>Danh sách Dịch Vụ</Text>
                    <IconButton
                    icon="plus-circle"
                    size={40}
                    iconColor={COLORS.pink}
                    onPress={() => navigation.navigate("AddNewService")}
                    />
                </View>
            </View>
        </View>
    )
}