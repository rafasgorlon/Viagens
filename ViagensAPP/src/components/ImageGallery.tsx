import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';

interface ImageGalleryProps {
  images: string[];
  accentColor: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  accentColor,
}) => {
  const { width } = useWindowDimensions();

  const scrollRef = useRef<ScrollView>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [imageHeights, setImageHeights] = useState<number[]>([]);

  useEffect(() => {
    const heights: number[] = [];

    images.forEach((uri, index) => {
      Image.getSize(
        uri,
        (imgWidth, imgHeight) => {
          const calculatedHeight =
            (width * imgHeight) / imgWidth;

          heights[index] = Math.max(
            calculatedHeight,
            220
          );

          setImageHeights([...heights]);
        },
        () => {
          heights[index] = 300;
          setImageHeights([...heights]);
        }
      );
    });
  }, [images, width]);

  const handleScroll = (event: any) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / width
    );

    setActiveIndex(index);
  };

  const goToImage = (index: number) => {
    scrollRef.current?.scrollTo({
      x: width * index,
      animated: true,
    });

    setActiveIndex(index);
  };

  const currentHeight =
    imageHeights[activeIndex] || 300;

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
      >
        {images.map((uri, index) => (
          <View
            key={index}
            style={{
              width,
              height:
                imageHeights[index] || currentHeight,
            }}
          >
            <Image
              source={{ uri }}
              style={styles.mainImage}
              resizeMode="cover"
            />

            <View style={styles.imageCounter}>
              <Text style={styles.counterText}>
                {index + 1}/{images.length}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => goToImage(index)}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === activeIndex
                    ? accentColor
                    : 'rgba(255,255,255,0.25)',

                width:
                  index === activeIndex
                    ? 22
                    : 8,
              },
            ]}
          />
        ))}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.thumbContent}
      >
        {images.map((uri, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => goToImage(index)}
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

  mainImage: {
    width: '100%',
    height: '100%',
  },

  imageCounter: {
    position: 'absolute',
    right: 14,
    bottom: 14,
    backgroundColor: 'rgba(0,0,0,0.55)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },

  counterText: {
    color: '#FFF',
    fontWeight: '700',
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 12,
  },

  dot: {
    height: 8,
    borderRadius: 4,
  },

  thumbContent: {
    paddingHorizontal: 16,
    gap: 8,
    paddingBottom: 12,
  },

  thumbnail: {
    width: 70,
    height: 50,
    borderRadius: 8,
    opacity: 0.6,
  },
});

export default ImageGallery;