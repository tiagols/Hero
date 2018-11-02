import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Tiago Loid'
  };

  heroes : Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.messageService.add('HeroSelected:'+ hero.name);
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService, private messageService: MessageService)  { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroesSt(): void {
    this.heroes = this.heroService.getHeroesSt();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
