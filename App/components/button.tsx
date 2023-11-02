import React, { ReactNode, useRef, useState } from 'react'
import { Neomorph } from 'react-native-neomorph-shadows'
import { Dimensions, Text, Touchable, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, Vibration } from 'react-native'
import { COLORS } from '../assets/constants';
import { styles } from './styles';


export interface IButtonProps {
    width: number,
    height: number,
    color: string,
    children: string,
    onPress: ([any]: string) => any
}

export function Button({ width, height, color, children, onPress }: IButtonProps) {
    const [ isPressed, setIsPressed ] = useState(false);
  return (
    <TouchableWithoutFeedback onPressOut={() => setIsPressed(false)} onPressIn={() => setIsPressed(true)} onPress={() => {onPress(children), Vibration.vibrate(100)}}>
        <Neomorph
            inner={isPressed}
            style={{
                shadowRadius: 10,
                borderRadius: 25,
                backgroundColor: color,
                width,
                height,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Text style={[styles.keyText, { fontSize: isPressed ? 26 : 30 }]}>
                {children && children}
            </Text>
        </Neomorph>
    </TouchableWithoutFeedback>
  )
}
