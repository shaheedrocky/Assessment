import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomModal from './CustomModal';

interface ProductData {
  id: string;
  title: string;
  image: string;
}

interface ProductCardProps {
  data: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <View>
      <TouchableOpacity
        onPress={ openModal}
        className="bg-[#e9e9e9] rounded-lg p-4 flex-row space-x-4">
        <Image source={{uri: data?.image}} className="h-20 w-20 object-cover" />
        <Text className="text-black font-bold text-lg flex-1">
          {data.title}
        </Text>
      </TouchableOpacity>
      <CustomModal visible={isModalVisible} onClose={closeModal} data={data} />
    </View>
  );
};

export default ProductCard;
