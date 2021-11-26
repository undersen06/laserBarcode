import { DataObservableService } from './data-observable.service';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private webIntent: WebIntent,
    private dataObservableService: DataObservableService
  ) {
    this.registerIntent();
  }


  registerIntent() {
    this.webIntent.registerBroadcastReceiver(
      {
        filterActions: ['my.custom.name.ACTION']
      }
    ).subscribe((data) => {
      console.log(data);
      this.dataObservableService.emitData(data);
    }, (error) => {
      console.log(error);
    });
  }
}
