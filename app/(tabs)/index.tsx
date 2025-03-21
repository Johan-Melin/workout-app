import { Image, StyleSheet, FlatList } from 'react-native';
import { Link } from 'expo-router';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Exercise, Workout } from '@/types/exercise';

const exercises: Exercise[] = [
  {
    name: 'Squat',
    muscle: 'Quads',
    equipment: 'Barbell',
  },
  {
    name: 'Deadlift',
    muscle: 'Hamstrings',
    equipment: 'Barbell',
  },
  {
    name: 'Bench Press',
    muscle: 'Chest',
    equipment: 'Barbell',
  },
]

export const workouts: Workout[] = [
  {
    name: 'Foundation Strength',
    exercises: [
      {
        name: 'Squat',
        muscle: 'Quads',
        equipment: 'Barbell',
      },
      {
        name: 'Deadlift',
        muscle: 'Hamstrings',
        equipment: 'Barbell',
      },
      {
        name: 'Bench Press',
        muscle: 'Chest',
        equipment: 'Barbell',
      },
    ],
  },
]

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView>
        <ThemedText type="title">Workouts</ThemedText>
        <FlatList
          data={workouts}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Link 
              href={{
                pathname: '/workout/[name]',
                params: { name: item.name }
              }}
            >
              <ThemedView style={styles.exerciseItem}>
                <ThemedText style={styles.exerciseName}>{item.name}</ThemedText>
                <ThemedText style={styles.exerciseDetail}>{item.exercises.length} exercises</ThemedText>
              </ThemedView>
            </Link>
          )}
        />
      </ThemedView>
      <ThemedView>
        <ThemedText type="title">Exercises</ThemedText>
        <FlatList
          data={exercises}
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
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  exerciseItem: {
    flexDirection: 'row',
    width: '100%'
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
