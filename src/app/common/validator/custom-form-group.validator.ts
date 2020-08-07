import { AbstractControl, Validators } from '@angular/forms';

export function ValidateRequired(control: AbstractControl) {
  const data = Validators.required(control);
  if (data === null) {
    let value = control.value;
    if (value) {
      value = value.trim();
      if (value.length > 0) {
        return null;
      }
    }
    return { invalidValue: 'Value Is Invalid' };
  } else {
    return data;
  }
}
