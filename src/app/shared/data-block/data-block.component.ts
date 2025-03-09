import { Component, Input } from '@angular/core';
import { DataBlockModel } from '../models/data-block.model';

@Component({
  selector: 'app-data-block',
  templateUrl: './data-block.component.html',
  styleUrl: './data-block.component.scss'
})
export class DataBlockComponent {
  @Input() datas !: DataBlockModel[]

  onDataCLicked(item: DataBlockModel){
    item.onClick(item)
  }
}
