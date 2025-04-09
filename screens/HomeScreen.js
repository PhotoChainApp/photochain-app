import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../firebase';
import PhotoChainViewer from '../components/PhotoChainViewer';

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await auth.signOut();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to PhotoChain!</Text>
      <PhotoChainViewer />
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});