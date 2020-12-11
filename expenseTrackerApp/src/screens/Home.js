import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Navbar, Header, CategoryHeader} from '../components';
import {COLORS, SIZES, FONTS} from '../constants';
import {CategoryList} from '../components/CategoryList';

const Home = () => {
  const [viewMode, setViewMode] = useState('chart');

  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightGray2}}>
      {/* Navbar Section   */}
      <Navbar />

      {/* Header Section */}
      <Header />
      <CategoryHeader />

      {/* Category Header Section */}
    </View>
  );
};

export default Home;
