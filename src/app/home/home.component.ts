import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UserData } from '../login/login.model';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  shopname!: UserData;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private login: LoginService,
    private observer: BreakpointObserver
  ) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        console.log(2)
        this.sidenav.open();
      }
    });

 
  }


  ngOnInit(): void {
    this.namegetter();
    console.log(this.name())
  }
  namegetter() {
    const shopname = this.login.user_profile;

    

    this.shopname = shopname;
  }


  name(){
    let captial = this.login.user_profile.name;
 
    return captial.toUpperCase()

   
  }


  getSingleLetter() {
    let singleLetter = this.login.user_profile.name;

    return singleLetter?.substring(0, 1).toUpperCase();
  }
}
