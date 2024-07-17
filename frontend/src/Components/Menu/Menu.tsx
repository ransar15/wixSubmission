import React, { useState } from 'react'
import { IMenuItemProps, MenuItem } from '../MenuItem/MenuItem';
import classes from './styles.module.scss';

interface IMenuProps {

}

export const Menu = (props: IMenuProps) => {
	const addChildToMenuItems = (element: React.ReactElement<IMenuItemProps>) => {
		setMenuItems(prevMenuItems => [...prevMenuItems, element])
	}

	const [menuItems, setMenuItems] = useState<React.ReactElement<IMenuItemProps>[]>([
		<MenuItem text='Initial' addChildrenMenuItem={addChildToMenuItems}/>
	]);

	return (<div>
		{
			menuItems.map((component, index) => (
				<div key={index}>{component}</div>
			))
		}
	</div>)
}