import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';
import {useTheme} from '../../hooks/useTheme';

interface AppTextProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'bodySmall' | 'caption' | 'label';
  color?: 'text' | 'textSecondary' | 'textTertiary';
}

export const AppText: React.FC<AppTextProps> = ({
  variant = 'body',
  color = 'text',
  style,
  children,
  ...props
}) => {
  const {themeData} = useTheme();
  const textStyle = [
    styles.base,
    themeData.typography[variant],
    {color: themeData.colors[color]},
    style,
  ];

  return (
    <Text style={textStyle} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});
