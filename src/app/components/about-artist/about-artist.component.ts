import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-artist',
  templateUrl: './about-artist.component.html',
  styleUrls: ['./about-artist.component.scss']
})
export class AboutArtistComponent implements OnInit {
  showNavigationArrows = false;
	showNavigationIndicators = false;
  images=["../../../assets/images/artist.png",];
  constructor() { }

  ngOnInit(): void {
  }

}
