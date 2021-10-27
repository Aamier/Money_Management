import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {MenubarModule} from 'primeng/menubar';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    RippleModule,
    MenubarModule,
    DialogModule,
    ButtonModule,
    ToastModule
  ],
  exports: [
    RippleModule,
    MenubarModule,
    DialogModule,
    ButtonModule,
    ToastModule,
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
