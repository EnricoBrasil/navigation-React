import Constants from 'expo-constants'
import { StyleSheet, Text, View, Image } from 'react-native';

import Welcome from './Components/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
     <Welcome name="Enrico" age={22} gender={true}/>
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
  image: {
    flex:1,
    width: '100%',
    backgroundColor:'#0553'
  }
});
