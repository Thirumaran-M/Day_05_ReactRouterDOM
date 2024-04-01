import React from 'react'
import Card from './Card'

function Home({Input}) {
    
    return (<>
        <h3>All</h3>
        <div className="container-sm">
            <div className="row">
                    {Input.map((ele, index) => (<Card index={index} title={ele.title} image={ele.image}/>))}
            </div>
        </div>
    </>
    )
}

export default Home