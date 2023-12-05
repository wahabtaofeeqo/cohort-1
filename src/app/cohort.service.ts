import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CohortService {

  platform: string = "Campipal";
  
  constructor() { }

  loadUsers(): Observable<any> {
    return of([
      {name: 'Tao', sex: 'M', age: 12},
      {name: 'Tao', sex: 'M', age: 12},
      {name: 'Tao', sex: 'M', age: 12},
      {name: 'Tao', sex: 'M', age: 12},
      {name: 'Tao', sex: 'M', age: 12},
    ])
  }
}
