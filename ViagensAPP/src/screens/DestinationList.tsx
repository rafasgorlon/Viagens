import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ListRenderItem,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard';
import { Destination, destinations } from '../data/destinations';

interface DestinationListProps {
  onSelectDestination: (destination: Destination) => void;
  onNavigate: (tabId: string) => void;
}

const FILTERS = ['Todos', 'Europa', 'América', 'África', 'Ásia'];

const DestinationList: React.FC<DestinationListProps> = ({
  onSelectDestination,
  onNavigate,
}) => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');
 

  const filtered = destinations.filter((d) => {
    const matchSearch =
      d.country.toLowerCase().includes(search.toLowerCase()) ||
      d.city.toLowerCase().includes(search.toLowerCase());

    const matchFilter = (() => {
      if (activeFilter === 'Todos') return true;
      if (activeFilter === 'Europa') return ['Espanha', 'França'].includes(d.country);
      if (activeFilter === 'América') return d.country === 'Brasil';
      if (activeFilter === 'África') return d.country === 'Angola';
      if (activeFilter === 'Ásia') return d.country === 'Coreia do Norte';
      return true;
    })();

    return matchSearch && matchFilter;
  });

  const renderItem: ListRenderItem<Destination> = ({ item, index }) => (
    <DestinationCard
      destination={item}
      onPress={onSelectDestination}
      index={index}
    />
  );

  const ListHeader = () => (
    <View style={styles.listHeader}>
      {/* Hero text */}
      <View style={styles.heroSection}>
        <Text style={styles.heroSub}>DESCUBRA O MUNDO</Text>
        <Text style={styles.heroTitle}>
          Onde será sua{'\n'}próxima{' '}
          <Text style={styles.heroAccent}>aventura?</Text>
        </Text>
        <Text style={styles.heroCount}>
          {destinations.length} destinos disponíveis
        </Text>
      </View>

      {/* Filtros por continente */}
      <View style={styles.filtersRow}>
        {FILTERS.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterChip,
              activeFilter === filter && styles.filterChipActive,
            ]}
            onPress={() => setActiveFilter(filter)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === filter && styles.filterTextActive,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Contador de resultados */}
      <Text style={styles.resultsCount}>
        {filtered.length} {filtered.length === 1 ? 'resultado' : 'resultados'}
      </Text>
    </View>
  );

  const EmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyEmoji}>🔍</Text>
      <Text style={styles.emptyTitle}>Nenhum destino encontrado</Text>
      <Text style={styles.emptyText}>Tente buscar por outro nome ou região</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
    >
      <Navbar title="Explorar" />

      {/* Barra de busca FORA da FlatList — sempre visível e funcional */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar destino ou cidade..."
            placeholderTextColor="#555"
            value={search}
            onChangeText={setSearch}
            returnKeyType="search"
            autoCorrect={false}
            autoCapitalize="none"
            clearButtonMode="while-editing"
          />
          {search.length > 0 && Platform.OS === 'android' && (
            <TouchableOpacity onPress={() => setSearch('')} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <Text style={styles.clearIcon}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={ListHeader}
        ListEmptyComponent={EmptyList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      />

<Footer
  activeTab="explore"
  onTabPress={onNavigate}
/>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0A0A0F',
  },

  /* ── Busca fixa ── */
  searchWrapper: {
    backgroundColor: '#0A0A0F',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A26',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#12121A',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: '#1E1E2E',
    gap: 10,
  },
  searchIcon: {
    fontSize: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#FFFFFF',
    padding: 0,
  },
  clearIcon: {
    fontSize: 13,
    color: '#555',
    paddingHorizontal: 4,
  },

  /* ── Lista ── */
  listContent: {
    paddingBottom: 100,
  },  
  /* ── Cabeçalho da lista ── */
  listHeader: {
    paddingBottom: 12,
  },
  heroSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 18,
  },
  heroSub: {
    fontSize: 11,
    color: '#E8C547',
    letterSpacing: 3,
    fontWeight: '600',
    marginBottom: 8,
  },
  heroTitle: {
    fontSize: 30,
    fontWeight: '300',
    color: '#FFFFFF',
    lineHeight: 38,
    marginBottom: 10,
  },
  heroAccent: {
    fontWeight: '700',
    color: '#E8C547',
  },
  heroCount: {
    fontSize: 12,
    color: '#555',
    letterSpacing: 0.5,
  },
  filtersRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 14,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#12121A',
    borderWidth: 1,
    borderColor: '#1E1E2E',
  },
  filterChipActive: {
    backgroundColor: '#E8C547',
    borderColor: '#E8C547',
  },
  filterText: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  filterTextActive: {
    color: '#0A0A0F',
    fontWeight: '700',
  },
  resultsCount: {
    fontSize: 11,
    color: '#444',
    letterSpacing: 1,
    paddingHorizontal: 20,
    marginBottom: 6,
    textTransform: 'uppercase',
  },

  /* ── Empty state ── */
  emptyContainer: {
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 40,
    gap: 12,
  },
  emptyEmoji: {
    fontSize: 48,
  },
  emptyTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  emptyText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default DestinationList;