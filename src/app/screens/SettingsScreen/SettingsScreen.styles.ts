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
      marginTop: theme.spacing.xxxl,
      
    },
    header: {
      marginTop: theme.spacing.xxxl,
      marginBottom: theme.spacing.md,
    },
    section: {
      marginTop: theme.spacing.md,
    },
    currentThemeContainer: {
      marginTop: theme.spacing.lg,
      padding: theme.spacing.md,
      backgroundColor: theme.colors.surface,
      borderRadius: 8,
    },
  });
