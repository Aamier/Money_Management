import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuItem } from 'primeng/api';
import { ReceiptsService } from 'src/app/services/receipts.service';

@Component({
  selector: 'app-receipt-grid',
  templateUrl: './receipt-grid.component.html',
  styleUrls: ['./receipt-grid.component.scss']
})
export class ReceiptGridComponent implements OnInit {
  receiptsDataSource: any;
  items!: MenuItem[];
  constructor(private receiptService: ReceiptsService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getData();

    this.items = [
      {label: 'New', icon: 'pi pi-fw pi-plus'},
      {label: 'Open', icon: 'pi pi-fw pi-download'},
      {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
  ];
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
