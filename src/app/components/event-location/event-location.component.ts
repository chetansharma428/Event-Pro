import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-event-location',
  templateUrl: './event-location.component.html',
  styleUrls: ['./event-location.component.scss']
})
export class EventLocationComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
  gotohotel() {
    this.document.location.href = '//api.whatsapp.com/send?phone=917001854501&text=Hey! I am coming from the website. I would like to check some information and register for the event in Guwahati which was on 15 july.';
  }
}
