import React from 'react'
import { Store } from '../state/Store'
import {toggleSidebar} from "../state/Actions";

import S from './Header.module.scss'

export default function Header(){
    const {state:{activeTeam}, dispatch} = React.useContext(Store);
    const handleHeaderClick = () => toggleSidebar(dispatch);

    return (
        <div className={S.container} onClick={handleHeaderClick}>
            <div className={S.itemIcon}>{activeTeam[0]}</div>
            <div className={S.itemName}>{activeTeam}</div>
        </div>
    )
}