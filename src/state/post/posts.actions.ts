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

}

