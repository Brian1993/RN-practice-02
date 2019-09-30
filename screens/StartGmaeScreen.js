import React, { useState } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  // 不是 component, 是 react native 為方便 keyboard 操作的 api, 
  Keyboard,
  // 不是 component
  Alert
} from 'react-native';
import { 
  Card,
  Button,
  Input,
  NumberContainer
} from '../components'

import { COLORS } from '../constants'

const StartGameScreen = (props) => {
  const [enteredValue, setEnterValue] = useState('');
  const [isComfirmed, setComfirm] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnterValue(inputText.replace(/[^0-9]/g, ''))
  };

  const resetInputHandler = () => {
    setEnterValue('');
    setComfirm(false)
  }

  const comfirmInputHandler = () => {
    const choseNumber = parseInt(enteredValue)
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        'Invalid Number', 
        'Number has be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      )
      return;
    }
    
    setComfirm(true);
    setSelectedNumber(choseNumber)
    setEnterValue('')
    Keyboard.dismiss()
  }

  const renderComfirmedOutput = () => {
    let confirmedOutput
    if (isComfirmed) {
      confirmedOutput = (
        <Card style={styles.summaryContainer}>
          <Text>You selected</Text>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <Button title='Start' />
        </Card>
      );
    }
    return confirmedOutput
  }

  return (
    <TouchableWithoutFeedback 
      onPress={() => {Keyboard.dismiss()}}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>The Game Screen</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number:</Text>
          <Input 
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Button 
              title='Reset'
              color={COLORS.MAIN_COLOR}
              onPress={resetInputHandler}
            />
            <Button 
              title='Confirm' 
              color={COLORS.SUB_COLOR}
              onPress={comfirmInputHandler}
            />
          </View>
        </Card>
        {renderComfirmedOutput()}
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  






  result: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultContent: {
    marginTop: 20,
    padding: 10,
    width: '60%',
    height: 50,
    backgroundColor: COLORS.MAIN_COLOR_LIGHT,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  restartContainer: {
    marginTop: 20
  },
  restartButton: {
    width: 100,
    padding: 20
  }
});

export default StartGameScreen;
