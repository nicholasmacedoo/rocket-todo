import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { defaultTheme } from './src/styles/defaultTheme';
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar 
        backgroundColor='transparent'
        style='light'
        translucent 
      />
      {!fontsLoaded ? <Loading /> : <Home />}
    </ThemeProvider>
  );
}
