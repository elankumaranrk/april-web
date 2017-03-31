import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/core';
import { AprilWebService } from "app/april-web/april-web.service";

@Component({
  selector: 'app-april-settings',
  templateUrl: './april-settings.component.html',
  styleUrls: ['./april-settings.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'scale(1)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'scale(0.95)', opacity: 0.2 }),
        animate('0.4s, ease-in')
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AprilSettingsComponent implements OnInit {
  cardData: Array<Object>;
  sorts = [
    { value: 'featured', viewValue: 'Featured' },
    { value: 'alphabet', viewValue: 'Alphabetically' },
    { value: 'latest', viewValue: 'Latest' }
  ];
  constructor(public db: AprilWebService) { }

  ngOnInit() {
    this.cardData = this.db.cardData();
  }

}
