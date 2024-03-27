import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Callculator(): React.JSX.Element {
  const [result, setResult] = useState<number | string>(0);
  const [input, setInput] = useState('');

  const buttonPress = (value: number | String) => {
    try {
      if (value === '=') setResult(eval(input));
      else if (value === 'c') setInput('');
      else if (value === 'X') {
        setInput(input.substring(0, input.length - 1));
      } else {
        setInput(input + value);
      }
    } catch (error) {
      setResult('error');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.resultText}>{result}</Text>
        <Text style={styles.inputContainer}>{input}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.numberButton} onPress={() => buttonPress('7')}>
          7
        </Text>
        <Text style={styles.numberButton} onPress={() => buttonPress(8)}>
          8
        </Text>
        <Text style={styles.numberButton} onPress={() => buttonPress(9)}>
          9
        </Text>
        <Text style={styles.operationButton} onPress={() => buttonPress('/')}>
          /
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.numberButton} onPress={() => buttonPress(4)}>
          4
        </Text>
        <Text style={styles.numberButton} onPress={() => buttonPress(5)}>
          5
        </Text>
        <Text style={styles.numberButton} onPress={() => buttonPress(6)}>
          6
        </Text>
        <Text style={styles.operationButton} onPress={() => buttonPress('*')}>
          *
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.numberButton} onPress={() => buttonPress(1)}>
          1
        </Text>
        <Text style={styles.numberButton} onPress={() => buttonPress(2)}>
          2
        </Text>
        <Text style={styles.numberButton} onPress={() => buttonPress(3)}>
          3
        </Text>
        <Text style={styles.operationButton} onPress={() => buttonPress('-')}>
          -
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.operationButton} onPress={() => buttonPress('=')}>
          =
        </Text>
        <Text style={styles.operationButton} onPress={() => buttonPress('c')}>
          c
        </Text>
        <Text style={styles.operationButton} onPress={() => buttonPress('X')}>
          X
        </Text>
        <Text style={styles.operationButton} onPress={() => buttonPress('+')}>
          +
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    height:'100%',
    justifyContent:'flex-end',
    overflow:'hidden'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginVertical:15
  },
  resultText: {
    fontSize: 40,
    marginBottom:100
  },
  inputContainer: {
    fontSize: 30,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 5,
    marginVertical: 3,
  },
  numberButton: {
    backgroundColor: 'black',
    flex: 1,
    textAlign: 'center',
    borderRadius: 10,
    color: 'white',
    paddingVertical: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  operationButton: {
    backgroundColor: 'blue',
    color: 'white',
    flex: 1,
    textAlign: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Callculator;
