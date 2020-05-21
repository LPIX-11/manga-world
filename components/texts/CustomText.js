import React from 'react';
import { Text, View } from 'native-base';

export default CustomText = props => {
  return (
    <View style={{
      alignItems: props.alignment,
      paddingTop: props.paddingTop,
      paddingRight: props.paddingRight,
      paddingBottom: props.paddingBottom,
      paddingLeft: props.paddingLeft,
      width: props.width
    }}>
      <Text style={{
        color: props.textColor ? props.textColor : '#000000',
        fontSize: props.size,
        fontStyle: props.textStyle,
        fontWeight: props.bold ? '700' : '400',
        textAlign: props.alignText ? props.alignText : 'auto',
      }}>
        {props.text}
      </Text>
    </View>
  )
}
