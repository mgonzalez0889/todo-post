import { State, Action, StateContext, Selector } from '@ngxs/store';
import {Posts} from './posts.model';
import { posts } from './posts.actions';
import {patch, updateItem} from '@ngxs/store/operators';


export class PostsStateModel{
  items: Posts[];
  selectedItem: Posts;
}

const defaults = {
  items: [],
  selectedItem: undefined
};

@State({
  name: 'posts',
  defaults
})

export class PostsState{

  /**
   * @description: Select Posts
   */
  @Selector()
  static getPosts(state: PostsStateModel){
    return state.items;
  }

  /**
   * @description: Select post
   */
  @Selector()
  static getPost(state: PostsStateModel) {
    return state.selectedItem;
  }

  /**
   * @description: Add Post
   */
  @Action(posts.AddPosts)
  add({getState, patchState}: StateContext<PostsStateModel>, { payload}: posts.AddPosts) {
    const state = getState();
    patchState({
      items: [...state.items, payload]
    });
  }

  /**
   * @description: Remove Post
   */
  @Action(posts.RemovePost)
  remove(
    {
      getState,
      patchState
    }: StateContext<PostsStateModel>,
    { payload}: posts.RemovePost ){
    patchState({
      items: getState().items.filter(post => post.id !== payload)
    });
  }

  /**
   * @description: Edit Post
   */
  @Action(posts.EditPost)
  editPost(
    ctx: StateContext<PostsStateModel>,
    action: posts.EditPost
  ) {
    ctx.setState(
      patch<PostsStateModel>({
        items: updateItem<Posts>(f => f.id === action.payload.id, patch<Posts>(action.payload)),
        selectedItem: undefined
      })
    );
  }
  /**
   * @description: Select Post
   */
  @Action(posts.SelectPost)
  selectItem(
    ctx: StateContext<PostsStateModel>,
    action: posts.SelectPost
  ){
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedItem: action.payload
    });
  }

}
