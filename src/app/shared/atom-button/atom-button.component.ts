import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atom-button',
  templateUrl: './atom-button.component.html',
  styleUrls: ['./atom-button.component.scss']
})
export class AtomButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert('onClick()!!!');
  }
}
