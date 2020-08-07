import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

export default function Start() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.sky}>
        <View style={styles.image}>
        </View>
      </View>
      <ScrollView>

        <Text style={styles.title}>Hi, welcome to Watermelon Moon!</Text>
        <Text style={styles.description}>
          Below, you can browse some components that are available for your to
          use.
        </Text>
        <Text style={styles.description}>Please, enjoy! 👀🍉</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={()=> navigation.navigate('Modals')} style={styles.button}>
            <Text style={styles.buttonText}>Modals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Swipes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
