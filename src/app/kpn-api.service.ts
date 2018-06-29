import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KpnApiService {

  constructor(private _http: HttpClient) { }

  call(url: string, params: object) {
      let data = {
          params: params,
      }

      return this._http.post(environment.api_url + url, data, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  }

  // Zijn nog niet per se nodig!
  // unsafeGet(url: string) {
  //     return this._http.get(environment.api_url + url, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  // }
  //
  // unsafePost(url: string, params: object) {
  //     return this._http.post(environment.api_url + url, params, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  // }
  //
  // login(params: object) {
  //     return this._http.post(environment.api_url + '/login', params, {headers: new HttpHeaders({ 'Content-Type': 'application/json'})});
  // }
}
