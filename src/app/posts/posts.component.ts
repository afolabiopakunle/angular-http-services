import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((response: any[]) => {
      this.posts = response;
      console.log(this.posts);
    })
  }

}