import { Component, OnInit, Output, EventEmitter, Input, HostListener } from '@angular/core';

@Component({
  selector: 'april-bot',
  templateUrl: './april-bot.component.html',
  styleUrls: ['./april-bot.component.css']
})
export class AprilBotComponent implements OnInit {
  @Input() openSearch: boolean = false;
  @Output() closeChat = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.keyCode);
    if (event.keyCode == 27) {
      this.openSearch = false;
    }
    console.log("Listening...inside bot");
  }

  close() {
    this.closeChat.emit();
  }

}
