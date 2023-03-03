import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FirstBannerComponent } from './first-banner/first-banner.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { MidCardComponent } from './mid-card/mid-card.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { EventScheduleComponent } from './event-schedule/event-schedule.component';
import { BottomCardComponent } from './bottom-card/bottom-card.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { NgbAccordionModule, NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutArtistComponent } from './about-artist/about-artist.component';
import { EventLocationComponent } from './event-location/event-location.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FirstBannerComponent,
    OwlCarouselComponent,
    MidCardComponent,
    EventInfoComponent,
    EventScheduleComponent,
    BottomCardComponent,
    ContactComponent,
    FaqComponent,
    FooterComponent,
    AboutArtistComponent,
    EventLocationComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,NgbModule,
     NgbCollapseModule,CarouselModule,NgbAccordionModule,
  ],
})
export class HomeModule { }
