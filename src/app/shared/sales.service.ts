import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { NgRedux } from '@angular-redux/store';

import {Observable} from 'rxjs';
import {delay} from 'rxjs/internal/operators';
import { FETCH_SALES_ERR, FETCH_SALES_OK, FETCHING_OFF, FETCHING_ON, IAppState } from '../store';


@Injectable({
  providedIn: 'root'
})
export class SalesService implements Resolve<any> {

  constructor(private http: HttpClient, private ngRedux: NgRedux<IAppState>) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    return this.fetchSales();
  }

  fetchSales() {
    this.ngRedux.dispatch({ type: FETCHING_ON });
    return this.http.get<any>('/assets/data/sales.json')
      .pipe(delay(2000))
      .subscribe((res) => {
        this.ngRedux.dispatch({ type: FETCH_SALES_OK, sales: res.data });
      }, (error) => {
        this.ngRedux.dispatch({ type: FETCH_SALES_ERR, error });
      }, () => {
        this.ngRedux.dispatch({ type: FETCHING_OFF });
      });
  }
}
