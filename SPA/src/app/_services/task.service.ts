import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class TaskService {
    baseUrl = environment.apiUrl + 'tasks/';
constructor(private http: HttpClient) { }

    getTaskById(id){
        return this.http.get(this.baseUrl + id);
    }
}
