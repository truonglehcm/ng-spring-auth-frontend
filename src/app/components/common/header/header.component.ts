import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ng2-ui-auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isAuthenticate = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isAuthenticate = this.auth.isAuthenticated();
  }

}
