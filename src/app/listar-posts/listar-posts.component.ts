import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Posts} from '../../state/post/posts.model';
import {Select, Store} from '@ngxs/store';
import {posts} from '../../state/post/posts.actions';
import {PostsState} from '../../state/post/posts.state';

@Component({
  selector: 'app-listar-posts',
  templateUrl: './listar-posts.component.html',
  styleUrls: ['./listar-posts.component.css']
})
export class ListarPostsComponent implements OnInit {

  @Select(PostsState.getPosts) posts$: Observable<Posts[]>;
  constructor(private store: Store) {

  }

  ngOnInit(): void {
  }

  public removePost(id: string) {
    this.store.dispatch(new posts.RemovePost(id));
  }

  public selectPost(post: Posts) {
    this.store.dispatch(new posts.SelectPost(post, true));
  }

}
