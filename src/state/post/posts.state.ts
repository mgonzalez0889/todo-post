import { State, Action, StateContext, Selector } from '@ngxs/store';
import { PostsStateModel } from './posts.model';
import { posts } from './posts.actions';

@State({
  name: 'posts',
  defaults: {
    posts: []
  }
})

export class PostsState{
  @Selector() static getPosts(state: PostsStateModel){
    return state.posts;
  }

  // Añade un nuevo post al estado
  @Action(posts.AddPosts)
  add({getState, patchState}: StateContext<PostsStateModel>, { payload}: posts.AddPosts) {
    const state = getState();
    patchState({
      posts: [...state.posts, payload]
    });
  }

  // Elimina un post del estado
  @Action(posts.RemovePost)
  remove({getState, patchState}: StateContext<PostsStateModel>, { payload}: posts.RemovePost ){
    patchState({
      posts: getState().posts.filter(post => post.id !== payload)
    });
  }



}
