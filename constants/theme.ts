import { TextStyle } from 'react-native';

export const theme = {
  colors: {
    primary: '#FFD700',
    secondary: '#FFFFFF',
    background: '#FFFFFF',
    text: '#1A1A1A',
    error: '#FF3B30',
    success: '#34C759',
    gray: '#FFE5B4',
    lightGray: '#FFF8E1',
    darkGray: '#FFC107',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: '700' as TextStyle['fontWeight'],
    },
    h2: {
      fontSize: 24,
      fontWeight: '600' as TextStyle['fontWeight'],
    },
    body: {
      fontSize: 16,
      fontWeight: '400' as TextStyle['fontWeight'],
    },
    caption: {
      fontSize: 14,
      fontWeight: '400' as TextStyle['fontWeight'],
    },
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
}; 