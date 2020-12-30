import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {posts} from '../../state/post/posts.actions';
import { v4 as uuidv4 } from 'uuid';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostsState} from '../../state/post/posts.state';
import {Observable} from 'rxjs';
import {Posts} from '../../state/post/posts.model';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {

  public text: string;
  statusCreate = false;
  statusUpdate = false;
  @Select(PostsState.getPost) post$: Observable<Posts>;
  public form: FormGroup;
  constructor(
    private store: Store,
    private fb: FormBuilder
  ) {
    this.post$.subscribe( (res) => {
      if (res) {
        this.statusUpdate = true;
        this.statusCreate = true;
        this.form.patchValue(res);
      }
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: '',
      text: ['', [Validators.required]]
    });
  }
  /**
   * @description: CreatePost
   */
  public addPost() {
    this.text = this.form.get('text').value;
    this.store.dispatch(new posts.AddPosts({ id: uuidv4(), text: this.text }));
    this.form.reset('');
  }
  /**
   * @description: UpdatePost
   */
  public editPost() {
    this.statusCreate = false;
    this.statusUpdate = false;
    this.text = this.form.get('text').value;
    const idPost = this.form.get('id').value;
    this.store.dispatch(new posts.EditPost({id: idPost, text: this.text}));
    this.form.reset('');
  }
}
