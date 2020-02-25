import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const App: React.FC<AppProps> = () => {
  const [textStyle, setTextStyle] = useState<boolean>(false);
  const [value, onChangeText] = useState('Useless Placeholder');

  return (
    <View style={styles.newstyles}>
      <View style={styles.black}>

        <View style={styles.container}>
          <Text style={textStyle ? [styles.red, styles.blah] : styles.altRed} onPress={() => setTextStyle(!textStyle)}>#crushingit</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          <Button
          title="Press me"
          color="#ff00ff"
          onPress={() => alert('Button with adjusted color pressed')}
        />
        </View>
      </View>

    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'white',
    backgroundColor: 'red',
    fontSize: 40
  },
  altRed: {
    color: 'red',
    backgroundColor: 'white',
    fontSize: 40
  },
  blah: {
    fontFamily: 'monospace'
  },
  newstyles: {
    flex: 1,
    backgroundColor: 'red',
    padding: 20
  },
  black: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20
  }
});
interface AppProps { }

export default App;
