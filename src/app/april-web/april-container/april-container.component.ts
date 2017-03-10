import { Component, OnInit } from '@angular/core';
import { AprilWebService } from "../april-web.service"
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'april-container',
  templateUrl: './april-container.component.html',
  styleUrls: ['./april-container.component.css']
})
export class AprilContainerComponent implements OnInit {

  cardData: Array<Object>;
  constructor(public db: AprilWebService, public af: AngularFire) { }

  login($event) {
    this.af.auth.login();
  }

  logout($event) {
    console.log("logging out..");
    this.af.auth.logout();
  }

  ngOnInit() {
    this.cardData = this.db.cardData();
  }

}
