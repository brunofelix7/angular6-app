import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from './../../classes/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public id: number;
  public user: User;

  constructor(private service: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.id = params.id);
  }
  
  ngOnInit() {
    this.getUser();
  }

  private getUser(){
    this.service.getUser(this.id).subscribe(
      data => this.user = data
    );
  }

}
