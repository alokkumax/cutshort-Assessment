
import React from 'react';
import { StyleSheet} from 'react-native';
import HomeScreen from './components/HomeScreen';
import RequestMoneyScreen from './components/RequestMoneyScreen';
import SplashScreen from './components/SplashScreen';
import SearchScreen from './components/Search';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MyStack = createStackNavigator()
 
 const App = () => {
     return (
         <NavigationContainer >
            <MyStack.Navigator initialRouteName='SplashScreen' component={SplashScreen}>
                <MyStack.Screen options={{headerShown: false}} name='SplashSreen' component={SplashScreen}/>
                <MyStack.Screen options={{headerShown: false}} name='HomeScreen' component={HomeScreen}/>
                <MyStack.Screen options={{headerShown: false}} name='RequestMoneyScreen' component={RequestMoneyScreen}/>
                <MyStack.Screen options={{headerShown: false}} name='SearchScreen' component={SearchScreen}/>
            </MyStack.Navigator>
         </NavigationContainer>
     )
 }
 
 export default App;
 
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: '#010A43'
     }
 })


