import {getTasks, 
    filterTasksByStatus, 
    calculateTotalEstimatedHours,
    findTaskById,
    isTask} from './task.service';
import {tasks} from './task.data';
import {openTask} from './task.callback';

const appName: string = "Task Pocket";

console.log(`Welcome to ${appName}!`);
//print all tasks
const allTasks = getTasks(tasks);
console.log("\nAll tasks: ");
allTasks.forEach((task) => {
    console.log(`Task ID: ${task.id} | Title: ${task.title} | Estimated Hours: ${task.estimatedHours} | Status: ${task.status} | Priority: ${task.priority} | Assignee: ${task.assignee}`);
});

//filter tasks by status
const doingTasks = filterTasksByStatus(tasks, "doing");
console.log("\nDoing tasks: ");
doingTasks.forEach((task) => {
    console.log(`Task ID: ${task.id} | Title: ${task.title} | Estimated Hours: ${task.estimatedHours} | Status: ${task.status} | Priority: ${task.priority} | Assignee: ${task.assignee}`);
});

//calculate total estimated hours
const totalEstimatedHours = calculateTotalEstimatedHours(tasks);
console.log(`\nTotal estimated hours for all tasks: ${totalEstimatedHours}`);

//get task by ID
const taskId = "MC002";
const selectedTask = findTaskById(tasks, taskId);
if(selectedTask){
    console.log(`\nTask with ID ${selectedTask.id}: Title: ${selectedTask.title} | Estimated Hours: ${selectedTask.estimatedHours} | Status: ${selectedTask.status} | Priority: ${selectedTask.priority} | Assignee: ${selectedTask.assignee}`);
}
else console.log(`\nTask with ID ${taskId} not found.`);

//open task by ID
openTask("MC003");
// openTask("MC005");

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