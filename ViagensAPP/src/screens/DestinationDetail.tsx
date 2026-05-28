import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AddToTripButton from '../components/AddToTripButton';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';
import Navbar from '../components/Navbar';
import { Destination } from '../data/destinations';

interface DestinationDetailProps {
  destination: Destination;
  onBack: () => void;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({
  destination,
  onBack,
}) => {
  return (
    <View style={styles.screen}>
      <Navbar
        title={destination.country.toUpperCase()}
        showBack
        onBack={onBack}
        accentColor={destination.accentColor}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Image Gallery */}
        <ImageGallery
          images={destination.images}
          accentColor={destination.accentColor}
        />

        {/* Header info */}
        <View style={styles.titleSection}>
          <View style={styles.titleRow}>
            <Text style={styles.emoji}>{destination.emoji}</Text>
            <View style={styles.titleTexts}>
              <Text style={[styles.cityTitle, { color: destination.accentColor }]}>
                {destination.city}
              </Text>
              <Text style={styles.countryTitle}>{destination.country}</Text>
            </View>
            <View style={styles.ratingBlock}>
              <Text style={styles.ratingStar}>★</Text>
              <Text style={styles.ratingValue}>{destination.rating}</Text>
            </View>
          </View>

          <Text style={styles.tagline}>{destination.description}</Text>
        </View>

        {/* Divider */}
        <View style={[styles.dividerLine, { backgroundColor: destination.color }]} />

        {/* Quick info grid */}
        <View style={styles.infoGrid}>
          {[
            { icon: '🌡', label: 'Temperatura', value: destination.temperature },
            { icon: '💬', label: 'Idioma', value: destination.language },
            { icon: '💰', label: 'Moeda', value: destination.currency },
            { icon: '⭐', label: 'Avaliação', value: `${destination.rating} / 5.0` },
          ].map((info) => (
            <View key={info.label} style={styles.infoCard}>
              <Text style={styles.infoIcon}>{info.icon}</Text>
              <Text style={styles.infoLabel}>{info.label}</Text>
              <Text style={[styles.infoValue, { color: destination.accentColor }]}>
                {info.value}
              </Text>
            </View>
          ))}
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>SOBRE O DESTINO</Text>
          <Text style={styles.sectionText}>{destination.longDescription}</Text>
        </View>

        {/* Highlights */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>PONTOS DE DESTAQUE</Text>
          <View style={styles.highlightsList}>
            {destination.highlights.map((highlight, index) => (
              <View key={index} style={styles.highlightItem}>
                <View
                  style={[styles.highlightDot, { backgroundColor: destination.accentColor }]}
                />
                <Text style={styles.highlightText}>{highlight}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* CTA */}
        <AddToTripButton
          destinationName={destination.city}
          accentColor={destination.accentColor}
          baseColor={destination.color}
        />

        <View style={styles.bottomPad} />
      </ScrollView>

      <Footer activeTab="explore" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0A0A0F',
  },
  scrollContent: {
    paddingBottom: 0,
  },
  titleSection: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 14,
    gap: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  emoji: {
    fontSize: 36,
  },
  titleTexts: {
    flex: 1,
    gap: 2,
  },
  cityTitle: {
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  countryTitle: {
    fontSize: 14,
    color: '#777',
    fontWeight: '400',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  ratingBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#12121A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  ratingStar: {
    color: '#E8C547',
    fontSize: 14,
  },
  ratingValue: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  tagline: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
    lineHeight: 20,
  },
  dividerLine: {
    height: 2,
    marginHorizontal: 20,
    marginVertical: 4,
    borderRadius: 1,
    opacity: 0.4,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 14,
    paddingVertical: 16,
    gap: 10,
  },
  infoCard: {
    flex: 1,
    minWidth: '44%',
    backgroundColor: '#12121A',
    borderRadius: 12,
    padding: 14,
    gap: 4,
    borderWidth: 1,
    borderColor: '#1E1E2E',
  },
  infoIcon: {
    fontSize: 20,
    marginBottom: 2,
  },
  infoLabel: {
    fontSize: 10,
    color: '#555',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  section: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 10,
  },
  sectionLabel: {
    fontSize: 10,
    color: '#666',
    letterSpacing: 2,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  sectionText: {
    fontSize: 14,
    color: '#BBBBBB',
    lineHeight: 22,
  },
  highlightsList: {
    gap: 10,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  highlightDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    flexShrink: 0,
  },
  highlightText: {
    fontSize: 14,
    color: '#DDDDDD',
    fontWeight: '500',
  },
  bottomPad: {
    height: 8,
  },
});

export default DestinationDetail;
