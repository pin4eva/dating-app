import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../members/edit/member-edit.component';

export const preventUnsavedChangesGuard: CanDeactivateFn<
  MemberEditComponent
> = (component, currentRoute, currentState, nextState) => {
  if (component.editForm?.dirty) {
    return confirm(
      'Are you sure you want to continue?, unsaved changes will be lost'
    );
  }

  return true;
};
