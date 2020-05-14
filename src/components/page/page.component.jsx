import React from 'react';

import "./page.style.scss";

class Page extends React.Component{
    render() {
        return(
            <div className='page'>
                {this.props.children}
            </div>
        )
    }
}

export default Page;