import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IUser } from '../../../models/user';
import { UserService } from '../../../services/user/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-manage-users-detail',
  templateUrl: './manage-users-detail.component.html',
  styleUrls: ['./manage-users-detail.component.css']
})
export class ManageUsersDetailComponent implements OnInit {

  private formUser: FormGroup;
  private user: IUser;
  private userId: number;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.formUser = this.fb.group({
      userName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password:  new FormControl('123456', [Validators.required, Validators.minLength(4)]),
      enabled: new FormControl(false),
      expired: new FormControl(false),
      locked: new FormControl(false)
    });

    this.route.params.subscribe((params: Params) => {
      this.userId = params['id'];
      if (this.userId > 0) {
        this.userService.getUser(params['id']).subscribe(
          result => this.setUser(result),
          error => alert('Error ' + error)
        );
      }
    });
  }

  saveUser(userData: IUser) {
    userData.id = this.userId;
    if (this.userId <= 0) {
      this.userService.addUser(userData).subscribe({
        error: (err: any) => console.dir(err),
        complete: () => this.router.navigateByUrl('/manage/users')
      });
    } else {
      this.userService.updateUser(this.userId, userData).subscribe({
        error: (err: any) => console.dir(err),
        complete: () => this.router.navigateByUrl('/manage/users')
      });
    }
  }

  setUser(result): void {
    if (result.error) {
        alert('Web API error ' + result.message);
    }

    this.user = result.data;
    this.formUser.setValue({
      userName: this.user.userName,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      password: '123456',
      enabled: this.user.enabled,
      expired: this.user.expired,
      locked: this.user.locked
    });
  }

}
