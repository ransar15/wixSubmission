import React, { useState } from 'react'
import classes from './styles.module.scss';

export interface IMenuItemProps {
	text?: string;
	addChildrenMenuItem: (child: React.ReactElement<IMenuItemProps>) => void;
}

export const MenuItem = (props: IMenuItemProps) => {
	const [ text, setText ] = useState<string>(props.text || '');
	const [children, setChildren] = useState<typeof MenuItem[]>([]);
	return (<div>
	</div>)
}