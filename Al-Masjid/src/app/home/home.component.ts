import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { NEVER, never } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IConfirmationDialog } from '../Models/generalModel';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message!: string;
  items!: MenuItem[];
  displayBasic = false;
  confirmationDialogData!: IConfirmationDialog;
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.items = [
      {
          label:'Receipts',
          icon:'pi pi-fw pi-wallet',
          items:[
              {
                  label:'New',
                  icon:'pi pi-fw pi-dollar'
              },
              {
                  label:'Manage Receipts',
                  icon:'pi pi-fw pi-list'
              }
          ]
      },
      {
          label:'Payments',
          icon:'pi pi-fw pi-dollar',
          items:[
            {
              label:'New',
              icon:'pi pi-fw pi-dollar'
          },
          {
              label:'Manage Payments',
              icon:'pi pi-fw pi-list'
          }
          ]
      },
      {
          label:'Ledger',
          icon:'pi pi-fw pi-calendar',
      },
      {
          label:'Profile',
          icon:'pi pi-fw pi-users'
      }
  ];
    this.getInfo();
  }

  getInfo() {
    this.authService.userMe().pipe(switchMap((res: any) => {
      return this.authService.getMasjidByOrg(res.org);
    } )).subscribe(
      (success: any) => {
        console.log('est', success);
      }
    );
  }

  showBasicDialog() {
    this.confirmationDialogData = {
      message: "Are you sure you want to signoff",
      showDialog: true
    }
}

eventConfirmation(value: boolean) {
  value === true ? this.logout() : NEVER;
}

  logout() {
    this.router.navigateByUrl('');
  }

}
