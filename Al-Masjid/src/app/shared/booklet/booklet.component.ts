import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { IDialog } from 'src/app/Models/generalModel';
import { ReceiptsService } from 'src/app/services/receipts.service';

@Component({
  selector: 'app-booklet',
  templateUrl: './booklet.component.html',
  styleUrls: ['./booklet.component.scss']
})
export class BookletComponent implements OnInit {
  @Input() dialogParams!: IDialog;
  @Output() bookletSaved = new EventEmitter();
  bookForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService,
     private receiptService: ReceiptsService,  private messageService: MessageService) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.bookForm = this.formBuilder.group({
      id: [null],
      number: [null, Validators.required]
    })
  }

  createBooklet() {
    this.spinner.show();
    this.receiptService.addBooklet(this.bookForm.value).subscribe( s => {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'New Booklet Created'});
      this.bookletSaved.emit(true);
      this.spinner.hide();
    });
  }

}
