import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../constants'

const Input = props => {
  return <TextInput
    {...props}
    keyboardType={'number-pad'}
    style={{ ...styles.input, ...props.style }}
  />
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: COLORS.INPUT,
    borderBottomWidth: 1,
    marginVertical: 10
  }
})

export default Input;
