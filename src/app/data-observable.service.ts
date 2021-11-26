import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {
  private subject = new Subject<any>();

  emitData(data){
    this.subject.next(data);
  }

  listenData():Observable<string>{
    return this.subject.asObservable();
  }

  unsubscribeData(){
    this.subject.unsubscribe();
  }
  
}
