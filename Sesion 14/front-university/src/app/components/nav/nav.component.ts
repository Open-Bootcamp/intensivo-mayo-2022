import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuItem } from 'src/app/types/MenuItem.type';
import { MenuIcons } from 'src/app/types/MenuIcons';
import { AppRoutes } from 'src/app/routes/AppRoutes';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  drawMenu: boolean = false;

  menuList: MenuItem[] = [
    {
      text: "Students",
      icon: MenuIcons.STUDENTS,
      route: AppRoutes.STUDENTS
    },
    {
      text: 'Courses',
      icon: MenuIcons.COURSES,
      route: AppRoutes.COURSES
    },
    {
      text: 'Categories',
      icon: MenuIcons.CATEGORIES,
      route: AppRoutes.CATEGORIES
    },
    {
      text: 'Logout',
      icon: MenuIcons.LOGOUT,
      route: AppRoutes.LOGOUT
    }
  ];


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private _storageService: StorageService) {}

}
