import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LocalNotificationComponent } from '../../shared/local-notification/local-notification.component';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
  imports: [SharedModule]
})
export class FooterComponent implements OnInit{
  eventSubscription: any;
  scrolled = 0;

  ngOnInit(): void {
    this.eventSubscription = fromEvent(window, "scroll").subscribe(() => {
    this.onWindowScroll();
    });
  }

  onWindowScroll() {
    const numb = window.scrollY;
    if (numb >= 50){
      this.scrolled = 1;
    }
    else {
      this.scrolled = 0;
    }
  }

  email = 'aurelienhabermacher@gmail.com';
  @ViewChild('localNotification') copyNotification!: LocalNotificationComponent;
  

  copyEmail(event: MouseEvent) {
    navigator.clipboard.writeText(this.email);

    const position = {
      top: event.pageY - 25,
      left: event.pageX - 50
    };

    this.copyNotification.showNotification(position, 'Sent to clipboard !');
  }

  goToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
