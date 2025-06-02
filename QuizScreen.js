// QuizScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const quizQuestions = [
  {
    question: "At what temperature does water freeze in Celsius?",
    options: ["0°C", "32°C", "100°C", "-273°C"],
    answer: "0°C",
  },
  {
    question: "Which scale is primarily used in scientific temperature measurements?",
    options: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
    answer: "Kelvin",
  },
  {
    question: "What temperature does water boil at in Fahrenheit?",
    options: ["100°F", "212°F", "0°F", "32°F"],
    answer: "212°F",
  },
  {
    question: "What is absolute zero temperature in Celsius?",
    options: ["-100°C", "-273°C", "0°C", "100°C"],
    answer: "-273°C",
  },
  {
    question: "What is the normal human body temperature in Celsius?",
    options: ["37°C", "25°C", "98°C", "0°C"],
    answer: "37°C",
  },
];

export default function QuizScreen({ onBack }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === quizQuestions[current].answer) {
      setScore(score + 1);
    }
    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Quiz Complete!</Text>
        <Text style={styles.score}>Your Score: {score} / {quizQuestions.length}</Text>
        <TouchableOpacity style={styles.button} onPress={onBack}>
          <Text style={styles.buttonText}>Back to Main</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const question = quizQuestions[current];

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      {question.options.map((option, i) => (
        <TouchableOpacity
          key={i}
          style={styles.optionButton}
          onPress={() => handleAnswer(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffa31a',
    marginBottom: 20,
    textAlign: 'center',
  },
  score: {
    fontSize: 22,
    color: '#ffffff',
    marginBottom: 30,
    textAlign: 'center',
  },
  question: {
    fontSize: 22,
    color: '#ffa31a',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  optionButton: {
    backgroundColor: '#292929',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#ffa31a',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#1b1b1b',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
