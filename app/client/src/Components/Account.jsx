import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Account = () => {

    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    } 

  return (
    <div className="container">
        <h1>Dashboard 🧙‍♀️</h1>
        <h2>Welcome, {user?.displayName}!</h2>
        {/* nullish coalescing operator; check if `user` is null before accessing `displayName` property */}
        <button onClick={handleSignOut}>Logout</button>
    </div>
  )
}

export default Account