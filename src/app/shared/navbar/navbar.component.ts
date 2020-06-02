import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UrlModel } from './url.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

    isLogged = false;

  ngOnInit(): void {
    this.isLoggedSystem();
  }

  isLoggedSystem() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.urlAfterRedirects !== UrlModel.LOGIN) {
        console.log('url', event.urlAfterRedirects);
        this.isLogged = true;
      }
    });
  }

  signUp() {
    this.router.navigate(['login']);
  }

}
