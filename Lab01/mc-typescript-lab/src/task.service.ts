import { Task, TaskFilter } from './task.types';

//get all tasks
export function getTasks(tasksList: Task[]): Task[]{
    tasksList.forEach((task) => {
        task.assignee = task.assignee ?? "Unassigned";
    });
    return tasksList;
};

//filter tasks by status
export function filterTasksByStatus(tasksList: Task[], taskFilter: TaskFilter): Task[] {
    if(taskFilter === "all") {
        return tasksList;
    }
    return tasksList.filter((task) => task.status === taskFilter);
}


//calculate total estimated hours
export function calculateTotalEstimatedHours(tasksList: Task[]): number {
    return tasksList.reduce((total, task) => total + task.estimatedHours, 0);
}

//find task by ID
export function findTaskById(tasksList: Task[], taskId: string): Task | null{
    return tasksList.find((task) => task.id === taskId) || null;
};

//custom type guard to check if an unknown value is a Task
export function isTask(value: unknown): value is Task {
    if(typeof value !== "object" || value === null) return false;
    const task = value as Record<string, unknown>;
    const validStatus = task.status === "todo" || 
                        task.status === "doing" || 
                        task.status === "done";
    const validPriority = task.priority === "low" ||
                          task.priority === "medium" || 
                          task.priority === "high";
    return (typeof task.id === "string" && 
            typeof task.title === "string" && 
            typeof task.estimatedHours === "number" && 
            validStatus &&
            validPriority);
};

