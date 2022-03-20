import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-grid',
  templateUrl: './request-grid.component.html',
  styleUrls: ['./request-grid.component.scss']
})
export class RequestGridComponent implements OnInit {
  OpenRequestDialog = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  showDialog() {
    this.OpenRequestDialog = true;
  }

  event_request_created(value: boolean) {
    this.OpenRequestDialog = false;
  }

}
