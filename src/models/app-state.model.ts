import { Hero } from './hero.model';

export interface AppState {
  heroes: Hero[];
  selectecHero?: Hero;
}
