
import { useMyContextController } from "../context";

export default Services = ({natigation})=>{
    const [controller, dispatch] = useMyContextController()
    const {userLogin} = controller
    useEffect(()=>{
        if(userLogin==null)
            navigation.navigate("Login")
    },[userLogin])
}