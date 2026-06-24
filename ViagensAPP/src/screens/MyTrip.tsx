import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard';
import { Destination } from '../data/destinations';

interface MyTripProps {
  destinations: Destination[];
  onSelectDestination: (destination: Destination) => void;
  onNavigate: (tab: string) => void;
  onRemoveDestination: (id: string) => void;
}

const MyTrip: React.FC<MyTripProps> = ({
  destinations,
  onSelectDestination,
  onNavigate,
  onRemoveDestination,
}) => {
  return (
    <View style={styles.screen}>
      <Navbar title="Minha Viagem" />

      {destinations.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>🧳</Text>

          <Text style={styles.emptyTitle}>
            Nenhum destino adicionado
          </Text>

          <Text style={styles.emptyText}>
            Explore destinos e adicione-os à sua viagem.
          </Text>
        </View>
      ) : (
        <FlatList
          data={destinations}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={styles.destinationContainer}>
              <DestinationCard
                destination={item}
                index={index}
                onPress={onSelectDestination}
              />

              <TouchableOpacity
                style={styles.removeButton}
                onPress={() =>
                  onRemoveDestination(item.id)
                }
              >
                <Text style={styles.removeButtonText}>
                  Remover da viagem
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <Footer
        activeTab="trip"
        onTabPress={onNavigate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0A0A0F',
  },

  listContent: {
    paddingTop: 20,
    paddingBottom: 40,
  },

  destinationContainer: {
    marginBottom: 16,
  },

  removeButton: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#B22222',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },

  removeButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },

  emptyEmoji: {
    fontSize: 60,
    marginBottom: 20,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },

  emptyText: {
    fontSize: 15,
    color: '#777',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default MyTrip;