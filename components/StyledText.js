import React from 'react';
import { Text } from 'react-native';

export default Text = props => {
  return (
    <Text
      style={{
        color: props.textColor,
        fontFamily: props.fontFamily,
        fontSize: props.size
      }}
    >
      { props.text }
    </Text>
  )
}
