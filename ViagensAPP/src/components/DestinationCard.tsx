import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Destination } from '../data/destinations';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - 32;

interface DestinationCardProps {
  destination: Destination;
  onPress: (destination: Destination) => void;
  index: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onPress,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: destination.color }]}
      onPress={() => onPress(destination)}
      activeOpacity={0.85}
    >
      <Image
        source={{ uri: destination.images[0] }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Overlay gradient effect */}
      <View style={styles.overlay} />

      {/* Country badge */}
      <View style={[styles.badge, { backgroundColor: destination.color }]}>
        <Text style={styles.badgeEmoji}>{destination.emoji}</Text>
      </View>

      {/* Rating */}
      <View style={styles.ratingBadge}>
        <Text style={styles.ratingStar}>★</Text>
        <Text style={styles.ratingText}>{destination.rating}</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.locationRow}>
          <Text style={[styles.cityName, { color: destination.accentColor }]}>
            {destination.city}
          </Text>
          <Text style={styles.separator}>·</Text>
          <Text style={styles.countryName}>{destination.country}</Text>
        </View>

        <Text style={styles.description}>{destination.description}</Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Text style={styles.metaIcon}>🌡</Text>
            <Text style={styles.metaText}>{destination.temperature}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaIcon}>💬</Text>
            <Text style={styles.metaText}>{destination.language}</Text>
          </View>
          <View style={[styles.ctaButton, { borderColor: destination.accentColor }]}>
            <Text style={[styles.ctaText, { color: destination.accentColor }]}>
              Ver mais →
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    borderRadius: 16,
    backgroundColor: '#12121A',
    marginHorizontal: 16,
    marginBottom: 20,
    overflow: 'hidden',
    borderLeftWidth: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  badge: {
    position: 'absolute',
    top: 14,
    left: 14,
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  badgeEmoji: {
    fontSize: 18,
  },
  ratingBadge: {
    position: 'absolute',
    top: 14,
    right: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.65)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 3,
  },
  ratingStar: {
    fontSize: 12,
    color: '#E8C547',
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  content: {
    padding: 16,
    gap: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cityName: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  separator: {
    fontSize: 16,
    color: '#555',
  },
  countryName: {
    fontSize: 14,
    color: '#999',
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  description: {
    fontSize: 13,
    color: '#AAAAAA',
    lineHeight: 19,
    fontStyle: 'italic',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 4,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaIcon: {
    fontSize: 12,
  },
  metaText: {
    fontSize: 12,
    color: '#777',
    fontWeight: '500',
  },
  ctaButton: {
    marginLeft: 'auto',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  ctaText: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default DestinationCard;
