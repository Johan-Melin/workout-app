import { StyleSheet, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { workouts } from '../(tabs)/index';

export default function WorkoutDetailScreen() {
  const { name } = useLocalSearchParams();
  
  // Find the selected workout
  const workout = workouts.find(w => w.name === name);
  
  if (!workout) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Workout not found</ThemedText>
      </ThemedView>
    );
  }
  
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">{workout.name}</ThemedText>
      
      <FlatList
        data={workout.exercises}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ThemedView style={styles.exerciseItem}>
            <ThemedText style={styles.exerciseName}>{item.name}</ThemedText>
            <ThemedText style={styles.exerciseDetail}>{item.muscle}</ThemedText>
            <ThemedText style={styles.exerciseDetail}>{item.equipment}</ThemedText>
          </ThemedView>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  exerciseItem: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  exerciseName: {
    flex: 2,
    fontWeight: '600',
  },
  exerciseDetail: {
    flex: 1,
    textAlign: 'center',
  },
});