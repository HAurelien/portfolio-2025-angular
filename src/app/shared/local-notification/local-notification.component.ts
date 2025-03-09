import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-local-notification',
  templateUrl: './local-notification.component.html',
  styleUrl: './local-notification.component.scss'
})
export class LocalNotificationComponent {
  message: string = '';
  visible: boolean = false;
  positionStyle = {};

  showNotification(position: { top: number, left: number }, message: string) {
    this.positionStyle = {
      top: `${position.top}px`,
      left: `${position.left}px`,
    };
    this.message = message
    this.visible = true;
    setTimeout(() => {
      this.visible = false;
    }, 2000); // Hide notification after 2 seconds
  }
}
