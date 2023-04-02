import React from 'react'
import {  signOut, useSession } from 'next-auth/react'

const account = () => {
    const {data: session ,status} = useSession({ required:true});
    if(status=== 'authenticated')
    {
        return (
            <div>
                <p>Welcome {session.user.name}</p>
                <button onClick={()=>signOut()}> SignOut</button>
            </div>
        )
    }
    else
    {
        return (
            <div>
                <p>You are not signed in </p>
            </div>
        )
    }

}

export default account;

