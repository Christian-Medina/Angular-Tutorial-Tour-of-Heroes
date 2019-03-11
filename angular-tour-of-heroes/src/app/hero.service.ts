import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

import {MessageService} from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]>{
    //TODO send the message after fetching the Heroes
    this.messageService.add('HeroService: fetched heroes');
    return of (HEROES);
  }
  getHero(id: number): Observable<Hero>{
    //TODO: send the message after fetching the heroes
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero=>hero.id===id));
  }

}
