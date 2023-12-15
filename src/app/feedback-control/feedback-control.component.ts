import { HostListener, forwardRef } from '@angular/core';
import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'app-feedback-control',
    templateUrl: 'feedback-control.component.html',
    styleUrls: ['feedback-control.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(()=>FeedbackControlComponent),
      }]
})

export class FeedbackControlComponent implements ControlValueAccessor {

    // if you set the rating with an initial value, you don't have to worry about null & undefined
    value!: number;
    //disabled = false;

    onChange: OnChangeFn<number> = (_: number) => {};
    onTouch: OnTouchFn = () => {};

    writeValue(input: number) {
        // phantom null issue
        // if(input === null) return;
        // with the above check added, the rating will not reset when the form does

        this.value = input + 1; // index is zero based
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }
 
    registerOnTouched(fn: any) {
        this.onTouch = fn;
    }

    setRating(index: number) {
        this.value = index + 1;
        this.onChange(this.value);
    }

    // have to do anything with?
    isStarActive(index: number, value: number | null): boolean {
        return value ? index < value : false;
    }

    @HostListener("focusout") // or blur
    onFocusOut(){
        this.onTouch();
    }

}

type OnChangeFn<T> = (value: T) => void;
type OnTouchFn = () => void;
