import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
  masjidDialogData!: IConfirmationDialog;
  newReceipt = false;
  constructor(private authService: AuthService, private router: Router,private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
    this.items = [
      {
        label: 'Receipts',
        icon: 'pi pi-fw pi-wallet',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-dollar',
            command: (event) => {
              this.newReceipt = true;
            }
          },
          {
            label: 'Manage Receipts',
            icon: 'pi pi-fw pi-list'
          }
        ]
      },
      {
        label: 'Payments',
        icon: 'pi pi-fw pi-dollar',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-dollar'
          },
          {
            label: 'Manage Payments',
            icon: 'pi pi-fw pi-list'
          }
        ]
      },
      {
        label: 'Ledger',
        icon: 'pi pi-fw pi-calendar',
      },
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-users'
      }
    ];
    this.getInfo();
  }

  getInfo() {
    this.spinner.show();
    this.authService.userMe().pipe(switchMap((res: any) => {
      sessionStorage.setItem('userId', res.id);
      return this.authService.getMasjidByOrg(res.org);
    })).subscribe((success: any) => {
        this.masjidDialogData = {
          message: '',
          showDialog: true,
          data: success
        }
        console.log('est', success);
        this.spinner.hide();
      }
    );
  }

  showconfirmationDialog() {
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
