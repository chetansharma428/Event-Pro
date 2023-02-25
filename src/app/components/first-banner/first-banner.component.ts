import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-first-banner',
  templateUrl: './first-banner.component.html',
  styleUrls: ['./first-banner.component.scss']
})
export class FirstBannerComponent implements OnInit {
  showNavigationArrows = false;
	showNavigationIndicators = false;
  images=["../../../assets/images/first_banner.jpg",];
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
  gotowhatsapp(): void{
    this.document.location.href = '//api.whatsapp.com/send?phone=917001854501&text=Hey! I am coming from the website. I would like to check some information and register for the event in Guwahati which was on 15 july.';
  }
}
