import React from 'react';
import { Text, View } from 'native-base';

export default CustomText = props => {
  return (
    <View>
      <Text
        style={{
          color: props.textColor,
          fontFamily: props.fontFamily,
          fontSize: props.size,
          fontWeight: props.textWeight,
          lineHeight: props.lineHeight,
          paddingTop: props.paddingTop,
          paddingRight: props.paddingRight,
          paddingBottom: props.paddingBottom,
          paddingLeft: props.paddingLeft,
          textAlign: props.content
        }}
      >
        {props.text}
      </Text>
    </View >
  )
}
