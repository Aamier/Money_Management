import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ReceiptsService } from 'src/app/services/receipts.service';

@Component({
  selector: 'app-receipt-grid',
  templateUrl: './receipt-grid.component.html',
  styleUrls: ['./receipt-grid.component.scss']
})
export class ReceiptGridComponent implements OnInit {
  receiptsDataSource: any;
  constructor(private receiptService: ReceiptsService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.spinner.show();
    this.receiptService.getReceipts().subscribe(
      success => {
        this.receiptsDataSource = success;
        this.spinner.hide();
      }
    )
  }

}
