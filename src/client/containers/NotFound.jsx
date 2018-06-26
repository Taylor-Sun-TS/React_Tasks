import React from 'react'
import { connect } from 'react-redux'

class NotFound extends React.Component {

    render() {
        return (
            <p>404 Not found</p>
        )
    }
}

export default connect()(NotFound)