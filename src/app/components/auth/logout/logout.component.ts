import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ng2-ui-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  async ngOnInit() {
    await this.auth.removeToken();
    await this.router.navigate(['/']);
  }

}
