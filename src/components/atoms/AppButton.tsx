import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, StyleSheet} from 'react-native';
import {useTheme} from '../../hooks/useTheme';

interface AppButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'error';
  size?: 'small' | 'medium' | 'large';
}

export const AppButton: React.FC<AppButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  style,
  children,
  ...props
}) => {
  const {themeData} = useTheme();
  const buttonStyle = [
    styles.base,
    styles[size],
    {
      backgroundColor:
        variant === 'primary'
          ? themeData.colors.primary
          : themeData.colors.error,
    },
    style,
  ];

  return (
    <TouchableOpacity style={buttonStyle} activeOpacity={0.7} {...props}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  small: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 36,
  },
  medium: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 44,
  },
  large: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    minHeight: 52,
  },
});
