import React from 'react'
import { badgesArr } from '../constants';

const BadgesUser = () => {

    const badges = badgesArr.map((e, i) => {
        const data = {
            name: e.name,
            stat: e.stat,
            count: e.count,
            description: e.description,
            image: e.image,
        }
        // console.log(`data`, data)
        return (
            <div key={i}>
                <h3>{data.name}</h3>
                <h4>{data.description}</h4>
                <img className="badge-icons" src={data.image}></img>
                {/* <p>{data.count}: {data.stat}</p> */}
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