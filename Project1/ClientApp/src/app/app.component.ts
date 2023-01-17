import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConfigService } from './services/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  baseUrlSubscription: Subscription
  isLoad: boolean = false;
  constructor(private appConfigService: AppConfigService) {
    this.baseUrlSubscription = this.appConfigService.setBaseUrl.subscribe(() => {
      this.isLoad = true;
    });
  }

  ngOnDestroy() {
    this.baseUrlSubscription.unsubscribe();
  }
}
