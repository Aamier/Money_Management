import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items!: MenuItem[];
  activeItem!: MenuItem;
  property!: any;
  
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Masjid Booklet', icon: 'pi pi-fw pi-book', routerLink: 'manage'},
      {label: 'Madrasa Booklet', icon: 'pi pi-fw pi-book', routerLink: 'test'}
  ];
  }

}
