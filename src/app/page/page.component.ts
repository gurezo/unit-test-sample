import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  animations: [
    trigger('popUp', [
      state('true', style({ transform: 'translateY(0)'})),
      transition('void => *', [
        style({ transform: 'translateY(-20px)',
                opacity: '0', }),
        animate('500ms ease-out')
      ])
    ])
  ]

})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
