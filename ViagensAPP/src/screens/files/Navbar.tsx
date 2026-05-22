import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';

interface NavbarProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  accentColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  title = 'Explorar',
  showBack = false,
  onBack,
  accentColor = '#E8C547',
}) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0F" />
      <View style={styles.container}>
        <View style={styles.inner}>
          {showBack ? (
            <TouchableOpacity style={styles.backButton} onPress={onBack} activeOpacity={0.7}>
              <Text style={[styles.backArrow, { color: accentColor }]}>←</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.logoContainer}>
              <Text style={styles.logoIcon}>✈</Text>
              <Text style={styles.logoText}>
                via<Text style={[styles.logoAccent, { color: accentColor }]}>gem</Text>
              </Text>
            </View>
          )}

          <Text style={styles.title}>{title}</Text>

          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Text style={styles.iconText}>♡</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.accentLine, { backgroundColor: accentColor }]} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A0A0F',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight ?? 24 : 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 14,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  logoIcon: {
    fontSize: 18,
    color: '#E8C547',
  },
  logoText: {
    fontSize: 20,
    fontWeight: '300',
    color: '#FFFFFF',
    letterSpacing: 2,
    textTransform: 'lowercase',
  },
  logoAccent: {
    fontWeight: '700',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#CCCCCC',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 24,
    fontWeight: '300',
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 20,
    color: '#888888',
  },
  accentLine: {
    height: 2,
    width: '30%',
    marginLeft: 20,
  },
});

export default Navbar;
