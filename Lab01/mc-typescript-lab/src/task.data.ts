import {Task} from "./task.types";

export const tasks: Task[] = [
    {
        id: "MC001",
        title: "Doing lab1 mobile computing",
        estimatedHours: 8,
        status: "doing",
        priority: "high",
        assignee: null
    },
    {
        id: "MC002",
        title: "Building realtime chat app",
        estimatedHours: 5,
        status: "todo",
        priority: "medium",
        assignee: null
    },
    {
        id: "MC003",
        title: "Write Unit Test for the wallet module",
        estimatedHours: 1,  
        status: "done",
        priority: "low",
        assignee: "Hoang",
        note: "Bug was related to incorrect idempotency key handling."
    },
    {
        id: "MC004",
        title: "Implementing the new payment gateway",
        estimatedHours: 10,
        status: "doing",
        priority: "high",
        assignee: null
    }
];