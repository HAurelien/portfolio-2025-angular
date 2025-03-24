import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss']
})
export class WordCloudComponent {
  @Input() words!: any[]
  
  onWorkClick($event: { event: MouseEvent; word: any; }) {
    console.log(typeof $event.word)
  }

  rotate(datum: any, index: number){
    if (Math.random() > 0.7) {
      return 90
    }
    return 0
  }

  colorMapper(datum: any, index: number){
    return 'lightgray'
  }
}
