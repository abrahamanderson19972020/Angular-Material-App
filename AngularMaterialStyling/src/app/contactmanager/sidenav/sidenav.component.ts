import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  isScreenSmall: boolean = false;
  isDarkTheme: boolean = false;
  users: User[] = [];
  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
    this.getAllUsers();
    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav?.close();
      }
    });
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(
      (res) => {
        this.users = res;
        console.log(this.users);
      },
      (error) => {
        console.log('Failed to fetch users');
      }
    );
  }
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
