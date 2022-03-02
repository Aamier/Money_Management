import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.scss']
})
export class RaiseTicketComponent implements OnInit {
  show = true;
  @Output() requestCreated = new EventEmitter();
  requestForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.requestForm = this.formBuilder.group({
      id: [null],
      amount: [null, Validators.required],
      note: ['', Validators.required],
      created_on: [new Date()],
      updated_on: [null],
      received_by: [sessionStorage.getItem('userId')],
      masjid: [sessionStorage.getItem('org'), Validators.required]
    })
  }

  save(value: boolean) {
    if(value === true) {
      // this.addPayMode(value);
      this.requestCreated.emit(value);
    } else {
      this.show = false;
      this.requestCreated.emit(value);
    }
  }

}
