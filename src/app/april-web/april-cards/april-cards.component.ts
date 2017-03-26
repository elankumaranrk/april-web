import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/core';



@Component({
  host: { '[@flyInOut]': 'true', 'style': 'display: block;' },
  selector: 'april-cards',
  templateUrl: './april-cards.component.html',
  styleUrls: ['./april-cards.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'scale(1)', opacity: 1 })),
      transition('void => *', [
        style({ transform: ' rotateY(30deg)', opacity: 0.7 }),
        animate('0.4s, ease-in')
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AprilCardsComponent implements OnInit {
  @Input() title: String;
  @Input() articles: Array<Object>;
  @Input() cardImage: String;
  @Output() beginChat = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  actNow() {
    this.beginChat.emit();
  }

}
