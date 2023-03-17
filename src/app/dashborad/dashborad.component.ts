import { Component, OnInit } from '@angular/core';
import { ApiReferenceService } from '../services/apiservice';
declare var $: any;
@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {
  getEderingDetial: any[] = [];
  currenMonth: number=0;
  currenMonthDetail: any;
  totalDirams: any=0;


  constructor(private _apiReferenceService: ApiReferenceService) { }

  ngOnInit(): void {

    console.log(new Date().getMonth());
    
    this.currenMonth=(new Date().getMonth())+1;

    $(".duration-header a").click(function () {
      $(".duration-content").slideToggle('slow');
      $("html").toggleClass('has-duration');
    });
    $(".profit-header a").click(function () {
      $(".profit-content").slideToggle('slow');
      $("html").toggleClass('has-profit');
    });

    this.getEodering();
  }

  getEodering() {
    this._apiReferenceService.getEOrderDetial().subscribe((data: any) => {
      this.getEderingDetial = data?.eOrdering
      this.currenMonthDetail=this.getEderingDetial.find(e=>e.month==this.currenMonth)
      
     this.getEderingDetial.forEach(element => {
      this.totalDirams=this.totalDirams+element.turnover
      });
    }, (error) => {
      console.log("error");
      console.log(error);
    })
  }

/*  languge can be change once we implement ii18 */
  selectMonth(value: any) {
    switch (value) {
      case 1:
        return "January"
        break;
      case 2:
        return "Faburary"
        break;
      case 3:
        return "March"
        break;
      case 4:
        return "April"
        break;
      case 5:
        return "May"
        break;
      case 6:
        return "June"
        break;
      case 7:
        return "July"
        break;
      case 8:
        return "Aguest"
        break;
      case 9:
        return "September"
        break;
      case 10:
        return "Octomber"
        break;
      case 11:
        return "November"
        break;
      case 12:
        return "December"
        break;

    }
    return '';
  }
}
