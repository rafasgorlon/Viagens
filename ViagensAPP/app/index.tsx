import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import DestinationList from '../src/screens/DestinationList';
import DestinationDetail from '../src/screens/DestinationDetail';
import MyTrip from '../src/screens/MyTrip';

import { Destination } from '../src/data/destinations';

type Screen = 'list' | 'detail' | 'trip';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] =
    useState<Screen>('list');

  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);

  const [tripDestinations, setTripDestinations] =
    useState<Destination[]>([]);

  const navigateToDetail = (
    destination: Destination
  ) => {
    setSelectedDestination(destination);
    setCurrentScreen('detail');
  };

  const navigateBack = () => {
    setCurrentScreen('list');
    setSelectedDestination(null);
  };

  const navigateToTab = (tabId: string) => {
    if (tabId === 'trip') {
      setCurrentScreen('trip');
      return;
    }

    setCurrentScreen('list');
  };

  const addToTrip = (
    destination: Destination
  ) => {
    const alreadyExists =
      tripDestinations.some(
        (item) => item.id === destination.id
      );

    if (alreadyExists) {
      return;
    }

    setTripDestinations((prev) => [
      ...prev,
      destination,
    ]);
  };

  const removeFromTrip = (
    destinationId: string
  ) => {
    setTripDestinations((prev) =>
      prev.filter(
        (destination) =>
          destination.id !== destinationId
      )
    );
  };

  return (
    <View style={styles.root}>
      {currentScreen === 'list' && (
        <DestinationList
          onSelectDestination={
            navigateToDetail
          }
          onNavigate={navigateToTab}
        />
      )}

      {currentScreen === 'trip' && (
        <MyTrip
          destinations={tripDestinations}
          onSelectDestination={
            navigateToDetail
          }
          onNavigate={navigateToTab}
          onRemoveDestination={
            removeFromTrip
          }
        />
      )}

      {currentScreen === 'detail' &&
        selectedDestination && (
          <DestinationDetail
  destination={selectedDestination}
  onBack={navigateBack}
  onAddToTrip={addToTrip}
  onNavigate={navigateToTab}
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