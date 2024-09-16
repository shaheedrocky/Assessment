import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity className="bg-ternary p-3 rounded-lg " onPress={onPress}>
      <Text className="text-primary text-xl font-semiBold text-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
