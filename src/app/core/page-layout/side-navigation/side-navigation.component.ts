import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState, INCREMENT_VISITS } from '../../../store';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  incrementVisits() {
    this.ngRedux.dispatch({ type: INCREMENT_VISITS });
  }

}
