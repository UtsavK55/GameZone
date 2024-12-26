import React, {useEffect, useState, useMemo} from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import BaseContainer from '@components/baseContainer';
import FormInput from '@components/formInput';
import Loader from '@components/loader';
import GradientBackground from '@components/gradientBackground';
import Button from '@components/button';
import {ROUTES} from '@constants';
import {IMAGES} from '@constants/imageConstants';
import {startAnimation, validateEmail, validatePassword} from '@helpers';
import {useLoginMutation} from '@network/hooks/auth';
import {useThemeColors} from '@theme';

import {loginStyles} from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation<AuthNavigationType>();

  const styles = loginStyles();
  const colors = useThemeColors();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{email?: string; password?: string}>({});

  const fadeAnim = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    startAnimation(fadeAnim, 1, 1000);
  }, [fadeAnim]);

  const loginMutation = useLoginMutation();

  const handleLogin = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (!emailError && !passwordError) {
      loginMutation.mutate({email, password});
    }
  };

  const onPressSignup = () => {
    navigation.replace(ROUTES.AUTH.SIGNUP);
  };

  const formInputs = useMemo(
    () => [
      {
        label: 'Email',
        value: email,
        onChangeText: setEmail,
        error: errors.email,
        keyboardType: 'email-address',
      },
      {
        label: 'Password',
        value: password,
        onChangeText: setPassword,
        error: errors.password,
        secureTextEntry: true,
      },
    ],
    [email, password, errors],
  );

  return (
    <BaseContainer>
      <GradientBackground>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{flex: 1}}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Animated.View style={[styles.content, {opacity: fadeAnim}]}>
              <FastImage
                resizeMode="contain"
                defaultSource={IMAGES.logoImg2}
                style={styles.logo}
              />
              <Text style={styles.title}>Welcome Back!</Text>
              <Text style={styles.subtitle}>Log in to continue</Text>

              <View style={styles.form}>
                {formInputs.map((input, index) => (
                  <FormInput key={index} {...input} />
                ))}

                <Button
                  label={
                    loginMutation.isLoading ? (
                      <Loader
                        bgColor={colors.orange500}
                        color={colors.fixedBlack}
                      />
                    ) : (
                      'Submit'
                    )
                  }
                  onPress={handleLogin}
                  disabled={loginMutation.isLoading}
                  bgColor={colors.orange500}
                  textColor={colors.fixedBlack}
                />

                <View style={styles.signupContainer}>
                  <Text style={styles.signupText}>Don't have an account? </Text>
                  <TouchableOpacity onPress={onPressSignup}>
                    <Text style={styles.signupLink}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Animated.View>
          </ScrollView>
        </KeyboardAvoidingView>
      </GradientBackground>
    </BaseContainer>
  );
};

export default Login;
