import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import {COLORS, FONTS, icons, SIZES} from '../constants';
import {CategoryList} from './CategoryList';

export const CategoryHeader = () => {
  const [viewMode, setViewMode] = useState('chart');
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          padding: SIZES.padding,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {/** Title */}
        <View>
          <Text style={{color: COLORS.primary, ...FONTS.h3}}>CATEGORIES</Text>
          <Text style={{color: COLORS.darkgray, ...FONTS.body4}}>6 Total</Text>
        </View>
        {/** Buttons */}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              width: 50,
              backgroundColor: viewMode == 'chart' ? COLORS.secondary : null,
              borderRadius: 25,
            }}
            onPress={() => setViewMode('chart')}>
            <Image
              source={icons.chart}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: viewMode == 'chart' ? COLORS.white : COLORS.darkgray,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              width: 50,
              backgroundColor: viewMode == 'list' ? COLORS.secondary : null,
              borderRadius: 25,
            }}
            onPress={() => setViewMode('list')}>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: viewMode == 'list' ? COLORS.white : COLORS.darkgray,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {viewMode == 'list' && (
          <View>
            <CategoryList />
          </View>
        )}
      </ScrollView>
    </>
  );
};
