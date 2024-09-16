import { View, Text, SafeAreaView } from 'react-native';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SafeAreaView className='flex-1 bg-white px-4'>
      {children}
    </SafeAreaView>
  );
};

export default Layout;
