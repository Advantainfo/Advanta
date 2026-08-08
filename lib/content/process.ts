export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description: "Understand the business, goals and audience.",
  },
  {
    index: "02",
    title: "Plan",
    description: "Define the strategy, structure and roadmap.",
  },
  {
    index: "03",
    title: "Build",
    description: "Design and develop the solution.",
  },
  {
    index: "04",
    title: "Launch",
    description: "Test, optimize and launch.",
  },
  {
    index: "05",
    title: "Grow",
    description: "Measure, improve and support.",
  },
];
