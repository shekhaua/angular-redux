import { Component, OnInit } from '@angular/core';
import { NgRedux, select} from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @select() visits;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
  }

}
