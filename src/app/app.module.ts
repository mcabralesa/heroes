import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { heroesReducer } from 'src/reducers/heroes.reducer';
import { HeroesService } from 'src/services/heroes.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule.forRoot({ data: heroesReducer }), HttpClientModule],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
