import { Component, Input, OnInit } from '@angular/core';
import { IConfirmationDialog } from 'src/app/Models/generalModel';

@Component({
  selector: 'app-select-masjid',
  templateUrl: './select-masjid.component.html',
  styleUrls: ['./select-masjid.component.scss']
})
export class SelectMasjidComponent implements OnInit {
  @Input() dialogParams!: IConfirmationDialog;
  constructor() { }
  ngOnInit(): void {
  }

  selectedMasjid(event:any) {
    this.dialogParams.showDialog = false;
    sessionStorage.setItem('org', event.value);

  }

}
