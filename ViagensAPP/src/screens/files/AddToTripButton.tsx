import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  View,
} from 'react-native';

interface AddToTripButtonProps {
  destinationName: string;
  accentColor: string;
  baseColor: string;
}

const AddToTripButton: React.FC<AddToTripButtonProps> = ({
  destinationName,
  accentColor,
  baseColor,
}) => {
  const [added, setAdded] = useState(false);
  const scaleAnim = new Animated.Value(1);

  const handlePress = () => {
    // Bounce animation
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.93,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1.05,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 80,
        useNativeDriver: true,
      }),
    ]).start();

    setAdded((prev) => !prev);
  };

  return (
    <View style={styles.wrapper}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }], flex: 1 }}>
        <TouchableOpacity
          style={[
            styles.button,
            added
              ? { backgroundColor: accentColor }
              : { backgroundColor: 'transparent', borderColor: accentColor, borderWidth: 2 },
          ]}
          onPress={handlePress}
          activeOpacity={0.85}
        >
          <Text style={[styles.icon, added ? { color: '#0A0A0F' } : { color: accentColor }]}>
            {added ? '✓' : '+'}
          </Text>
          <Text style={[styles.label, added ? { color: '#0A0A0F' } : { color: accentColor }]}>
            {added ? `${destinationName} adicionado!` : 'Adicionar à viagem'}
          </Text>
        </TouchableOpacity>
      </Animated.View>

      {added && (
        <TouchableOpacity
          style={[styles.undoButton, { borderColor: baseColor }]}
          onPress={() => setAdded(false)}
          activeOpacity={0.7}
        >
          <Text style={[styles.undoText, { color: baseColor }]}>✕</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 20,
    marginVertical: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 14,
    gap: 8,
  },
  icon: {
    fontSize: 18,
    fontWeight: '700',
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  undoButton: {
    width: 50,
    height: 50,
    borderRadius: 14,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  undoText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default AddToTripButton;
