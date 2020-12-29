export class BogotaAction {
  static readonly type = '[Bogota] Add item';
  constructor(public payload: string) { }
}

export class AddName{
  static readonly type = '[Name] Add Name';
  constructor(public name: string) {
  }
}

