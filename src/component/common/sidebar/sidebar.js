import React, { useState, useEffect } from "react";
import { MENUITEMS } from "./menu";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const [mainmenu, setMainMenu] = useState(MENUITEMS);

	useEffect(() => {
		const currentUrl = window.location.pathname;

		mainmenu.filter((items) => {
			if (items.path === currentUrl) setNavActive(items);
			if (!items.children) return false;
			items.children.filter((subItems) => {
				if (subItems.path === currentUrl) setNavActive(subItems);
				if (!subItems.children) return false;
				subItems.children.filter((subSubItems) => {
					if (subSubItems.path === currentUrl) {
						setNavActive(subSubItems);
						return true;
					} else {
						return false;
					}
				});
				return subItems;
			});
			return items;
		});
		// eslint-disable-next-line
	}, []);

	const setNavActive = (item) => {
		MENUITEMS.filter((menuItem) => {
			if (menuItem !== item) menuItem.active = false;
			if (menuItem.children && menuItem.children.includes(item))
				menuItem.active = true;
			if (menuItem.children) {
				menuItem.children.filter((submenuItems) => {
					if (submenuItems.children && submenuItems.children.includes(item)) {
						menuItem.active = true;
						submenuItems.active = true;
						return true;
					} else {
						return false;
					}
				});
			}
			return menuItem;
		});
		item.active = !item.active;
		setMainMenu({ mainmenu: MENUITEMS });
	};

	const toggletNavActive = (item) => {
		if (!item.active) {
			MENUITEMS.forEach((a) => {
				if (MENUITEMS.includes(item)) a.active = false;
				if (!a.children) return false;
				a.children.forEach((b) => {
					if (a.children.includes(item)) {
						b.active = false;
					}
					if (!b.children) return false;
					b.children.forEach((c) => {
						if (b.children.includes(item)) {
							c.active = false;
						}
					});
				});
			});
		}
		item.active = !item.active;
		setMainMenu({ mainmenu: MENUITEMS });
		document
			.querySelector(".iconsidebar-menu")
			.classList.remove("iconbar-mainmenu-close");
	};

	return (
		<div className="iconsidebar-menu">
			<div className="sidebar custom-scrollbar">
				<ul className="iconMenu-bar custom-scrollbar">
					<li className={`left-arrow ${"d-none hideLeftArrowRTL"}`}>
						<i className="fa fa-angle-left"></i>
					</li>
					{MENUITEMS.map((menuItem, i) => (
						<li className={`${menuItem.active ? "open" : ""}`} key={i}>
							{menuItem.tag}
							<Link
								className="bar-icons"
								to={menuItem.path}
								onClick={() => toggletNavActive(menuItem)}
							>
								{menuItem.icon}
								<span>{menuItem.title}</span>
							</Link>
						</li>
					))}
					<li className={`right-arrow ${"d-none hideRightArrowRTL"}`}>
						<i className="fa fa-angle-right"></i>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
