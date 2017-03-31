import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/core';

@Component({
   host: { '[@flyInOut]': 'true', 'style': 'display: inline-block;' },
  selector: 'april-settings-card',
  templateUrl: './april-settings-card.component.html',
  styleUrls: ['./april-settings-card.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'scale(1)', opacity: 1 })),
      transition('void => *', [
        style({ transform: ' rotateY(60deg)', opacity: 0.7 }),
        animate('0.4s, ease-in')
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AprilSettingsCardComponent implements OnInit {
  @Input() title: String;
  @Input() articles: Array<Object>;
  @Input() cardImage: String;
  @Input() added: String;
  @Input() hint: String;
  @Output() beginChat = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  actNow() {
    this.added = (this.added == 'true') ? 'false' : 'true';
    console.log(this.added);
  }

}
