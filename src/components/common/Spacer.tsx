import {View, Text} from 'react-native';
import React from 'react';

interface SpacerProps {
  gap: number;
}

const Spacer: React.FC<SpacerProps> = ({gap}) => {
  return <View style={{height: gap}} />;
};

export default Spacer;
