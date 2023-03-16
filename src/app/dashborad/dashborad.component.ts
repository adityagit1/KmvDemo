import { Component, OnInit } from '@angular/core';
import { ApiReferenceService } from '../services/apiservice';
declare var $: any;
@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {
  monthalyGoalDetail: any[]=[];
  getTaskDetail: any=[]=[];
  getTableViewDetail: any;

  constructor(private _apiReferenceService: ApiReferenceService) { }

  ngOnInit(): void {

    $(".duration-header a").click(function () {
      $(".duration-content").slideToggle('slow');
      $("html").toggleClass('has-duration');
    });
    $(".profit-header a").click(function () {
      $(".profit-content").slideToggle('slow');
      $("html").toggleClass('has-profit');
    });

    this.getMonthaliyGoal();
    this.getTasks();
    this.gettableView();
  }

  getMonthaliyGoal() {
    this._apiReferenceService.getMonthalyGoalApi().subscribe((data: any) => {
      console.log(" Data for the Monthaly goal api");
      this.monthalyGoalDetail = data
      console.log(this.monthalyGoalDetail);

    }, (error) => {
      console.log("error");
      console.log(error);
    })
  }


  getTasks() {
    this._apiReferenceService.getTasks().subscribe((data: any) => {
      console.log(" Data for the tasks Detail");
      this.getTaskDetail = data
      console.log(this.getTaskDetail);

    }, error => {
      console.log("error");
      console.log(error);
    })
  }

  gettableView() {
    this._apiReferenceService.getTableView().subscribe(data => {
      console.log(" Data for the  TableView");
      this.getTableViewDetail = data
      console.log(this.getTableViewDetail);
    }, error => {
      console.log("error");
      console.log(error);
    })
  }
}
