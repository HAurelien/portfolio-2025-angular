import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { LocalNotificationComponent } from './local-notification/local-notification.component';
import { DataBlockComponent } from './data-block/data-block.component';
import { AngularD3CloudModule } from 'angular-d3-cloud'
import { WordCloudComponent } from './word-cloud/word-cloud.component';



@NgModule({
  declarations: [
    CarouselComponent,
    LocalNotificationComponent,
    DataBlockComponent,
    WordCloudComponent,
  ],
  imports: [
    CommonModule,
    AngularD3CloudModule,
  ],
  exports: [
    CarouselComponent,
    LocalNotificationComponent,
    DataBlockComponent,
    WordCloudComponent,
  ]
})
export class SharedModule { }
