# Control Value Accessor

Angular Challenges #40 [Control Value Accessor Proposal](https://github.com/tomalaforge/angular-challenges/pull/396/files#diff-f06f5561dac6cb70c16edacf2c7bbfb7079e50ddf00946f696ad2edf2afda1aa) Solution.  

## Directions

In this exercise, you have to rewrite the `FeedbackControlComponent`. It should implement the  `Control Value Accessor` interface.  This interface is crucial for creating custom form controls that can interact seamlessly with Angular's forms API.  The primary goal is to use the control in the feedbackForm to eliminate the need for using @Output to retrieve the value and check it.

## Thoughts 

- I wasted a few minutes thinking my onChange was not working. The unimplemented `setDisabledState` error prevented the onChange from working although `writeValue` worked fine.  Interesting to see the order of function calls in Angular.  
- One of the drawbacks of the previous implementation is that you have to transform the form data into a new object whereas if the component is treated as part of the form, you can just submit the form's value.  
- Apparently, Angular would call `writeValue(null)` before running the first writeValue function call.  I don't know if this still happens or not. 
- The rating component does not reset its value after a form reset when `writeValue` contains a null check.
- Submit button should be disabled initially.  `feedbackForm.controls.rating === null` check may be unnecessary after a refactor.  Debatable if you should allow the rating component to be null or not.   
- There are also Typescript implications if you allow the rating component to be null.  You will have to add `null` to all typings.   
- There is a warning in the browser console about inputs not having a name property even though the inputs have `[formControl]` bindings.

## Continued Development

- Implementation choice: allow rating to be null or not?  My implementation doesn't allow rating to be null.
- Testing   

## Useful Resources

- [YouTube](https://www.youtube.com/watch?v=KLjZ5ROwCgg) - Control Value Accessor in Angular: Building a Reactive and Reusable Custom Form Input (like a PRO)
- [YouTube](https://www.youtube.com/watch?v=krw9R77eV44) - How to create custom form components in Angular with ControlValueAccessor
- [YouTube](https://www.youtube.com/watch?v=ItBRUovkyHI) - Creating custom FormControl(s) in Angular using ControlValueAccessor