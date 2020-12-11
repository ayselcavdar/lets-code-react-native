import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

export const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding3,
        backgroundColor: COLORS.white,
      }}>
      <View>
        <Text style={{color: COLORS.primary, ...FONTS.h2}}>My Expenses</Text>
        <Text style={{color: COLORS.darkgray, ...FONTS.h3}}>
          Summary (private)
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding3,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: COLORS.lightGray,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={icons.calendar}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.lightBlue,
            }}
          />
        </View>
        <View style={{marginLeft: SIZES.padding}}>
          <Text style={{color: COLORS.primary, ...FONTS.h3}}>16 Nov, 2020</Text>
          <Text style={{...FONTS.body3, color: COLORS.darkgray}}>
            18% more than last mounth
          </Text>
        </View>
      </View>
    </View>
  );
};
