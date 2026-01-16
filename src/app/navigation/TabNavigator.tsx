import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mic, Settings as SettingsIcon, Info } from 'lucide-react-native';
import { VoiceScreen } from '../screens/VoiceScreen/VoiceScreen';
import { SettingsScreen } from '../screens/SettingsScreen/SettingsScreen';
import { AboutScreen } from '../screens/AboutScreen/AboutScreen';
import { useTheme } from '../../hooks/useTheme';

const Tab = createBottomTabNavigator();

export const TabNavigator: React.FC = () => {
  const { themeData } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themeData.colors.primary,
        tabBarInactiveTintColor: themeData.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: themeData.colors.surface,
          borderTopColor: themeData.colors.border,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Voice"
        component={VoiceScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Mic size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Info size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SettingsIcon size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
