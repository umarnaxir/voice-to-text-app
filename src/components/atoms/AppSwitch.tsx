import React from 'react';
import {Switch, SwitchProps} from 'react-native';
import {useTheme} from '../../hooks/useTheme';

interface AppSwitchProps extends SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export const AppSwitch: React.FC<AppSwitchProps> = ({
  value,
  onValueChange,
  ...props
}) => {
  const {themeData} = useTheme();

  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{
        false: themeData.colors.border,
        true: themeData.colors.primary,
      }}
      thumbColor={themeData.colors.background}
      {...props}
    />
  );
};
