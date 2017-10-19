import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../../services/signup/signup.service';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup-confirm',
  templateUrl: './signup-confirm.component.html',
  styleUrls: ['./signup-confirm.component.css']
})
export class SignupConfirmComponent implements OnInit {

  private token: String;

  constructor(private signupService: SignupService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.token = params['token'];
      this.signupService.signupConfirm(this.token).subscribe(
        result => this.router.navigateByUrl('/auth/login'),
        error => alert('Error ' + error)
      );
    });
  }

}
