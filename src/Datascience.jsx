import React from 'react'
import Card from './Card'

function Datascience({ Input }) {
    const filteredInput = Input.filter(ele => ele.name === "DS");

    return (<>
        <h3>Data Science</h3>
        <div className="container-sm">
            <div className="row">
                {filteredInput.map((ele, index) => (<Card index={index} title={ele.title} image={ele.image} />))}
            </div>
        </div>
    </>
    )
}

export default Datascience