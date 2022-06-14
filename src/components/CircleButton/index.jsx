import React from 'react'
import { StyleSheet } from 'react-native'

//utils
import MyTouchableOpacity from '../../../utils/MyTouchableOpacity';

//styles
import Icon from 'react-native-vector-icons/Ionicons';

export default function CircleButton({ btnColor, position, icon, iconColor, onPress, sizeIcon }) {
  const getPosition = (position) => {
    switch (position) {
      case "upLeft":
        return styles.upLeft;
      case "upRight":
        return styles.upRight;
      case "downLeft":
        return styles.downLeft;
      case "downRight":
        return styles.downRight;
      default:
        return styles.upLeft;
    }
  }
  return (
    <MyTouchableOpacity
      fn={() => onPress()}
      style={[getPosition(position), { backgroundColor: btnColor }]}
      children={<Icon name={icon} size={sizeIcon ? sizeIcon : 50} color={iconColor ? iconColor : "#FFF"} />}
    />
  )
}

const styles = StyleSheet.create({
  upLeft: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 100,
    margin: 20
  },
  upRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 100,
    margin: 20
  },
  downLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 100,
    margin: 20
  },
  downRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 100,
    margin: 20
  }
})
