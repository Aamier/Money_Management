import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IConfirmationDialog } from 'src/app/Models/generalModel';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  @Input() dialogParams!: IConfirmationDialog;
  @Output() confirmationResult = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  hideDialog(value: boolean) {
    this.dialogParams.showDialog = false;
    this.confirmationResult.emit(value);
  }

}
