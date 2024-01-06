

export interface PagesElement {
    title: string;
    Icon: React.FC<{ fill: string }>; // Update the type to accept an `fill` prop
}

export interface TestCard {
    id: number;
    title: string;
    testCount: number;
    questionCount: number;
    subtopicCount: number;
    time: number;
    difficulty: number;
    isDone: boolean;
    isLocked: boolean;
}