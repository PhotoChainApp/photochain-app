import React from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const mockPhotos = [
  { id: '1', image: require('../assets/sample1.jpg') },
  { id: '2', image: require('../assets/sample2.jpg') },
  { id: '3', image: require('../assets/sample3.jpg') },
  { id: '4', image: require('../assets/sample4.jpg') },
];

const TILE_SIZE = Dimensions.get('window').width * 0.6;
const CHAIN_SIZE = 32;

export default function PhotoChainViewer({ photos = mockPhotos }) {
  return (
    <FlatList
      data={photos}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.tileContainer}>
          <Image source={item.image} style={styles.photoTile} />
        </View>
      )}
      ItemSeparatorComponent={() => (
        <View style={styles.chainWrapper}>
          <Image source={require('../assets/chain-link.png')} style={styles.chainImage} />
        </View>
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    />
  );
}

const styles = StyleSheet.create({
    scrollContent: {
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    tileContainer: {
        width: TILE_SIZE,
        height: TILE_SIZE,
        borderRadius: 20,
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10, // added this
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
      },      
    photoTile: {
        width: TILE_SIZE - 20,     // slightly smaller than container for margin
        height: TILE_SIZE - 20,
        resizeMode: 'contain',
      },      
    chainWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      height: TILE_SIZE,
    },
    chainImage: {
      width: CHAIN_SIZE,
      height: CHAIN_SIZE,
      resizeMode: 'contain',
    },
  });  