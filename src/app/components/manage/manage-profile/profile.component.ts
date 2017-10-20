import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProfile } from '../../../models/profile';
import { IPassword } from '../../../models/password';
import { UserService } from '../../../services/user/user.service';
import { UserProfile } from '../../../models/user-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private userProfile: UserProfile;
  private formProfile: FormGroup;
  private formPassword: FormGroup;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.formProfile = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    this.formPassword = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      oldPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
      newPasswordConfirm: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    this.userService.getProfile().subscribe(
      result => this.setProfile(result),
      error => alert('Error ' + error)
    );
  }

  updateProfile(profileData: IProfile) {
    this.userService.updateProfile(profileData).subscribe({
      error: (err: any) => console.dir(err),
      complete: () => alert('update profile success')
    });
  }

  changePassword(passwordData: IPassword) {
    this.userService.changePassword(passwordData).subscribe({
      error: (err: any) => console.dir(err),
      complete: () => alert('update password success')
    });
  }

  setProfile(result): void {
    if (result.error) {
        alert('Web API error ' + result.message);
    }

    this.userProfile = result.data;

    this.formProfile.setValue({
      firstName: this.userProfile.firstName,
      lastName: this.userProfile.lastName,
      username: this.userProfile.username,
      email: this.userProfile.email
    });

    this.formPassword.setValue({
      username: this.userProfile.username,
      oldPassword: '',
      newPassword: '',
      newPasswordConfirm: ''
    });
  }
}
