import { TouchableOpacity } from "react-native";

const MyTouchableOpacity = ({ childreen, fn, style, onLongPress, delayLongPress }) =>
  <TouchableOpacity
    style={style}
    onPress={() => fn && fn()}
    onLongPress={() => onLongPress && onLongPress()}
    delayLongPress={delayLongPress && delayLongPress}
  >
    {childreen}
  </TouchableOpacity>;

export default MyTouchableOpacity;