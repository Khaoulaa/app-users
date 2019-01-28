import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   
  typeSelected:string='user' ;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  chooseType(type)
  {
    if(type && type != null)
    this.typeSelected=type;
    console.log('type::',type)
  }
  goToList()
  {
     this.router.navigate(["users", this.typeSelected]);
  }

}
