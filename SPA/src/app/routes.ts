import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { UpdateTaskComponent } from './update-task/update-task.component';


export const appRoutes: Routes = [
    { path: '', component: HomeRegisterComponent},
    { path: 'tasks', component: TaskListComponent},
    { path: 'addTask', component: AddTaskComponent},
    { path: 'updateTask/:id', component: UpdateTaskComponent},
];