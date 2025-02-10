import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout'
import { takeUntil, Subject } from 'rxjs';
import { stateService } from '../services/state-service';
import {CarouselComponent} from './carousel/carousel.component';
import CarouselItem from '../models/carouselItem.model';

@Component({
  selector: 'app-root',
  providers: [stateService],
  templateUrl: './app.component.html',
  imports: [
    CarouselComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  destroyed = new Subject<void>();
  title ='Ben';
  carouselItems: CarouselItem[] = [
    {
      title: 'Test',
      image: 'assets/images/placeholder.png',
      description: 'This is a test description'
    },
    {
      title: 'Test',
      image: 'assets/images/placeholder.png',
      description: 'This is a test description'
    },
    {
      title: 'Test',
      image: 'assets/images/placeholder.png',
      description: 'This is a test description'
    },
    {
      title: 'Test',
      image: 'assets/images/placeholder.png',
      description: 'This is a test description'
    },
    {
      title: 'Test',
      image: 'assets/images/placeholder.png',
      description: 'This is a test description'
    },
    {
      title: 'Test',
      image: 'assets/images/placeholder.png',
      description: 'This is a test description'
    }
  ];

  constructor(
    public breakpointObserver: BreakpointObserver,
    public stateService: stateService
  ) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe( result => {
      this.stateService.setHandsetMode(result.matches);
    })
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }


}
