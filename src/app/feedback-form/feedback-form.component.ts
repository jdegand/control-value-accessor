import { EventEmitter, ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackControlComponent } from '../feedback-control/feedback-control.component';

@Component({
    standalone: true,
    imports: [FeedbackControlComponent, ReactiveFormsModule],
    selector: 'app-feedback-form',
    templateUrl: 'feedback-form.component.html',
    styleUrls: ['feedback-form.component.scss'],
})
export class FeedbackFormComponent {

    readonly feedbackForm = new FormGroup({
        name: new FormControl('', {
            validators: Validators.required,
        }),
        email: new FormControl('', {
            validators: Validators.required,
        }),
        comment: new FormControl(),
        rating: new FormControl(0, { // need to watch here -> number or string?
            validators: [
                Validators.required,
                Validators.min(1),
                Validators.max(5)
            ]
        })
    });

    submitForm(): void {

        console.log(this.feedbackForm.value);

        this.feedbackForm.reset();
    }
}

/*
export class FeedbackFormComponent {
    @Output()
    readonly feedBackSubmit: EventEmitter<Record<string, string | null>> =
        new EventEmitter<Record<string, string | null>>();

    readonly feedbackForm = new FormGroup({
        name: new FormControl('', {
            validators: Validators.required,
        }),
        email: new FormControl('', {
            validators: Validators.required,
        }),
        comment: new FormControl(),
    });

    rating: string | null = null;

    // if rating uses the interface, you won't have to constantly add the rating to new a object with all form values
    submitForm(): void {
        this.feedBackSubmit.emit({
            ...this.feedbackForm.value,
            rating: this.rating,
        });

        this.feedbackForm.reset();
    }
}
*/