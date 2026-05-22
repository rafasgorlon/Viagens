import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface ImageGalleryProps {
  images: string[];
  accentColor: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, accentColor }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    setActiveIndex(index);
  };

  const goToImage = (index: number) => {
    scrollRef.current?.scrollTo({ x: index * SCREEN_WIDTH, animated: true });
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* Main horizontal scroll */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((uri, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image
              source={{ uri }}
              style={styles.mainImage}
              resizeMode="cover"
            />
            <View style={styles.imageOverlay} />
            <View style={styles.imageCounter}>
              <Text style={styles.counterText}>
                {index + 1} / {images.length}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Dot indicators */}
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => goToImage(index)}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? accentColor : 'rgba(255,255,255,0.3)',
                width: index === activeIndex ? 24 : 8,
              },
            ]}
          />
        ))}
      </View>

      {/* Thumbnail strip */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.thumbStrip}
        contentContainerStyle={styles.thumbContent}
      >
        {images.map((uri, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => goToImage(index)}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri }}
              style={[
                styles.thumbnail,
                index === activeIndex && {
                  borderColor: accentColor,
                  borderWidth: 2,
                  opacity: 1,
                },
              ]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A0A0F',
  },
  imageWrapper: {
    width: SCREEN_WIDTH,
    height: 280,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'transparent',
  },
  imageCounter: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.55)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  counterText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 6,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    transition: 'width 0.2s',
  },
  thumbStrip: {
    paddingBottom: 12,
  },
  thumbContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  thumbnail: {
    width: 70,
    height: 50,
    borderRadius: 8,
    opacity: 0.55,
    borderWidth: 0,
    borderColor: 'transparent',
  },
});

export default ImageGallery;
