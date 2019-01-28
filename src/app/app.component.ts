import { Component , OnInit ,ViewChild} from '@angular/core';
import { Observable, of } from 'rxjs';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { mergeMap } from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ModalDirective } from 'angular-bootstrap-md';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'app-codnect-v2';
  @ViewChild('detailsModal') detailsModal:ModalDirective;
  asyncSelected: string;
  typeaheadLoading: boolean;
  typeaheadNoResults: boolean;
  dataSource: Observable<any>;
  userCurrent;
    states: any = [
    {
      name: 'Arkansas',
 
    },
    {
      name: 'California',
     
    },
    {
      name: 'Florida',
    
    },
    {
      name: 'Texas',
    
    }
  ];
  constructor(private _userService : UserService){
   this.dataSource = Observable.create((observer: any) => {
      // Runs on every search
       this._userService.serachProfile(this.asyncSelected)
        .subscribe(res => {
        console.log('search ::' , res.items)
          observer.next(res.items);
        })
     
    
    })
      
   }
   
 
  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }
 
  typeaheadOnSelect(e: TypeaheadMatch): void {
    console.log('Selected value: ', e.value);
    this.getUserDetails(e.value);
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

ngOnInit(){

}
  
}
