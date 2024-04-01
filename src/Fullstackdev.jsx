import React from 'react'
import Card from './Card'

function Fullstackdev({ Input }) {
    const filteredInput = Input.filter(ele => ele.name === "FSD");

    return (<>
        <h1>Full Stack Development</h1>
        <div className="container-sm">
            <div className="row">
                {filteredInput.map((ele, index) => (<Card index={index} title={ele.title} image={ele.image} />))}
            </div>
        </div>
    </>
    )
}

export default Fullstackdev