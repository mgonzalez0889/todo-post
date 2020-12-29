import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {posts} from '../../state/post/posts.actions';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {

  public text: string;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  public addPost() {
    this.store.dispatch(new posts.AddPosts({ id: uuidv4(), text: this.text }));
    this.text = '';
  }



}
