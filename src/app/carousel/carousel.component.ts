import {Component, Input} from '@angular/core';
import CarouselItem from '../../models/carouselItem.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [
    CommonModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() public carouselItems: CarouselItem[] = [];

  constructor() {

  }

  protected readonly CarouselItem = CarouselItem;
}
