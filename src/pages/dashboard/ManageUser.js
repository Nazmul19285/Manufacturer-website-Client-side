import React, { useEffect, useState } from 'react';
import ShowUser from './ShowUser';

const ManageUser = () => {
    const [users, setUsers] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        fetch('https://floating-tundra-63405.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [reload])
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className=''>Name</th>
                            <th className=''>Email</th>
                            <th className=''>Phone</th>
                            <th className=''>Role</th>
                            <th className=''></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <ShowUser key={user._id} user={user} setReload={setReload} reload={reload}></ShowUser>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageUser;