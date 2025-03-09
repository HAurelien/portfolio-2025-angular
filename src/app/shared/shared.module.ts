import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { LocalNotificationComponent } from './local-notification/local-notification.component';



@NgModule({
  declarations: [
    CarouselComponent,
    LocalNotificationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    LocalNotificationComponent
  ]
})
export class SharedModule { }
