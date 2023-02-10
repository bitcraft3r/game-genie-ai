import React from 'react'
import { badgesArr } from '../constants';

const BadgesUser = ({ userBadge1, userBadge2, userBadge3 }) => {

    console.log(userBadge1, userBadge2, userBadge3);
    console.log(badgesArr[0].count, badgesArr[1].count, badgesArr[2].count);

    let result1 = false;
    let result2 = false;
    let result3 = false;
    if (userBadge1 >= badgesArr[0].count) result1 = true;
    if (userBadge2 >= badgesArr[1].count) result2 = true;
    if (userBadge3 >= badgesArr[2].count) result3 = true;

    const badges = badgesArr.map((e, i) => {

        let tempBool = false;
        if (i === 0) tempBool = result1;
        else if (i === 1) tempBool = result2;
        else if (i === 2) tempBool = result3;

        const data = {
            name: e.name,
            stat: e.stat,
            count: e.count,
            description: e.description,
            image: e.image,
        }
        // console.log(`data`, data)
        return (
            <div>   
                {userBadge1 === undefined 
                    ?
                    <div key={i}>
                        <h3>{data.name}</h3>
                        <h4>{data.description}</h4>
                        <img className="badge-icons" src={data.image}></img>
                    </div> 
                    : 
                    (tempBool 
                        ? 
                        <div key={i}>
                            <h3>{data.name}</h3>
                            <h4>{data.description}</h4>
                            <img className="badge-icons" src={data.image}></img>
                        </div>
                        : 
                        <></> 
                    )
                }  
            </div>
        )
    })

    return (
        <div className="container-badges">
            {badges}
        </div>
    )
}

export default BadgesUser;