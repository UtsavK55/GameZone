import React, {useEffect, useMemo, useState} from 'react';
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
import CustomText from '@components/customText';
import {ROUTES} from '@constants';
import {IMAGES} from '@constants/imageConstants';
import {
  startAnimation,
  validateEmail,
  validatePassword,
  validateUsername,
} from '@helpers';
import {useSignupMutation} from '@network/hooks/auth';
import {useThemeColors} from '@theme';

import {signupStyles} from './styles';

const Signup = () => {
  const navigation = useNavigation<AuthNavigationType>();
  const styles = signupStyles();
  const colors = useThemeColors();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
  }>({});

  const fadeAnim = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    startAnimation(fadeAnim, 1, 1000);
  }, [fadeAnim]);

  const signupMutation = useSignupMutation();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  const handleSignup = () => {
    const usernameError = validateUsername(formData.username);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setErrors({
      username: usernameError,
      email: emailError,
      password: passwordError,
    });

    if (!usernameError && !emailError && !passwordError) {
      signupMutation.mutate(formData);
    }
  };

  const onPressLogin = () => navigation.replace(ROUTES.AUTH.LOGIN);

  const formFields = useMemo(
    () => [
      {
        label: 'Username',
        value: formData.username,
        onChangeText: (text: string) => handleInputChange('username', text),
        error: errors.username,
      },
      {
        label: 'Email',
        value: formData.email,
        onChangeText: (text: string) => handleInputChange('email', text),
        error: errors.email,
        keyboardType: 'email-address' as const,
      },
      {
        label: 'Password',
        value: formData.password,
        onChangeText: (text: string) => handleInputChange('password', text),
        error: errors.password,
        secureTextEntry: true,
      },
    ],
    [formData, errors],
  );

  return (
    <BaseContainer>
      <GradientBackground>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{flex: 1}}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled">
            <Animated.View style={[styles.content, {opacity: fadeAnim}]}>
              <FastImage
                resizeMode="contain"
                defaultSource={IMAGES.logoImg2}
                style={styles.logo}
              />
              <CustomText style={styles.title}>Create a new Account</CustomText>
              <CustomText style={styles.subtitle}>
                Join the gaming community
              </CustomText>

              <View style={styles.form}>
                {formFields.map((field, index) => (
                  <FormInput
                    key={index}
                    label={field.label}
                    value={field.value}
                    onChangeText={field.onChangeText}
                    error={field.error}
                    secureTextEntry={field.secureTextEntry}
                    keyboardType={field.keyboardType}
                  />
                ))}

                <Button
                  label={
                    signupMutation.isLoading ? (
                      <Loader
                        bgColor={colors.orange500}
                        color={colors.fixedBlack}
                      />
                    ) : (
                      'Submit'
                    )
                  }
                  onPress={handleSignup}
                  disabled={signupMutation.isLoading}
                  bgColor={colors.orange500}
                  textColor={colors.fixedBlack}
                />

                <View style={styles.loginContainer}>
                  <CustomText style={styles.loginText}>
                    Already have an account?{' '}
                  </CustomText>
                  <TouchableOpacity onPress={onPressLogin}>
                    <CustomText style={styles.loginLink}>Login</CustomText>
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

export default Signup;
