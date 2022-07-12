import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPost } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url)
    .subscribe((response: IPost[]) => {
      this.posts = response;
    })
  }

  createPost(input: HTMLInputElement) {
    let post: IPost = {title: input.value, id: 0}
    input.value = '';
    this.http.post(this.url, post)
    .subscribe((response: any) => {
      post.id = response.id
      this.posts.splice(0, 0, post)
      console.log(post)
    })
  }

  updatePost() {
    
  }

}