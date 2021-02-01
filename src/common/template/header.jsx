import React from 'react'
import './header.css'
export default props => (
    <header className={'main-header'}>
        <a href={'/#/'} className={'logo'}>
                <b> Books </b>
        </a>
        <nav className={'navbar navbar-static-top'}>
            <a href className={'sidebar-toggle'} data-toggle="offcanvas"></a>
        </nav>
    </header>
)