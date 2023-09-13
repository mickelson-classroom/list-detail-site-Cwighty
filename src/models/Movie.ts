export interface Movie {
  id: number;
  title: string;
  director: string;
  releaseYear: number;
  runTimeMin: number;
  genres: string[];
  rating: number;
  theatreType: string;
}

export const movieValidationRules: {
  [key in keyof Movie]: ((value: any) => string | null)[];
} = {
  id: [],
  title: [(value: string) => (value.length >= 1 ? null : "Title is required")],
  director: [
    (value: string) => (value.length >= 1 ? null : "Director is required"),
  ],
  releaseYear: [
    (value: number) =>
      value >= 1900 && value <= new Date().getFullYear()
        ? null
        : "Invalid release year",
  ],
  rating: [
    (value: number) =>
      value >= 1 && value <= 10 ? null : "Rating must be between 1 and 10",
  ],
  runTimeMin: [
    (value: number) =>
      value >= 1 ? null : "Runtime must be at least 1 minute",
  ],
  genres: [],
  theatreType: [],
};

export const validateField = <T>(
  value: T,
  validators: ((value: T) => string | null)[]
): string[] => {
  const errors: string[] = [];
  for (const validator of validators) {
    const error = validator(value);
    if (error) {
      errors.push(error);
    }
  }
  return errors;
};

export const theatreTypeOptions = [
  { value: "IMAX", label: "IMAX" },
  { value: "3D", label: "3D" },
  { value: "2D", label: "2D" },
];
