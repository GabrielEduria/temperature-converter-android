// App.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import TemperatureConverter from './TemperatureConverter';
import WeatherScreen from './WeatherScreen';
import QuizScreen from './QuizScreen';   // new import
import FunFacts from './FunFacts';       // new import

const members = [
  { name: 'Gabriel Ezekiel B. Eduria', photo: require('./assets/member1.jpg') },
  { name: 'Julian Maverick Credo (NINONG RY)', photo: require('./assets/member2.jpg') },
  { name: 'Mikhail Arkin Francisco', photo: require('./assets/member3.jpg') },
  { name: 'Kurt John Camacho', photo: require('./assets/member4.jpg') },
  { name: 'Nicos Naval', photo: require('./assets/member5.jpg') },
];

export default function App() {
  const [screen, setScreen] = useState(0);
  const [memberIndex, setMemberIndex] = useState(0);

  const renderButton = (label, onPress) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  // Intro screens
  if (screen === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>A CS project for COPH311 Activity</Text>
        {renderButton('Continue', () => setScreen(1))}
      </View>
    );
  }

  if (screen === 1) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Submitted to Ms. Batac</Text>
        {renderButton('Continue', () => setScreen(2))}
      </View>
    );
  }

  if (screen === 2) {
    const member = members[memberIndex];
    return (
      <View style={styles.container}>
        <Image source={member.photo} style={styles.memberPhoto} />
        <Text style={styles.memberName}>{member.name}</Text>
        {renderButton(
          memberIndex < members.length - 1 ? 'Next' : 'Go to App',
          () => {
            if (memberIndex < members.length - 1) {
              setMemberIndex(memberIndex + 1);
            } else {
              setScreen(3);
            }
          }
        )}
      </View>
    );
  }

  // Main app screen with Weather and Quiz buttons + Fun Facts preview
  if (screen === 3) {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#1b1b1b' }}>
        <TemperatureConverter />

        <View style={styles.buttonRow}>
          {renderButton('View Weather', () => setScreen(4))}
          {renderButton('Take Quiz', () => setScreen(5))}
        </View>

    

        <View style={styles.funFactsContainer}>
          <Text style={styles.funFactsTitle}>Fun Fact:</Text>
          <FunFacts />
        </View>
      </ScrollView>
    );
  }

  if (screen === 4) {
    return (
      <View style={{ flex: 1 }}>
        <WeatherScreen onBack={() => setScreen(3)} />
      </View>
    );
  }

  if (screen === 5) {
    return (
      <View style={{ flex: 1 }}>
        <QuizScreen onBack={() => setScreen(3)} />
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffa31a',
    marginBottom: 20,
    textAlign: 'center',
  },
  memberPhoto: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 12,
  },
  memberName: {
    fontSize: 22,
    color: '#ffffff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ffa31a',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    margin: 8,
    minWidth: 130,
  },
  buttonText: {
    color: '#1b1b1b',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  membersContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  membersTitle: {
    color: '#ffa31a',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  memberItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#292929',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  memberPhotoSmall: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  memberNameSmall: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  funFactsContainer: {
    paddingHorizontal: 20,
    marginBottom: 40,
    backgroundColor: '#292929',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
  },
  funFactsTitle: {
    color: '#ffa31a',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
