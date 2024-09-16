import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../../pages/auth/SignIn';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import Home from '../../pages/Home';
import Details from '../../pages/Details';

const RouteWrapper = () => {
  const Stack = createNativeStackNavigator();

  const {user} = useSelector((state: RootState) => state.user);
  console.log('User: ', user);

  return (
    <NavigationContainer>
      <Stack.Navigator >
        {user ? (
          <Stack.Group>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="details" component={Details} />
          </Stack.Group>
        ) : (
          <Stack.Screen name="login" component={SignIn} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteWrapper;
