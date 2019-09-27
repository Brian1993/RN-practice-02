import React from 'react';
import { View, Button as NativeButton, StyleSheet } from 'react-native';

const Button = props => {
  return (
    <View style={styles.container}>
      <NativeButton 
        {...props}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 50,
    maxHeight: '80%',
    maxWidth: '50%',
  }
})

export default Button

