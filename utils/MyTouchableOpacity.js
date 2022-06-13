import { TouchableOpacity } from "react-native";

const MyTouchableOpacity = ({ children, fn, style, onLongPress, delayLongPress }) =>
  <TouchableOpacity
    style={style}
    onPress={() => fn && fn()}
    onLongPress={() => onLongPress && onLongPress()}
    delayLongPress={delayLongPress && delayLongPress}
  >
    {children}
  </TouchableOpacity>;

export default MyTouchableOpacity;