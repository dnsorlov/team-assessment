import React from 'react'
import { Store } from '../state/Store'

import S from './Footer.module.scss'

export default function Footer(){
    const {state} = React.useContext(Store);

    return (
        <div className={S.container}>{state.activeTeam}</div>
    )
}