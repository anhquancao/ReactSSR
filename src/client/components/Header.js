import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Link to="/">React SSR</Link>
            </div>
        );
    }
}

export default Header;