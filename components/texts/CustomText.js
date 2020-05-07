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
          paddingTop: props.paddingTop,
          textAlign: props.align
        }}
      >
        {props.text}
      </Text>
    </View >
  )
}
