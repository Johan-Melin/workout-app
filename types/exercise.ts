
type Muscle = "Shoulders" | "Biceps" | "Triceps" | "Forearms" | "Chest" | 
  "Abs" | "Traps" | "Back" | "Lower Back" | "Glutes" | "Quads" | 
  "Hamstrings" | "Calves";

type Equipment = "Barbell" | "Dumbbell" | "Cable" | "Machine" | "Bodyweight";

export interface Exercise {
  name: string;
  muscle?: Muscle;
  equipment?: Equipment;
}

export interface Workout {
    name: string;
    exercises: Exercise[];
  }
  
  