import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {

const [text, setText] = useState("");
const [number, setNumber] = useState(6);
const [counter, setCounter] = useState(1);

const handlePress = () => {
  setCounter(counter+1)
  if (text > number) {
    Alert.alert("your number is higer") 
  }
  if (text < number){
    Alert.alert("your numbeer is lower") 
  }
  if (text == number) {
    Alert.alert("correct! it took you " + counter + " tries") ;
  }
}
const changeNumber = () =>{
  const rndInt = Math.floor(Math.random() * 100) + 1
  setNumber(rndInt);
  setCounter(0);
}
  return (
    <View style={styles.container}>
      <Text>Number between 1-100</Text>
      <TextInput
  placeholder='Place your number'
  onChangeText={text => setText(text)} 
  value={text} 
      keyboardType="numeric"
      />
      <View>
      <Button onPress={handlePress} title="Make guess" />
      <Button onPress={changeNumber} title="Change Number" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
