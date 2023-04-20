import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  baseUrl:string ="http://127.0.0.1:83/countries";
  constructor(private http:HttpClient) { }

  getAllCountries(){
    console.log("Ok");
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + sessionStorage.getItem('token') });
    return this.http.get(this.baseUrl,{headers});
    //return this.http.get(this.baseUrl);
  }

  addCountry(country:any){
    //const headers = new HttpHeaders({ Authorization: 'Bearer ' + sessionStorage.getItem('token') });
    //return this.http.post(this.baseUrl,country,{headers});
    return this.http.post(this.baseUrl,country);
  }
}
