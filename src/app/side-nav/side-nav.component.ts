import { Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/navigation.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  showSideNav!: Observable<boolean>;

  @Input() sidenavTemplateRef: any;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  @Input() direction = 'left';

  constructor(private navService: NavigationService) { }

  ngOnInit(): void {
    this.showSideNav = this.navService.getShowNav();
  }
  onSidebarClose() {
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: any) {
    let navBarStyle: any = {};

    navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : (this.navWidth * -1)) + 'px';

    return navBarStyle;
  }

}
