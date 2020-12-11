import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {COLORS, icons, SIZES} from '../constants';

export const Navbar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          width: 50,
        }}
        onPress={() => console.log('Back')}>
        <Image
          source={icons.back_arrow}
          style={{
            width: 30,
            height: 30,
            tintColor: COLORS.primary,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
          width: 50,
        }}
        onPress={() => console.log('More')}>
        <Image
          source={icons.more}
          style={{
            width: 30,
            height: 30,
            tintColor: COLORS.primary,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
