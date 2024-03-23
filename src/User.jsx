import React from 'react'
import Card from './Card'

function User({ Input }) {
    return (<>
        <h1>User</h1>
        <div className="container-sm">
            <div className="row">
                {Input.map((ele, index) => (<Card index={index} title={ele.title} image={ele.image} />))}
            </div>
        </div>
    </>
    )
}

export default User