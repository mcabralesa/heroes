import { createReducer, on } from '@ngrx/store';
import { LoadHeroes, SelectHero } from 'src/actions/heroes.actions';
import { AppState } from 'src/models';

const defaultState: AppState = { heroes: [], selectecHero: undefined };

const newState = (state: any, newData: any) => {
  return { ...state, ...newData };
};

export const heroesReducer = createReducer(
  defaultState,
  on(LoadHeroes, (state, action) => newState(state, { heroes: action.list })),
  on(SelectHero, (state, action) => {
    state.heroes[action.selected];
    return newState(state, { selectecHero: state.heroes[action.selected] });
  })
);
