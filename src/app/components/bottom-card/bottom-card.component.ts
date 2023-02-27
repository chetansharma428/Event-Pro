import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-bottom-card',
  templateUrl: './bottom-card.component.html',
  styleUrls: ['./bottom-card.component.scss']
})
export class BottomCardComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
  gotowhatsapp(): void{
    this.document.location.href = '//api.whatsapp.com/send?phone=917001854501&text=Hey! I am coming from the website. I would like to check some information and register for the event in Guwahati which was on 15 july.';
  }
}
