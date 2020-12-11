import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens';
import {icons, COLORS} from '../constants';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: '10%',
  },
};

const CameraButton = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.primary,
      }}>
      <Image
        source={icons.camera}
        resizeMode="contain"
        style={{
          width: 23,
          height: 23,
          tintColor: COLORS.white,
        }}
      />
    </View>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;
          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.flash}
                  style={{tintColor: tintColor, width: 25, height: 25}}
                  resizeMode="contain"
                />
              );
            case 'Box':
              return (
                <Image
                  source={icons.cube}
                  style={{tintColor: tintColor, width: 25, height: 25}}
                  resizeMode="contain"
                />
              );
            case 'Camera':
              return <CameraButton />;
            case 'Search':
              return (
                <Image
                  source={icons.search}
                  style={{tintColor: tintColor, width: 25, height: 25}}
                  resizeMode="contain"
                />
              );
            case 'Favourite':
              return (
                <Image
                  source={icons.heart}
                  style={{tintColor: tintColor, width: 25, height: 25}}
                  resizeMode="contain"
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Box" component={Home} />
      <Tab.Screen name="Camera" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Favourite" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
