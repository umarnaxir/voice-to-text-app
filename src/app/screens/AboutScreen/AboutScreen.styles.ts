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
      marginTop: theme.spacing.xxxxl,
    },
    title: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.xl,
    },
    infoSection: {
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
    },
  });
