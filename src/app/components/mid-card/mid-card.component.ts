import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mid-card',
  templateUrl: './mid-card.component.html',
  styleUrls: ['./mid-card.component.scss']
})
export class MidCardComponent implements OnInit {
  showNavigationArrows = false;
	showNavigationIndicators = false;
  images=["../../../assets/images/class-diff1.jpg",];
  constructor() { }

  ngOnInit(): void {
  }

}
