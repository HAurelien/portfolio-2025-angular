import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { LocalNotificationComponent } from './local-notification/local-notification.component';
import { DataBlockComponent } from './data-block/data-block.component';
import { ImageModalComponent } from './image-modal/image-modal.component';



@NgModule({
  declarations: [
    CarouselComponent,
    LocalNotificationComponent,
    DataBlockComponent,
    ImageModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    LocalNotificationComponent,
    DataBlockComponent,
    ImageModalComponent
  ]
})
export class SharedModule { }
