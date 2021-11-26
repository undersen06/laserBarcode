import { DataObservableService } from './../data-observable.service';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  code: string;

  constructor(
    private dataObservableService: DataObservableService,
    private ngZone: NgZone

    ) { }

  ngOnDestroy() {
    this.dataObservableService.unsubscribeData();
  }

  ngOnInit() {
    this.dataObservableService.listenData().subscribe((data:any) => {
      this.ngZone.run(()=>{
        this.code = data.extras['com.symbol.datawedge.data_string'];
      });
    });
  }

}
