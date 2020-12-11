import React from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const IncomingExpensesTitle = () => {
  return (
    <View style={{padding: 15, backgroundColor: COLORS.lightGray2}}>
      <Text style={{...FONTS.h3, color: COLORS.primary}}>
        INCOMING EXPENSES
      </Text>
      <Text style={{...FONTS.body4, color: COLORS.darkgray}}>12 Total</Text>
    </View>
  );
};
