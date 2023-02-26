import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  isCategories = false;
  constructor() { }

  ngOnInit(): void {
  }
  inview(ele:any){
    ele.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})
  }
}
