import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from './screens/Search';
import Home from './screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#4A8DB7" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              let iconName;
              if (route.name === 'home') {
                iconName = 'home-city-outline';
              } else if (route.name === 'search') {
                iconName = 'city';
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={25}
                  color={color}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: '#bdbdbd',
            activeBackgroundColor: '#4A8DB7',
            inactiveBackgroundColor: '#4A8DB7',
          }}>
          <Tab.Screen
            name="home"
            component={Home}
            initialParams={{city: 'london'}}
          />
          <Tab.Screen
            name="search"
            component={Search}
            initialParams={{city: 'london'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
