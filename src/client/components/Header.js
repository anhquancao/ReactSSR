import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log(this.props.auth);
        return (
            <div>
                <Link to="/">React SSR</Link>
            </div>
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);