import React, {useState, useMemo} from 'react';
import {View, TextInput, Animated, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {startAnimation} from '@helpers';

import {formInputStyles} from './styles';

export const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChangeText,
  error,
  secureTextEntry,
  keyboardType = 'default',
  autoCapitalize = 'none',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const labelPosition = useMemo(
    () => new Animated.Value(value ? 1 : 0),
    [value],
  );

  const handleFocus = () => {
    setIsFocused(true);
    startAnimation(labelPosition, 1, 200, false);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      startAnimation(labelPosition, 0, 200, false);
    }
  };

  const styles = formInputStyles();

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.label,
          {
            top: labelPosition.interpolate({
              inputRange: [0, 1],
              outputRange: [18, 0],
            }),
            fontSize: labelPosition.interpolate({
              inputRange: [0, 1],
              outputRange: [16, 12],
            }),
            color: error
              ? styles.errorColor.color
              : styles.placeholderColor.color,
          },
        ]}>
        {label}
      </Animated.Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            isFocused && styles.focusedInput,
            error && styles.errorInput,
          ]}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          placeholderTextColor={styles.placeholderColor.color}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color={styles.placeholderColor.color}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
