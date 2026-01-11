export type Course = {
  id: string;
  title: string;
  level: string;
  progress: number;
  lessons: number;
  theme: string;
};

export const currentCourses: Course[] = [
  {
    id: "course-ux",
    title: "UX Fundamentals",
    level: "Intermediate",
    progress: 62,
    lessons: 18,
    theme: "Design"
  },
  {
    id: "course-spanish",
    title: "Conversational Spanish",
    level: "Beginner",
    progress: 24,
    lessons: 12,
    theme: "Languages"
  }
];

export const exploreCourses: Course[] = [
  {
    id: "course-data",
    title: "Data Storytelling",
    level: "All Levels",
    progress: 0,
    lessons: 20,
    theme: "Business"
  },
  {
    id: "course-finance",
    title: "Finance for Life",
    level: "Beginner",
    progress: 0,
    lessons: 16,
    theme: "Personal Growth"
  },
  {
    id: "course-code",
    title: "Intro to TypeScript",
    level: "Beginner",
    progress: 0,
    lessons: 14,
    theme: "Development"
  }
];

export const focusTasks = [
  {
    id: "task-1",
    title: "Daily review",
    description: "Revise 3 lessons in 10 minutes."
  },
  {
    id: "task-2",
    title: "Skill booster",
    description: "Complete a quick quiz to reinforce memory."
  },
  {
    id: "task-3",
    title: "Peer challenge",
    description: "Join a community task and earn streak points."
  }
];
