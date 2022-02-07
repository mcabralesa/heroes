import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadHeroes } from 'src/actions/heroes.actions';
import { AppState, Hero } from 'src/models';

@Injectable()
export class HeroesService {
  constructor(
    private http: HttpClient,
    private store: Store<{ data: AppState }>
  ) {}

  getHeroesList() {
    let url = 'https://udem.herokuapp.com/heroes';
    this.http.get<Hero[]>(url).subscribe((data) => {
      this.store.dispatch(LoadHeroes({ list: data }));
    });
  }
}
