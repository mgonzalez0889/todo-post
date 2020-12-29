import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { BogotaAction } from './bogota.actions';

export class BogotaStateModel {
  public items: string[];
}

const defaults = {
  items: []
};

@State<BogotaStateModel>({
  name: 'bogota',
  defaults
})
@Injectable()
export class BogotaState {
  @Action(BogotaAction)
  add({ getState, setState }: StateContext<BogotaStateModel>, { payload }: BogotaAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
