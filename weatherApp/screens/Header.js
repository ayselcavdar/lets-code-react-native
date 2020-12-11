import * as React from 'react';
import {Appbar, Title} from 'react-native-paper';
import {View, Text} from 'react-native';

const Header = (props) => {
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: '#4A8DB7',
        },
      }}
      style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Title style={{color: '#FFFFFF'}}>{props.name}</Title>
    </Appbar.Header>
  );
};

export default Header;
