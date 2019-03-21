import React from 'react'
import { Store } from '../state/Store'

import S from './List.module.scss'

export default function List(){
    const {state} = React.useContext(Store);
    console.log(state);
    return (
        <ul className={S.list}>
            {state.teams[state.activeTeam].map( ( v, i ) =>
                <li key={i} className={S.item}>
                    <div className={S.name}>{v.name}</div>
                    <div className={S.description}>{v.description}</div>
                </li>
            )}
        </ul>
    )
}