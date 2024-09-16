import React, {useCallback, useState} from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import Layout from '../../components/utils/Layout';
import CustomInput from '../../components/common/CustomInput';
import Spacer from '../../components/common/Spacer';
import CustomButton from '../../components/common/CustomButton';
import {setUser} from '../../redux/slice/UserSlice';
import {RootState} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState({email: '', password: '', username: ''});

  const handleSubmit = useCallback(() => {
    let hasError = false;
    let newError = {email: '', password: '', username: ''};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password || !username) {
      newError = {
        email: email ? '' : 'Email is required',
        password: password ? '' : 'Password is required',
        username: username ? '' : 'Username is required',
      };
      hasError = true;
    } else if (username.length < 3) {
      newError.username = 'Username must be at least 3 characters long';
      hasError = true;
    }

    if (password.length < 8) {
      newError.password = 'Password must be at least 8 characters long';
      hasError = true;
    }

    if (!emailRegex.test(email) && email.length > 0) {
      newError.email = 'Invalid email format';
      hasError = true;
    }

    setError(newError);

    if (!hasError) {
      dispatch(setUser({email, password, username}));
    }
  }, [email, password, username, dispatch]);

  return (
    <Layout>
      <ScrollView className="flex-1 -mx-4">
        <View className="bg-primary p-4 ">
          <Text className="text-white font-semiBold text-4xl mt-24">
            Sign in to your Account
          </Text>
          <Text className="text-gray-400 font-medium text-sm mb-4">
            Sign in to your Account
          </Text>

          <View className="bg-white opacity-10 h-72 w-72 rounded-full  absolute -left-20 -top-20" />
          <View className="bg-white opacity-5  h-96 w-96 rounded-full absolute  -left-24 -top-24" />
        </View>
        <View className="mx-4 ">
          <Spacer gap={20} />
          <CustomInput
            placeholder="XXXXXXX"
            onChangeText={val => {
              setUsername(val);
            }}
            value={username}
            error={error.username}
          />
          <Spacer gap={20} />
          <CustomInput
            placeholder="your@example.com"
            onChangeText={val => {
              setEmail(val);
            }}
            value={email}
            error={error.email}
          />
          <Spacer gap={20} />
          <CustomInput
            placeholder="•••••••••"
            onChangeText={val => {
              setPassword(val);
            }}
            value={password}
            error={error.password}
          />
          <Spacer gap={40} />

          <CustomButton title="Login" onPress={handleSubmit} />
          <Spacer gap={20} />
        </View>
      </ScrollView>
    </Layout>
  );
};

export default SignIn;
