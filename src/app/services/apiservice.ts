import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiReferenceService {
    apiUrl = environment.apiUrl;
    constructor(private _http: HttpClient) {
    }

    public getMonthalyGoalApi(): Observable<any> {
        return this._http.get<any>(`${this.apiUrl}retailer/getMonthlyGoal?retailerId=C2000669&quarter=1`);
    }

    public getTasks(): Observable<any> {
        return this._http.get<any>(`${this.apiUrl}retailer/getTasks?retailerId=C2000669&quarter=1`);
    }

    getTableView(){
        return this._http.get<any>(`${this.apiUrl}retailer/getTableau?retailerId=C2000669&quarter=1`)
    }

}
