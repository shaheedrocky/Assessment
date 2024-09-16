import {View, Text, TextInput} from 'react-native';
import React from 'react';

interface CustomInputProps {
  type?: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  className?: string;
  error: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type = 'text',
  placeholder,
  onChangeText,
  value,
  className,
  error,
}) => {
  console.log("className: ",className)

  switch (type) {
    case 'text':
      return (
        <>
          <TextInput
            placeholder={placeholder}
            className={`border rounded-lg px-4 font-medium text-sm text-black ${className}`}
            placeholderTextColor={'gray'}
            onChangeText={onChangeText}
            value={value}
          />
          {error && (
            <Text className="text-red-900 font-medium text-xs mt-1">{error}</Text>
          )}
        </>
      );
  }
};

export default CustomInput;
