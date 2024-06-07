import { Component } from '@angular/core';
import { Card, cards } from '../../../cards';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards: Card[] = [];


  ngOnInit(): Card[] {
    return this.cards = cards;
  }
    

}
