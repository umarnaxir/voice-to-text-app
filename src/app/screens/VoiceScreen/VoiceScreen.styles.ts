import {StyleSheet} from 'react-native';
import {AppTheme} from '../../../theme/themes';

export const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      flex: 1,
      padding: theme.spacing.xl,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginBottom: theme.spacing.sm,
    },
    subtitle: {
      marginBottom: theme.spacing.xxxxl,
      textAlign: 'center',
    },
  });
