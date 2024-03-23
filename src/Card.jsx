import React from 'react'

function Card({ title, image }) {
    return (
        <div className="col-sm-3">
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{image}</h5>
                    <p className="card-text">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Card