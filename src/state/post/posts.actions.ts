import { Posts } from './posts.model';
// tslint:disable-next-line:no-namespace
export namespace posts{

  export class AddPosts {
    static readonly type = '[POSTS] AddPosts';
    constructor(public payload: Posts) {}
  }
  export class RemovePost {
    static readonly type = '[POSTS] Remove';
    constructor(public payload: string) {}
  }

  export class SelectPost {
    static readonly type = '[POSTS] SelectPost';
    constructor(public payload: Posts, public status: boolean) {
    }
  }

  export class EditPost{
    static readonly type = '[POSTS] EditPost';
    constructor(public payload: Posts) {}
  }

}

