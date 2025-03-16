import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { LocalNotificationComponent } from './local-notification/local-notification.component';
import { DataBlockComponent } from './data-block/data-block.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FormsModule } from "@angular/forms"



@NgModule({
  declarations: [
    CarouselComponent,
    LocalNotificationComponent,
    DataBlockComponent,
    ImageModalComponent,
    SearchFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CarouselComponent,
    LocalNotificationComponent,
    DataBlockComponent,
    ImageModalComponent,
    SearchFilterComponent
  ]
})
export class SharedModule { }
