import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class APIsService {
  moe: any;
  headers: any;

  constructor(private http: HttpClient) {
   }

  
  getInbox(): Observable<any> {
    let auth = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNjc1Zjc1M2ItZmRlOC00YjI1LThjZDktNjI4YmM5YzRiYjJkIiwiaXNzIjoiaHR0cDpcXHd3dy5zb3VsYm9vay5tZSIsImF1ZCI6Imh0dHA6XFx3d3cuc291bGJvb2subWUiLCJleHAiOjE3MjU2MTA2MTYsImRldmljZVR5cGUiOiJhbmRyb2lkIiwidG9rZW5UeXBlIjoiYWNjZXNzVG9rZW4iLCJpYXQiOjE2OTQwNzQ2MTZ9.Qoy-JklM2HZYxprRwGHqWEcLldlMlUZiyoKsO4PHexg' ;

    this.headers = {
     headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': auth,
       
     })
   };
    return this.http.get<JSON>("https://chatqa.elyments.in/api/inboxDetails/v2?limit=100",this.headers);
  }

  
  
  
  
}