import { TouchableOpacity } from "react-native";

const MyTouchableOpacity = ({childreen, fn, style}) => <TouchableOpacity style={style} onPress={()=> fn && fn()} >{childreen}</TouchableOpacity>;

export default MyTouchableOpacity;