import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LocalNotificationComponent } from '../../shared/local-notification/local-notification.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
  imports: [SharedModule]
})
export class FooterComponent {

  // Store email for easy access
  email = 'aurelienhabermacher@gmail.com';
  @ViewChild('localNotification') copyNotification!: LocalNotificationComponent;

  // Method to copy the email to the clipboard
  copyEmail(event: MouseEvent) {
    // Create a temporary input element to copy the email
    navigator.clipboard.writeText(this.email);

    // Calculate the position of the mouse click relative to the viewport
    const position = {
      top: event.pageY - 25,
      left: event.pageX - 50
    };

    // Show the notification at the cursor's position
    this.copyNotification.showNotification(position, 'Sent to clipboard !');
  }

  goToTop(){
    scrollTo(0, 0)
  }
}
