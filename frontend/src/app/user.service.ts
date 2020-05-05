import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
   
  registerNewUser(userData): Observable<any>{
   return this.http.post('http://127.0.0.1:8000/api/users/',userData);
}
LoginNewUser(userData1): Observable<any>{
  return this.http.post('http://127.0.0.1:8000/api/auth/',userData1);
}


private handleError(errorResponse: HttpErrorResponse){
  if(errorResponse.error instanceof ErrorEvent)
  {
    console.error('Client Side Error:', errorResponse.error.message);
  }else{
    console.error('Server Side Error:',errorResponse)
  }
}
}
