import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-atom-button',
  templateUrl: './atom-button.component.html',
  styleUrls: ['./atom-button.component.scss']
})
export class AtomButtonComponent implements OnInit {

  @Output() clickEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clickEvent.emit(true);
    alert('onClick()!!!');
  }
}
