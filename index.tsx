import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import DestinationList from '../screens/Destinationlist ';
import DestinationDetail from '../screens/Destinationdetail';
import { Destination } from '../data/destinations'
 
type Screen = 'list' | 'detail';
 
const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('list');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
 
  const navigateToDetail = (destination: Destination) => {
    setSelectedDestination(destination);
    setCurrentScreen('detail');
  };
 
  const navigateBack = () => {
    setCurrentScreen('list');
    setSelectedDestination(null);
  };
 
  return (
    <View style={styles.root}>
      {currentScreen === 'list' && (
        <DestinationList onSelectDestination={navigateToDetail} />
      )}
 
      {currentScreen === 'detail' && selectedDestination && (
        <DestinationDetail
          destination={selectedDestination}
          onBack={navigateBack}
        />
      )}
    </View>
  );
};
 
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0A0A0F',
  },
});
 
export default App;