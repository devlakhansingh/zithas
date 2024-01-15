import React, { useEffect } from 'react'
import ListItem from './ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { getZithas } from '../Features/ZithasSlice'


const UserList = () => {

    const { datass } = useSelector(state => state.zithas)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getZithas())
    }, [])


    return (
        <>
            <div className="container ">
                <div className="text-center">
                    <h1 style={{ color: "blue" }}> See User Who subscribe US </h1>
                </div>
                <ul className="list-group">
                    {
                        datass.map(item => <ListItem key={item._id} item={item} />)
                    }
                </ul>
            </div>
        </>
    )
}

export default UserList
