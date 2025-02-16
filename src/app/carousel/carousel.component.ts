import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import CarouselItem from '../../models/carouselItem.model';
import {CommonModule} from '@angular/common';
import {fromEvent, Subscription} from 'rxjs';

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
  @ViewChild('images') images!: ElementRef;
  private scrollSubscription!: Subscription;
  private tapSubscription!: Subscription;
  constructor() {

  }

  ngAfterViewInit() {
    this.images.nativeElement.scrollBy(1,0);
    this.scrollSubscription = fromEvent(this.images.nativeElement, 'wheel').subscribe((event) => {
      if (event instanceof Event) {
        event.preventDefault();
      }
    })
    this.tapSubscription = fromEvent(this.images.nativeElement, 'touchmove').subscribe((event) => {
      if (event instanceof Event) {
        console.log(event);
        event.preventDefault();
      }
    })
  }

  scroll(direction: string) {
    switch (direction) {
      case 'left':
        this.images.nativeElement.scrollBy({
          top: 0,
          left: -10,
          behavior: 'smooth'
        });
        break;
      case 'right':
        this.images.nativeElement.scrollBy({
          top: 0,
          left: 10,
          behavior: 'smooth'
        });
        //this.carouselItems.push(this.carouselItems.shift()!);
        break;
    }
  }

  ngOnDestroy() {
    this.scrollSubscription?.unsubscribe();
    this.tapSubscription?.unsubscribe();
  }

}
