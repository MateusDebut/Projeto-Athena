import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommonService {
  private subjectName = new Subject<any>();

  sendUpdate(param: any) {
    this.subjectName.next({ text: param });
  }

  getUpdate(): Observable<any> {
    return this.subjectName.asObservable();
  }
}
