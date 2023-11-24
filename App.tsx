import React from 'react';

import CardActivityModule from './src/CardActivityModule';

import {SafeAreaView, useColorScheme, Button} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPress = () => {
    CardActivityModule.getCardInfo();
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button title="Escanear Cartão" color="#a11f80" onPress={onPress} />
    </SafeAreaView>
  );
}

export default App;
