import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 
    
  }

  getPosts() {
    return this.http.get(this.url)
  }

  postPosts(post) {
   return this.http.post(this.url, post)
  }
}