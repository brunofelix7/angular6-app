import { Component, OnInit } from '@angular/core';
import { User } from './../../classes/user';
import { DataService } from './../../services/data.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('usersAnimation', [
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger('50ms',
            animate('550ms ease-out',
            style({ opacity: 1, transform: 'translateY(0px)' })))
          ], { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), { optional: true })
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {

  public users: User[];

  constructor(private service: DataService) { 

  }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers(){
    this.service.getUsers().subscribe(
      data => this.users = data
    );
  }

}
