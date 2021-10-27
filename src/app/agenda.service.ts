import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AgendaService {

  constructor(private http: HttpClient) { }

}