import { Injectable } from '@angular/core';

@Injectable()
export class PageService {

  constructor() { }

  get() {
    console.log('get');
  }

  post() {
    console.log('post');
  }
}
