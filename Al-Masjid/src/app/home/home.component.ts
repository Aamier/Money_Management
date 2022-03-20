import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuItem } from 'primeng/api';
import { NEVER } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LanguageUtilService } from '../language-util.service';
import { IDialog } from '../Models/generalModel';
import { OrgService } from '../services/org.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message!: string;
  items!: MenuItem[];
  displayBasic = false;
  confirmationDialogData!: IDialog;
  masjidDialogData!: IDialog;
  bookletDialog!: IDialog;
  newReceipt = false;
  newBooklet = false;
  userId!: string | null;
  constructor(private orgService: OrgService, private userService: UserService, private router: Router,private spinner: NgxSpinnerService, 
    private translate: LanguageUtilService, private languageService: TranslateService) { 
    this.userId = sessionStorage.getItem('userId');
  }

  ngOnInit(): void {
    this.languageService.onLangChange.subscribe( s => {
      debugger
      this.items = this.buildMenu();
    });
    this.getInfo();
    this.items = this.buildMenu();
  }

  buildMenu(): MenuItem[] {
    return [
      {
        label: this.languageService.instant("HomeMenu.Receipts"),
        icon: 'pi pi-fw pi-wallet',
        items: [
          {
            label: this.languageService.instant("New"),
            icon: 'pi pi-fw pi-dollar',
            command: (event) => {
              this.newReceipt = true;
            }
          },
          {
            label: this.languageService.instant("HomeMenu.ManageReceipts"),
            icon: 'pi pi-fw pi-list',
            routerLink: 'receipts'
          },
          {
            label: this.languageService.instant("NewBooklet"),
            icon: 'pi pi-fw pi-book',
            command: (event) => {
              this.bookletDialog = {
                message: 'Create Receipts Booklet',
                showDialog: true,
                data: null
              }
              this.newBooklet = true;
            }
          }
        ]
      },
      {
        label: this.languageService.instant("HomeMenu.Payments"),
        icon: 'pi pi-fw pi-dollar',
        items: [
          {
            label: this.languageService.instant("Expense.ManageRequest"),
            icon: 'pi pi-fw pi-dollar',
            "routerLink": 'expense-dashboard'
          },
          {
            label: this.languageService.instant("HomeMenu.ManagePayments"),
            icon: 'pi pi-fw pi-list',
            routerLink: 'expense-dashboard'
          }
        ]
      },
      {
        label: this.languageService.instant("HomeMenu.Ledger"),
        icon: 'pi pi-fw pi-calendar',
      },
      {
        label: this.languageService.instant("Profile"),
        icon: 'pi pi-fw pi-users'
      }
    ];
  }

  getInfo() {
    if(this.userId === null) {
      this.spinner.show();
      this.userService.userMe().pipe(switchMap((res: any) => {
        sessionStorage.setItem('userId', res.id);
        return this.orgService.getMasjidByOrg(res.org);
      })).subscribe((success: any) => {
          this.masjidDialogData = {
            message: '',
            showDialog: true,
            data: success
          }
          this.spinner.hide();
        }
      );
    }
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

  event_recieptSaved(value: boolean) {
    this.newReceipt = false;
  }

  event_createBooklet(value:boolean) {
    this.newBooklet = false;
  }

  changeLanguage() {
    this.translate.changeLanguage();
  }

}
