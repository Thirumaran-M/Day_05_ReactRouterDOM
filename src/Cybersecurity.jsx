import React from 'react'
import Card from './Card'

function Cybersecurity({ Input }) {
    const filteredInput = Input.filter(ele => ele.name === "CS");

    return (<>
        <h3 class="h3">Cyber Security</h3>
        <div className="container-sm">
            <div className="row">
                {filteredInput.map((ele, index) => (<Card index={index} title={ele.title} image={ele.image} />))}
            </div>
        </div>
    </>
    )
}

export default Cybersecurity