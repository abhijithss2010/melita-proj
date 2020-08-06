import { NgModule } from '@angular/core';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { ModalModule, ButtonModule } from 'carbon-components-angular';

@NgModule({
  declarations: [ConfirmModalComponent],
  imports: [ModalModule, ButtonModule],
  exports: [ConfirmModalComponent],
})
export class SharedModule {}
