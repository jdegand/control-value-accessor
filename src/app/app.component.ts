import { Component } from '@angular/core';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

@Component({
  standalone: true,
  imports: [FeedbackFormComponent],
  selector: 'app-root',
  template: `<app-feedback-form></app-feedback-form>`, // (feedBackSubmit)="apiCall($event)"
})
export class AppComponent {
  /*
  apiCall(event: Record<string, string | null>): void {
    console.log(event);
  }
  */
 // Best to remove this?
}
