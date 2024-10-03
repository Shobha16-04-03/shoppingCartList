import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(private httpClient:HttpClient) { }
  public api = "https://apilocal.lokaly.in";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Language-Code':'en'
    })
  }

 getData(data:any){
return this.httpClient.post(this.api+'/customer/item_search',data, this.httpOptions);
 }

}
