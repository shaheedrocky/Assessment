import {View, Text, Image, } from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Layout from '../components/utils/Layout';

interface RouteParams {
  id: string;
}

const Details = () => {
  const route = useRoute();
  const {id} = route.params as RouteParams;

  const item = useSelector((state: RootState) =>
    state.user.items.find(item => item.id === id),
  );

  if (!item) {
    return (
      <View style={styles.container}>
        <Text className='text-center font-medium text-black text-sm'>Item not found</Text>
      </View>
    );
  }
  console.log('10101: ', item);

  return (
    <Layout>
      <Image source={{uri: item.image}} className="w-full h-52 mb-2 object-cover" />
      <Text className="text-black font-bold text-2xl">{item.title}</Text>
      <Text className="text-gray-400 font-semiBold text-sm uppercase">{item.category}</Text>
      <Text className="text-gray-500  font-regular text-sm">{item.description}</Text>
      <Text className="text-black font-bold text-2xl">${item.price}</Text>
    </Layout>
  );
};



export default Details;
