import React from 'react'

const ProfileCard = (props) => { // props = { name, lastname, phone, address } // informacion de solo lectura
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text"> <i className="bi bi-person"></i> {props.name} {props.lastname}</p>
                <p className="card-text"> <i className="bi bi-telephone"></i> {props.phone}</p>
                <p className="card-text"> <i className="bi bi-geo"></i> {props.address}</p>
            </div>
        </div>
    )
}

export default ProfileCard