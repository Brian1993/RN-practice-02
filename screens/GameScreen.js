import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native'

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = (Math.random() * (max - min)) + min;
  if (randomNum === exclude) return generateRandomBetween(min, max, exclude)
  return randomNum;
}

const GameScreen = props => {
  const [currentGuess, setCurrentGuess ] = useState(generateRandomBetween(1, 100, props.userChoice));

  return (
    <View>
      <Text>Oppnets's Guess</Text>
      <NumberContainer> {currentGuess}</NumberContainer>
      <Card>
        <Button title='LOWER' onPress={() => {}}/>
        <Button title='GREATER' onPress={() => {}} />
      </Card>
    </View>
  )

}

const sytles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  }
})

export default GameScrren;

