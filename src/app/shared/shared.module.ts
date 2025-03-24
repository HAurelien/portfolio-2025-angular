import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { LocalNotificationComponent } from './local-notification/local-notification.component';
import { DataBlockComponent } from './data-block/data-block.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FormsModule } from "@angular/forms"
import { AngularD3CloudModule } from 'angular-d3-cloud'
import { WordCloudComponent } from './word-cloud/word-cloud.component';



@NgModule({
  declarations: [
    CarouselComponent,
    LocalNotificationComponent,
    DataBlockComponent,
    ImageModalComponent,
    SearchFilterComponent,
    WordCloudComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularD3CloudModule,
  ],
  exports: [
    CarouselComponent,
    LocalNotificationComponent,
    DataBlockComponent,
    ImageModalComponent,
    SearchFilterComponent,
    WordCloudComponent,
  ]
})
export class SharedModule { }
