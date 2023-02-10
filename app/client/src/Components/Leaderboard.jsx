import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
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

    const [actionsArr, setActionsArr] = useState([]);

    let usersObj = {};
    let actionsObj = {};

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

        const getSnapshot = async () => {
            const querySnapshot = await getDocs(collection(db, "actions"));
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());

                actionsArr.push(doc.data());
            });
            console.log(`actionsArr =>`, actionsArr);

            for (let i=0; i < actionsArr.length; i++) {
                usersObj[actionsArr[i].email] = actionsArr[i].name;
            }
            console.log(`usersObj =>`, usersObj);

            for (let i=0; i < actionsArr.length; i++) {
                actionsObj[actionsArr[i].timestamp.seconds] = 
                {
                    name: actionsArr[i].name,
                    email: actionsArr[i].email,
                    action: actionsArr[i].action,
                    type: actionsArr[i].type,
                    path: actionsArr[i].path,
                    prompt: actionsArr[i].prompt,
                    timestamp: actionsArr[i].timestamp
                };
            }
            console.log(`actionsObj =>`, actionsObj);

        }
        getSnapshot();

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
            {user ? (<p>You: {user?.displayName || "-"}</p>) : ( <></>)}
            
        </div>
    </div>
  )
}

export default Leaderboard