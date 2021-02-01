import React from 'react'
import MenuItem from './menuItem.jsx'


export default props => (
    <ul className={'sidebar-menu'}>
        <MenuItem path={'#'} label={'Books'} icon={'book'}></MenuItem>
    </ul>
)