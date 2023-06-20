import { Component, HostListener } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header_var = false
  constructor(private navService: NavigationService) { }
  @HostListener("document:scroll")
  scrollfunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop>10) {
      this.header_var = true
    }
    else {
      this.header_var=false
    }
  }
  toggleSideNav() {
    this.navService.setShowNav(true);
  }
}
