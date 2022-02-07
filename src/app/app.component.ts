import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectHero } from 'src/actions/heroes.actions';
import { AppState } from 'src/models';
import { HeroesService } from 'src/services/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'heroes';

  state$: Observable<AppState>;

  constructor(
    private store: Store<{ data: AppState }>,
    private heroService: HeroesService
  ) {
    this.state$ = this.store.select('data');
  }

  ngOnInit(): void {
    this.heroService.getHeroesList();
  }

  selectHero(index: number) {
    this.store.dispatch(SelectHero({ selected: index }));
  }
}
