import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetPasswordService } from '../../../services/reset-password/reset-password.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  private form: FormGroup;

  constructor(private resetPasswordService: ResetPasswordService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  reset(dataReset: any) {
    this.resetPasswordService.resetPassword(dataReset.email).subscribe({
        error: (err: any) => console.dir(err),
        complete: () => this.router.navigateByUrl('/')
    });
  }
}
