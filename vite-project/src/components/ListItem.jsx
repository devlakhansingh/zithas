import React from 'react'

const ListItem = ({ item }) => {
    return (
        <>
            <li className="list-group-item mt-5">
                name : {item.name}
                <br />
                email : {item.email}

                <button className="btn btn-danger float-end">
                    delete
                </button>
            </li>
        </>
    )
}

export default ListItem
