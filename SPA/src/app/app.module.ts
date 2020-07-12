import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './_services/auth.service';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { TaskService } from './_services/task.service';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      TaskListComponent,
      AddTaskComponent,
      HomeRegisterComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      HttpClientModule,
      //BsDropdownModule.forRoot()
   ],
   providers: [
      AuthService,
      TaskService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
