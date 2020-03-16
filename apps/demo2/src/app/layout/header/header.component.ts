import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router';
import * as _ from 'lodash';
import getMenuData from './config';

import styles from '../../../assets/styles';
declare const window: any;

@Component({
	selector: 'nx-monorepo-demo-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
	@Input() title: string;
	activeSubmenu: any = '';
	activeItem: any = '';
	menuData: any = getMenuData() || [];
	primaryColor: any = '#4b7cf3';
	reset: Boolean = true;

	constructor(private router: Router) { }

	ngOnInit() {
		// set active menu items
		this.setActiveItems(this.router.url);
		this.router.events.subscribe((event: Event) => {
			if (event instanceof NavigationEnd) {
				this.setActiveItems(event.url ? event.url : null);
			}
		});

		// init theme
		const mode = window.localStorage.getItem('theme');
		if (mode === 'dark') {
			document.querySelector('body').classList.add('theme__dark');
			window.less.modifyVars(styles.AntDesignDarkTheme);
		} else {
			window.less.modifyVars(styles.AntDesignLightTheme);
		}

		// init primary color
		const color = window.localStorage.getItem('primary');
		if (color) {
			this.selectColor(color);
		}
	}

	switchDarkTheme() {
		if (document.querySelector('body').classList.contains('theme__dark')) {
			document.querySelector('body').classList.remove('theme__dark');
			window.localStorage.setItem('theme', 'light');
			window.less.modifyVars(styles.AntDesignLightTheme);
		} else {
			document.querySelector('body').classList.add('theme__dark');
			window.localStorage.setItem('theme', 'dark');
			console.log(styles.AntDesignDarkTheme)
			window.less.modifyVars(styles.AntDesignDarkTheme);
		}
	}

	setActiveItems(pathname) {
		const menuDatas = this.menuData;
		const flattenItems = (items, key) =>
			items.reduce((flattenedItems, item) => {
				flattenedItems.push(item);
				if (Array.isArray(item[key])) {
					return flattenedItems.concat(flattenItems(item[key], key));
				}
				return flattenedItems;
			}, []);
		this.activeItem =
			_.find(flattenItems(menuDatas, 'children'), ['url', pathname]) || {};
		this.activeSubmenu =
			flattenItems(menuDatas, 'children')
				.map(item => {
					return item.url === pathname ||
						_.find(item.children, ['url', pathname])
						? item
						: null;
				})
				.filter(item => item !== null)[0] || {};
	}

	selectColor(color) {
		const styleElement = document.querySelector('#primaryColor');
		if (styleElement) {
			styleElement.remove();
		}
		window.localStorage.setItem('primary', color);
		const body = document.querySelector('body');
		const styleEl = document.createElement('style');
		const css = document.createTextNode(`:root { --color-primary: ${color};}`);
		styleEl.setAttribute('id', 'primaryColor');
		styleEl.appendChild(css);
		body.appendChild(styleEl);
		this.primaryColor = color;
		this.reset = false;
	}

	resetColor() {
		const defaultColor = '#4b7cf3';
		this.selectColor(defaultColor);
		window.localStorage.removeItem('primary');
		this.primaryColor = defaultColor;
		this.reset = true;
	}
}
