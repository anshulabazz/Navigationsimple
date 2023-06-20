import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.css']
})
export class SideNavContentComponent implements OnInit {

  navItems = [
    { label: 'Apps', route: '/apps' },
    { label: 'Portfolio', route: '/portfolio' },
    { label: 'Services', route: '/services' }
  ];

  //constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onNavigationSelection(navItem: any) {
    //this.router.navigate([navItem.route]);
  }

}
