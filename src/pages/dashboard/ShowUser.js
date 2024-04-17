import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ShowUser = ({ user, setReload, reload }) => {
    const makeAdmin = () => {
        const data = {
            role: 'admin',
        };
        const url = `https://manufacturer-website-server-side-0oju.onrender.com/user/${user.email}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Congratulations');
                setReload(!reload);
            });
    }
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.role}</td>
            <td>
                {
                    user.role !== 'admin' ? <button onClick={makeAdmin} className='btn btn-sm'>Make Admin</button> : ''
                }
            </td>
            <ToastContainer></ToastContainer>
        </tr>

    );
};

export default ShowUser;