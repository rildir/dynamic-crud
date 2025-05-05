import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NzLayoutModule, NzMenuModule, RouterLink, RouterOutlet, NzIconModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit, OnDestroy {
  isCollapsed = false;
  url: string = '';
  private routerSubscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.url = this.capitalizeFirstLetter(this.router.url.replace('/', ''));
  
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = this.capitalizeFirstLetter(event.urlAfterRedirects.replace('/', ''));
      }
    });
  }
  
  capitalizeFirstLetter(text: string): string {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}