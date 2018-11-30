import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../Homepage/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-homepage',
  templateUrl: './customer-homepage.component.html',
  styleUrls: ['./customer-homepage.component.scss']
})
export class CustomerHomepageComponent implements OnInit, OnDestroy {

  userisAuthenticated = false;
  userID: string;
  private authSub: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userisAuthenticated = isAuthenticated;
      this.userID = this.authService.getUserID();
  });
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }

}
