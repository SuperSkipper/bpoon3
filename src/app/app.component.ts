import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { 
  BreakpointObserver,
  BreakpointState,
  Breakpoints
} from '@angular/cdk/layout'
import { takeUntil, Subject } from 'rxjs';
import { stateService } from '../services/state-service';

@Component({
  selector: 'app-root',
  providers: [stateService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  destroyed = new Subject<void>();
  title ='Ben';

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
      console.log(result);
    })
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }


}
