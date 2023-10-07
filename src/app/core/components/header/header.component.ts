import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goTOLogin() {
    {
      this.router.navigate(['/login'], {});
    }
  }

  goToHome() {
    {
      this.router.navigate(['/home'], {});
    }
  }
}
