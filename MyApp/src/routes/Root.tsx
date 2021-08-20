import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeHeaderBar from '../components/headerBar/HomeHeaderBar';
import { RootStackParamList } from '../navigation/RootStackParams';
import CreatePost from '../screens/CreatePost';
import Home from '../screens/Home';

interface RootProps {}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Root: React.FC<RootProps> = ({}) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <HomeHeaderBar />,
        }}
      />
      <RootStack.Screen name="CreatePost" component={CreatePost} />
    </RootStack.Navigator>
  );
};

export default Root;
