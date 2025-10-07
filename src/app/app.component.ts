import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'anniversary-app';
  isOpened = false;

  toggleCard() {
    this.isOpened = !this.isOpened;
  }

  ngOnInit() {
    const audio = new Audio('/assets/song.mp3');
    audio.play();
  }
}
