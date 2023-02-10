import React, { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { getAuth } from "firebase/auth";

const Leaderboard = () => {
    const { user } = UserAuth();
    const auth = getAuth();
    console.log(`auth`, auth);
    console.log(`currentUser`, auth.currentUser);

    let usersMock = [
        {uid: 10001, displayName: "Person A", email: "a@email.com", actions: 20, generations: 15, downloads: 5 },
        {uid: 10002, displayName: "Person B", email: "b@email.com", actions: 17, generations: 13, downloads: 4 },
        {uid: 10003, displayName: "Person C", email: "c@email.com", actions: 15, generations: 12, downloads: 3 },
        {uid: 10004, displayName: "Person D", email: "d@email.com", actions: 9, generations: 7, downloads: 2 },
    ]

    useEffect(() => {

        // https://firebase.google.com/docs/auth/admin/manage-users#list_all_users
        const listAllUsers = (nextPageToken) => {
            // List batch of users, 1000 at a time.
            // getAuth()
            //     .listUsers(1000, nextPageToken)
            //     .then((listUsersResult) => {
            //         listUsersResult.users.forEach((userRecord) => {
            //         console.log('user', userRecord.toJSON());
            //         });
            //         if (listUsersResult.pageToken) {
            //         // List next batch of users.
            //         listAllUsers(listUsersResult.pageToken);
            //         }
            //     })
            //     .catch((error) => {
            //         console.log('Error listing users:', error);
            //     });
        };
        // Start listing users from the beginning, 1000 at a time.
        listAllUsers();
    }, []);
  return (
    <div className="container">
        <h1>Leaderboard 🏆</h1>
        <h2>Top generatooors</h2>
        <div className="container">
            <table>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    {/* <th>Email</th> */}
                    <th>Actions</th>
                    <th>Generations</th>
                    <th>Downloads</th>
                    </tr>
                </thead>
                <tbody>
                    {usersMock.map((user, index) => (
                    <tr key={user.uid}>
                        <td>{index + 1}</td>
                        <td>{user.displayName || '-'}</td>
                        {/* <td>{user.email}</td> */}
                        <td>{user.actions}</td>
                        <td>{user.generations}</td>
                        <td>{user.downloads}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div>
            You: {user.displayName}
        </div>
    </div>
  )
}

export default Leaderboard