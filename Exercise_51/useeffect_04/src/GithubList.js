import React, {useState, useEffect} from 'react';
import { GitHubUser } from './GitHubUser';

export function GithubList({usersDetails = []}){
    const [users, setUsers] = useState(usersDetails);

    const handleSubmittedUsers = (event) => {
        const inputValue = event.target.value;

        setUsers(users.push(inputValue));

        console.log(users);
    }
    
    return (
        <div>
            <input name="username" placeholder="Please, insert your username..." onChange={handleSubmittedUsers} />
            <button type="submit">Submit</button>
         </div>
    )

}