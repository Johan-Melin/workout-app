import { Image, StyleSheet, FlatList } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Exercise } from '@/types/exercise';

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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Exercises</ThemedText>
      </ThemedView>
      <ThemedView>
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
