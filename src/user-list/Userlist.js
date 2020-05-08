import React, {PureComponent} from 'react'
import User from '../user/User';
import './Userlist.css'

export default class Userlist extends PureComponent {
    render() {
        console.log("render called....");
        return (
            <li className='user-list'>
                {this
                    .props
                    .userlist
                    .map((user) => <User key={user._id} {...user}/>)}
            </li>
        )
    }
}