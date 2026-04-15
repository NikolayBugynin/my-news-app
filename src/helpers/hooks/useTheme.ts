import { useContext } from 'react';
import { ThemeContext } from '../../components/context/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('context Error');
  }

  return context;
};
