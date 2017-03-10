import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'april-header',
  templateUrl: './april-header.component.html',
  styleUrls: ['./april-header.component.css']
})
export class AprilHeaderComponent implements OnInit {

  @Output() signIn = new EventEmitter();
  @Output() signOut = new EventEmitter();

  @Input() connected:boolean = false;

  constructor(public af: AngularFire) {
  }

  login() {
    this.connected = true;
    this.signIn.emit();
  }

  logout() {
    this.connected = false;
    this.signOut.emit();
  }

  ngOnInit() {
  }

}
