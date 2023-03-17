import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiReferenceService {
    apiUrl = environment.apiUrl;
    constructor(private _http: HttpClient) {
    }

    getEOrderDetial(){
        return this._http.get<any>(`${this.apiUrl}retailer/getEOrdering?retailerId=C2000669&quarter=1`)
    }


}
