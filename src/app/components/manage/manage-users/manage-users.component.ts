import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { UserService } from '../../../services/user/user.service';
import { IUser } from '../../../models/user';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  private dataSize: number;
  private dataSource: UserDataSource;
  private displayedColumns = ['userName', 'firstName', 'lastName', 'email', 'enabled', 'expired', 'locked', 'lastPasswordReset', 'delete'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      result => this.setUsers(result),
      error => alert('Error ' + error)
    );
  }

  setUsers(result): void {
    if (result.error) {
        alert('Web API error ' + result.message);
    }

    this.dataSource = new UserDataSource(result.data, this.sort);
    this.dataSize = result.data.length;
    console.dir(result.data);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      result => this.getUsers(),
      error => alert('Error ' + error)
    );
  }

}


export class UserDataSource extends DataSource<IUser> {

  constructor(private users: IUser[], private sort: MatSort) {
    super();
  }

  connect(): Observable<IUser[]> {
    return Observable.of(this.users);
  }

  disconnect(): void {
  }
}
