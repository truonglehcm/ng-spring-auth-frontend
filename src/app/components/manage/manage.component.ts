import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { IProfile } from '../../models/profile';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() { }
}
