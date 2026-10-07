import {getTasks, 
    filterTasksByStatus, 
    filterTasksByPriority,
    calculateTotalEstimatedHours,
    findTaskById,
    isTask,
    sortTasks,
    formatTaskOutput} from './task.service';
import {tasks} from './task.data';
import {openTask} from './task.callback';
import { Task } from './task.types';

const appName: string = "Task Pocket";

console.log(`Welcome to ${appName}!`);

// const badTask: Task = {
//     id: "ERR01",
//     title: "Test error",
//     estimatedHours: 3,
//     status: "finished", 
//     priority: "high",
//     assignee: null
// };
//print all tasks
const allTasks = getTasks(tasks);
console.log("\nAll tasks: ");
allTasks.forEach((task) => console.log(formatTaskOutput(task)));

//filter tasks by status
const doingTasks = filterTasksByStatus(tasks, "doing");
console.log("\nDoing tasks: ");
doingTasks.forEach((task) => console.log(formatTaskOutput(task)));

//calculate total estimated hours
const totalEstimatedHours = calculateTotalEstimatedHours(tasks);
console.log(`\nTotal estimated hours for all tasks: ${totalEstimatedHours}`);

//get task by ID
const taskId = "MC002";
const selectedTask = findTaskById(tasks, taskId);
if(selectedTask){
    console.log(`\nTask with ID ${selectedTask.id}: ${formatTaskOutput(selectedTask)}`);
}
else console.log(`\nTask with ID ${taskId} not found.`);

//open task by ID
openTask("MC003");
openTask("MC005");

//type guard
const unknownValue: unknown = {
    id: "AI001",
    title: "Integrate AI features",
    estimatedHours: 10,
    status: "todo",
    priority: "high",
    assignee: "Khoi"
}

if(isTask(unknownValue)) console.log("Valid task: ", unknownValue.title);
else console.log("Invalid task data");

//filter by priority
const highPriorityTasks = filterTasksByPriority(tasks, "high");
console.log("\nHigh priority tasks: ");
highPriorityTasks.forEach((task) => {
    console.log(formatTaskOutput(task));
});

//sort tasks by estimated hours
const sortedByEstimatedHours = sortTasks(tasks, "estimatedHours", "asc");
console.log("\nTasks sorted by estimated hours (ascending): ");
sortedByEstimatedHours?.forEach((task) => {
    console.log(formatTaskOutput(task));
});

//sort tasks by priority
const sortedByPriority = sortTasks(tasks, "priority", "desc");
console.log("\nTasks sorted by priority (descending): ");
sortedByPriority.forEach((task) => {
    console.log(formatTaskOutput(task));
});
