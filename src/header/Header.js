import React, {PureComponent} from 'react'
import './Header.css';

export default class Header extends PureComponent {
    render() {
        return (
            <header className='header'>
                <h1 className='logo'>User List</h1>
                <nav className='nav'>
                    <span className='nav-item'>About</span>
                    <span className='nav-item'>Contact</span>
                </nav>
            </header>
        )
    }
}