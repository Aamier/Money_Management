import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
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

}
