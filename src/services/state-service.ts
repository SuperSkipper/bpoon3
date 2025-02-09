import { Injectable } from '@angular/core';

@Injectable()
export class stateService {
    isMobile: boolean = false;

    setHandsetMode(isMobile: boolean) {
        this.isMobile = isMobile;
    }
    getHandsetMode() {
        return this.isMobile;
    }
}
