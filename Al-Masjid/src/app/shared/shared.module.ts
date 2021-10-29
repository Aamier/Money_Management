import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {MenubarModule} from 'primeng/menubar';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { SelectMasjidComponent } from './select-masjid/select-masjid.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    SelectMasjidComponent
  ],
  imports: [
    CommonModule,
    RippleModule,
    MenubarModule,
    DialogModule,
    ButtonModule,
    ToastModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    TableModule
  ],
  exports: [
    RippleModule,
    MenubarModule,
    DialogModule,
    ButtonModule,
    ToastModule,
    DropdownModule,
    ConfirmationDialogComponent,
    SelectMasjidComponent,
    InputNumberModule,
    InputTextModule,
    TableModule
    
  ]
})
export class SharedModule { }
