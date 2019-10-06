import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {
	NbMediaBreakpointsService,
	NbMenuService,
	NbSidebarService,
	NbThemeService
} from '@nebular/theme';
import {Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {UserService} from "../../../@core/mock/user.service";
import {LayoutService} from "../../../@core/utils/layout.service";

@Component({
	selector: 'app-boot-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	providers: [
		UserService
	]
})
export class HeaderComponent implements OnInit, OnDestroy {
	userPictureOnly: boolean = false;
	user: any;
	themes = [
		{
			value: 'default',
			name: 'Light'
		},
		{
			value: 'dark',
			name: 'Dark',
		},
		{
			value: 'cosmic',
			name: 'Cosmic',
		},
		{
			value: 'corporate',
			name: 'Corporate',
		},

	];
	currentTheme = 'default';
	userMenu = [
		{title: 'Profile'},
		{title: 'logout'}
	];
	private destroy$: Subject<void> = new Subject<void>();

	constructor(private  sidebarService: NbSidebarService,
	            private menuService: NbMenuService,
	            private themeService: NbThemeService,
	            private userService: UserService,
	            private layoutService: LayoutService,
	            private breakpointService: NbMediaBreakpointsService,
	            private router:Router
	) {
	}

	ngOnInit() {

		this.currentTheme = this.themeService.currentTheme;
		this.userService.getUsers().pipe(takeUntil(this.destroy$))
			.subscribe((users: any) => this.user = users.nick);
		const {xl} = this.breakpointService.getBreakpointsMap();
		this.themeService.onMediaQueryChange()
			.pipe(
				map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
				takeUntil(this.destroy$),
			)
			.subscribe(
				(isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

		this.themeService.onThemeChange()
			.pipe(
				map(({name}) => name),
				takeUntil(this.destroy$),
			)
			.subscribe(themeName => this.currentTheme = themeName);
		this.menuService.onItemClick().subscribe(m => {
			console.log(m.item.title);
			if (m.item.title == "Profile") {
				this.router.navigate(['/pages/profile']);
			} else if (m.item.title == "logout") {
				// TODO:用户退出,重定向到主页
				this.userService.logout().subscribe(m => console.log(m));
			}
		})
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}

	changeTheme(themeName: string) {
		this.themeService.changeTheme(themeName)
	}

	toggleSidebar(): boolean {
		this.sidebarService.toggle(true, 'menu-sidebar');
		this.layoutService.changeLayoutSize();
		return false;
	}

	navigateHome() {
		this.menuService.navigateHome();
		return false;
	}

}
