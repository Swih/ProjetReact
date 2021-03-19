import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
export const varContexte = React.createContext({
  cart: '',
  setCart: () => { },
  isOn: {},
  setToggle: () => { },
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [cart, setCart] = useState(0);
  const [isOn, setToggle] = useState({
    count: 0,
    isOnFirst: false,
    isOnSecond: false,
    isOnThird: false,
    isOnFourth: false,
  });

  const varGlobal = {
    cart: cart,
    setCart: setCart,
    isOn: isOn,
    setToggle: setToggle
  }


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <varContexte.Provider value={varGlobal}>
          <Navigation colorScheme={colorScheme} />
        </varContexte.Provider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
