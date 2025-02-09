import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class stateService {
    isMobile: boolean = false;

    setHandsetMode(isMobile: boolean) {
        this.isMobile = isMobile;
    }
    getHandsetMode() {
        return  this.isMobile;
    }
}
