import { Component, OnInit } from '@angular/core';
import { UserData } from '../login/login.model';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shopname!: UserData;

  constructor(private login: LoginService) { }

  ngOnInit(): void {
    this.namegetter();
  }
  namegetter() {
    const shopname = this.login.user_profile;
    this.shopname = shopname;
  }


  getSingleLetter() {
    let singleLetter = this.login.user_profile.name;

    return singleLetter?.substring(0, 1).toUpperCase();
  }
}
