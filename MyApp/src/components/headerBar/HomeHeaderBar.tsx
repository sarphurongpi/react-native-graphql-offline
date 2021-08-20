import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';

interface HomeHeaderBarProps {}

const HomeHeaderBar: React.FC<HomeHeaderBarProps> = ({}) => {
  return (
    <View style={containerStyle}>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Create Post
      </Button>
    </View>
  );
};

const containerStyle: ViewStyle = {
  flex: 1,
  paddingRight: 30,
  flexDirection: 'row',
  justifyContent: 'flex-end',
};

export default HomeHeaderBar;
