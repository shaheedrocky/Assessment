import {View, FlatList,  Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootState} from '../redux/store';
import {useSelector} from 'react-redux';
import api from '../components/api/API';
import ProductCard from '../components/common/ProductCard';
import Layout from '../components/utils/Layout';

const Home = () => {
  const [data, setData] = useState<any[]>([]);  

  const ProductAPI = async () => {
    try {
      const response = await api.get('/products');
      setData(response.data);
    } catch (err) {
      console.log('error: ', err);
    }
  };

  useEffect(() => {
    ProductAPI();
  }, []);

  const items = useSelector((state: RootState) => state.user.items);

  const renderItem = ({item}: {item: any}) => <ProductCard data={item} />;

  const ItemSeperator = () => <View className="pb-4" />;

  return (
    <Layout>
      <View className="my-4">
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeperator}
            keyExtractor={item => item.id.toString()}
          />
        ) : (
          <Text className='text-center font-medium text-black text-sm'>No Products Available</Text>  
        )}
      </View>
    </Layout>
  );
};

export default Home;
