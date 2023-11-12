import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaLogin from './telas/TelaLogin'
import TelaPosts from './telas/TalaPosts';
import TelaAddPosts from './telas/TelaAddPosts';
const Stack = createStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='TelaLogin' component={TelaLogin} options={{headerShown: false}}/>
          <Stack.Screen name='TelaPosts' component={TelaPosts} options={{headerShown: false}}/>
          <Stack.Screen name='TelaAddPosts' component={TelaAddPosts} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
