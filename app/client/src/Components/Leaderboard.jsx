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
        {uid: 10001, name: "Person A", email: "a@email.com", actions: 20, generations: 15, downloads: 5 },
        {uid: 10002, name: "Person B", email: "b@email.com", actions: 17, generations: 13, downloads: 4 },
        {uid: 10003, name: "Person C", email: "c@email.com", actions: 15, generations: 12, downloads: 3 },
        {uid: 10004, name: "Person D", email: "d@email.com", actions: 9, generations: 7, downloads: 2 },
    ]

    const [actionsArr, setActionsArr] = useState([]);

    let actionsObj = {};
    
    let tempUsersArr = [];
    let usersArr = []; // emails only
    let usersObj = {};

    useEffect(() => {

        const getSnapshot = async () => {
            const querySnapshot = await getDocs(collection(db, "actions"));
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());

                let tempObj = doc.data();

                // populate actions array
                actionsArr.push(tempObj);

                // make temp array -> push all actions' email 
                tempUsersArr.push(tempObj.email);
            });
            console.log(`actionsArr =>`, actionsArr);
            
            // create array of unique emails
            usersArr = tempUsersArr.filter((value, index) => tempUsersArr.indexOf(value) === index);
            console.log(`usersArr`, usersArr);

            // ???


           // create users object
            for (let i=0; i < usersArr.length; i++) {
                usersObj[usersArr[i]] = 
                {
                    name: "",
                    email: usersArr[i],
                    actions: 0,
                    generations: 0,
                    downloads: 0,
                };
            }
            console.log(`usersObj`, usersObj);
        


            // get Name of user


            // get Stats of user


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
                    <th>Actions</th>
                    <th>Generations</th>
                    <th>Downloads</th>
                    </tr>
                </thead>
                <tbody>
                    {usersMock.map((user, index) => (
                    <tr key={user.uid}>
                        <td>{index + 1}</td>
                        <td>{user.name || 'nil'}</td>
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