import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ng2-ui-auth';

@Component({
  selector: 'app-manage-header',
  templateUrl: './manage-header.component.html',
  styleUrls: ['./manage-header.component.css']
})
export class ManageHeaderComponent implements OnInit {

  private isAuthenticate = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isAuthenticate = this.auth.isAuthenticated();
  }

}
