import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Posts} from '../../state/post/posts.model';
import {Store} from '@ngxs/store';
import {posts} from '../../state/post/posts.actions';

@Component({
  selector: 'app-listar-posts',
  templateUrl: './listar-posts.component.html',
  styleUrls: ['./listar-posts.component.css']
})
export class ListarPostsComponent implements OnInit {

  public posts: Observable<Posts>;

  constructor(private store: Store) {
    this.posts = this.store.select(state => state.posts.posts);
  }

  ngOnInit(): void {
  }

  public removePost(id: string) {
    this.store.dispatch(new posts.RemovePost(id));
  }

}
