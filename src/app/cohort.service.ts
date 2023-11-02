import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CohortService {

  platform: string = "Campipal";
  
  constructor() { }
}
