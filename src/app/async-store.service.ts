import {Injectable} from '@angular/core';
@Injectable()
export class AsyncStoreService {
  getStuff() {
    return Promise.resolve([
      'Horse', 'Enfield'
    ]);
  }

}
