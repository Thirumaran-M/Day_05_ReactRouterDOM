import React from 'react'
import Card from './Card'

function Cybersecurity({ Input }) {
    const filteredInput = Input.filter(ele => ele.name === "CS");

    return (<>
        <h1>Cyber Security</h1>
        <div className="container-sm">
            <div className="row">
                {filteredInput.map((ele, index) => (<Card index={index} title={ele.title} image={ele.image} />))}
            </div>
        </div>
    </>
    )
}

export default Cybersecurity