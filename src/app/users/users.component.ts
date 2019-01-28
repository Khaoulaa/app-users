import { Component, OnInit , ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ModalDirective } from 'angular-bootstrap-md';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  nbrUser=20;
  users=[] ;
  type=null;
  userCurrent=null;
  @ViewChild('detailsModal') detailsModal:ModalDirective;
  constructor(private _userService : UserService , private _activateRoute: ActivatedRoute ) {
    
    this.type=this._activateRoute.snapshot.paramMap.get('type');
    console.log('type param ::' , this.type)
   }

  ngOnInit() {
    this.getUsers()
  }
 getUsers()
 {
   this._userService.getUsers(this.nbrUser)
   .subscribe(res => {
     console.log('all users ::' , res)
     this.users=res;
   });
 }
 showDetailsUser(login)
 {
   this.getUserDetails(login);
   this.detailsModal.show();
 }
 getUserDetails(login)
 {
   this._userService.getUserByLogin(login)
   .subscribe(res =>{
     console.log('details user ::' , res)
     this.userCurrent=res ;
   } ,
   error => {
     console.log('error request ::' , error)
   })
 }
}
