import { Component, OnInit } from '@angular/core';
import { Post } from '../../classes/post';
import { DataService } from './../../services/data.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
    trigger('postsAnimation', [
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
export class PostsComponent implements OnInit {

  public posts: Post[];

  constructor(private service: DataService) { 
    
  }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts(){
    this.service.getPosts().subscribe(
      data => this.posts = data
    );
  }

}
