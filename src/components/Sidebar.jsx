import React from 'react'
import { Store } from '../state/Store'
import { CSSTransition } from 'react-transition-group'
import {selectTeam, toggleSidebar} from "../state/Actions";
import cn from 'classnames'

import S from './Sidebar.module.scss'


export default function Sidebar(){
    const { state: { teams, activeTeam, showSidebar }, dispatch } = React.useContext(Store);
    const handleOverlayClick = () => toggleSidebar(dispatch);

    return (
        <div className={S.container}>

            <CSSTransition in={showSidebar} unmountOnExit timeout={500} classNames="bar">
                <div className={S.bar}>
                    <div className={S.header}>Choose the team</div>
                    <ul className={S.list}>
                        {Object.keys(teams).map( ( v, i ) =>
                            <li key={i}
                                className={ cn( S.item, { [S.activeItem]: activeTeam===v } ) }
                                onClick={()=>selectTeam(v, dispatch)}
                            >
                                <div className={S.itemIcon}>{v[0]}</div>
                                <div className={S.itemName}>{v}</div>
                            </li>
                        )}
                    </ul>
                </div>
            </CSSTransition>

            <CSSTransition in={showSidebar} unmountOnExit timeout={500} classNames="overlay">
                <div className={S.overlay} onClick={handleOverlayClick}/>
            </CSSTransition>

        </div>
    )
}