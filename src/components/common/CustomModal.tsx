import React, { useState, useRef, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  Animated,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../../redux/slice/UserSlice';

const CustomModal: React.FC<{
  visible: boolean;
  onClose: () => void;
  data: any;
}> = ({ visible, onClose, data }) => {
  const [name, setName] = useState(data?.title || '');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        if (!visible) onClose();
      });
    }
  }, [visible]);

  const handleConfirm = () => {
    const updatedItem = { ...data, title: name };
    dispatch(setItem(updatedItem));
    navigation.navigate('details', { id: updatedItem.id });
    onClose();
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Animated.View
          style={{
            backgroundColor: 'white',
            padding: 16,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            opacity: fadeAnim,
          }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Icon
              name="close"
              size={24}
              color="black"
              onPress={onClose}
              style={{ alignSelf: 'flex-end' }}
            />
            <Image
              source={{ uri: data?.image }}
              style={{ width: '100%', height: 200, marginBottom: 16 }}
            />
            <TextInput
              value={name}
              onChangeText={setName}
              style={{
                borderColor: '#ccc',
                borderWidth: 1,
                borderRadius: 8,
                padding: 8,
                marginBottom: 16,
                fontSize: 18,
                color: 'black'
              }}
              placeholder="Edit Name"
            />
            <Text style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>
              {data?.category}
            </Text>
            <Text style={{ color: '#666', fontSize: 14, marginBottom: 16 }}>
              {data?.description}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
              ${data?.price}
            </Text>
            <TouchableOpacity
              onPress={handleConfirm}
              style={{
                backgroundColor: '#007bff',
                padding: 12,
                borderRadius: 8,
                alignItems: 'center'
              }}>
              <Text style={{ color: 'white', fontSize: 16 }}>OK</Text>
            </TouchableOpacity>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default CustomModal;
