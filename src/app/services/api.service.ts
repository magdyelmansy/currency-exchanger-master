import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  api(): string {
    return 'http://data.fixer.io/api/';
  }
  accessKey:string = '8084c0d244f2eaa729ae90b2e12f2db5'
  // requestOptions(): { redirect: string, headers: any } {
  //   const myHeaders = new HttpHeaders()
  //   .set("apikey", "8084c0d244f2eaa729ae90b2e12f2db5");

  //   const options = {
  //     redirect: 'follow',
  //     headers: myHeaders
  //   };

  //   return options;
  // }
}
