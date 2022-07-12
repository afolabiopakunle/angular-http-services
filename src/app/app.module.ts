import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostService } from './posts/post.service';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule ],
  declarations: [ AppComponent, PostsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PostService]
})
export class AppModule { }
