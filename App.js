import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import TemperatureConverter from './TemperatureConverter';

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
        <Text style={styles.title}>Made by BSCS 3 - Y2 -1 students</Text>
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

  if (screen === 3) {
    return <TemperatureConverter />;
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

    borderColor: '#ffa31a',
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
  },
  buttonText: {
    color: '#1b1b1b',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
