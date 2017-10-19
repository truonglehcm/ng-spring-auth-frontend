import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IResetPassword } from '../../../models/reset-password';
import { ResetPasswordService } from '../../../services/reset-password/reset-password.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  private token: String;
  private form: FormGroup;

  constructor(private resetPasswordService: ResetPasswordService, private route: ActivatedRoute,
      private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.token = params['token'];
      this.form = this.fb.group({
        token: this.token,
        password: new FormControl('', [Validators.required, Validators.minLength(4)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4)])
      });
    });
  }

  reset(confirmData: IResetPassword) {
    this.resetPasswordService.resetPasswordConfirm(confirmData).subscribe({
      error: (err: any) => console.dir(err),
      complete: () => this.router.navigateByUrl('/auth/login')
  });
  }
}
