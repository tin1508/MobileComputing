export type TaskStatus = "todo" | "doing" | "done";
export type TaskPriority = "low" | "medium" | "high";
export type TaskFilter = "all" | TaskStatus | TaskPriority;


export type Task = {
    id: string;
    title: string;
    estimatedHours: number;
    status: TaskStatus;
    priority: TaskPriority;
    assignee: string | null; //nullable property
    note?: string;//optional property
};

