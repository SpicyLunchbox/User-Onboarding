import React from 'react'

export default function UserCards(props) {
    const { user } = props

    if (!user) {
        return <h3>Fetching your Users...</h3>
    }

    return (
        <div className="user container">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
    )
}