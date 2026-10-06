import {findTaskById} from './task.service';
import {tasks} from './task.data';

//blueprint
type OnOpenTask = (taskId: string) => void;

//implementation
export const openTask: OnOpenTask = (taskId: string) => {
    const task = findTaskById(tasks, taskId);
    if(!task){
        console.error(`Task with ID ${taskId} not found.`);
        return;
    }
    console.log(`Task with ID ${taskId} and title "${task.title}" has been opened.`);
};
