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
  }
  namegetter() {
    const shopname = this.login.user_profile;
    this.shopname = shopname;
  }
}
