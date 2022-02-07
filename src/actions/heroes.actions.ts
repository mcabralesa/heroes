// import { Action } from '@ngrx/store';
import { Hero } from 'src/models';

import { createAction, props } from '@ngrx/store';

export const LOAD_HEROES = 'Load Heroes list';
export const SELECT_HERO = 'Select a hero';

// export class LoadHeroes implements Action {
//   readonly type = LOAD_HEROES;

//   constructor(public payload: Hero[]) {}
// }

// export class SelectHero implements Action {
//   readonly type = SELECT_HERO;

//   constructor(public payload: number) {}
// }

// export type All = LoadHeroes | SelectHero;

export const LoadHeroes = createAction(LOAD_HEROES, props<{ list: Hero[] }>());

export const SelectHero = createAction(SELECT_HERO, props<{ selected: number }>());
