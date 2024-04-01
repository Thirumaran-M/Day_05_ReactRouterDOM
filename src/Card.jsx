import React from 'react'

function Card({ title, image }) {
    return (
        <div className="col-sm-3">
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title"><img src={image} width={250} height={150}/></h5>
                    <p className="card-text"><b>{title}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Card