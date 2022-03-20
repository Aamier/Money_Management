import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { PayModeService } from 'src/app/services/pay-mode.service';
import { ReceiptsService } from 'src/app/services/receipts.service';

@Component({
  selector: 'app-new-receipt',
  templateUrl: './new-receipt.component.html',
  styleUrls: ['./new-receipt.component.scss']
})
export class NewReceiptComponent implements OnInit {
  show = true;
  @Output() recieptSaved = new EventEmitter();
  payModeData: any;
  payForm!: FormGroup;
  today = new Date();
  constructor(private payModeService: PayModeService, 
    private formBuilder: FormBuilder,private spinner: NgxSpinnerService, private receiptService: ReceiptsService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getPayModes();
    this.formInit();
  }

  formInit() {
    this.payForm = this.formBuilder.group({
      id: [null],
      receipt_no: [null, Validators.required],
      amount: [null, Validators.required],
      paid_by: ['', Validators.required],
      created_on: [new Date()],
      updated_on: [null],
      payment_mode: [null, Validators.required],
      booklet: ['', Validators.required],
      masjid: [sessionStorage.getItem('org'), Validators.required],
      source: [null],
      date: [null, Validators.required],
      received_by: [sessionStorage.getItem('userId')]
    });
  }

  save(value: boolean) {
    if(value === true) {
      this.addPayMode(value);
    } else {
      this.show = false;
      this.recieptSaved.emit(value);
    }
  }

  getPayModes() {
    this.payModeService.getPayModes().subscribe(
      succes => {
        this.payModeData = succes;
      }
    )
  }

  addPayMode(value: boolean) {
    if(this.payForm.valid) {
      this.spinner.show();
      this.receiptService.addReceipts(this.payForm.value).subscribe(
        success => {
          this.show = false;
          this.recieptSaved.emit(value);
          this.spinner.hide();
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Receipt Added'});
        }
      )
    }
  }

}
