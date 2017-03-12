import { Component, OnInit, HostListener } from '@angular/core';
import { AprilWebService } from "../april-web.service"
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'april-container',
  templateUrl: './april-container.component.html',
  styleUrls: ['./april-container.component.css']
})

export class AprilContainerComponent implements OnInit {

  cardData: Array<Object>;
  openSearch: Boolean = false;
  constructor(public db: AprilWebService, public af: AngularFire) { }

  login($event) {
    this.af.auth.login();
  }

  logout($event) {
    console.log("logging out..");
    this.af.auth.logout();
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode == 27) {
      this.openSearch = false;
    }
    console.log("Listening...inside container");
  }

  ngOnInit() {
    this.cardData = this.db.cardData();
  }

  cardClicked() {
    this.openSearch = true;
  }
  closeChat() {
    this.openSearch = false;
  }
}
