import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class TaskService {
    baseUrl = environment.apiUrl + 'tasks/';
constructor(private http: HttpClient) { }

    addTask(model: any){
  
         return this.http.post(this.baseUrl, model);
    }
    getTaskById(id){
        return this.http.get(this.baseUrl + id);
    }
    getTasks(){
        return this.http.get(this.baseUrl);
    }
    deleteTask(id: number){
        return this.http.delete(this.baseUrl + id);
    }
    updateTask(model: any){
        return this.http.put(this.baseUrl, model);
    }
}
