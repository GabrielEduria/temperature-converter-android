// FunFacts.js
import React from 'react';
import { Text } from 'react-native';

const facts = [
  "Valenzuela City is named after Pío Valenzuela, a Filipino revolutionary leader.",
  "Tamaraw is a rare and endangered species of buffalo found only in the Philippines.",
  "Valenzuela is one of the cities that form Metro Manila, the capital region.",
  "The city celebrates its foundation day every February 14.",
  "Valenzuela is known as the 'Northern Gateway to Metropolitan Manila.'",
];

export default function FunFacts() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  return <Text style={{ color: 'white', fontSize: 16, fontStyle: 'italic' }}>{fact}</Text>;
}
