import React, {Component} from 'react'

import { userService } from '../services'

class AdminPage extends Component {

    render(){

        return(
            <div>
                <h1>AdminPage</h1>
                <p>This page can only be accessed by administrators.</p>
            </div>
        )
    }
}

export default AdminPage