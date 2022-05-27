import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [userInDb, setUserInDb] = useState({});
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [linkedIn, setLinkedId] = useState('');
    const [facebook, setFacebook] = useState('');

    const getName = (e) => {
        setName(e.target.value);
    };
    const getAddress = (e) => {
        setAddress(e.target.value);
    };
    const getPhone = (e) => {
        setPhone(e.target.value);
    };
    const getLinkedIn = (e) => {
        setLinkedId(e.target.value);
    };
    const getFacebook = (e) => {
        setFacebook(e.target.value);
    };

    useEffect(() => {
        fetch(`https://floating-tundra-63405.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserInDb(data));
    }, [user, userInDb])

    const updateUser = () => {
        const data = {
            name: name,
            address: address,
            phone: phone,
            linkedIn: linkedIn,
            facebook: facebook,
        };
        const url = `https://floating-tundra-63405.herokuapp.com/user/${user.email}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                setUserInDb(result);
                toast('Profile Updated');
            });
    };
    return (
        <div>
            <div className='lg:flex lg:items-center'>
                <div className='w-32 h-32 bg-green-400 rounded-full mr-6 mb-6'>
                    <img src="" alt="" />
                </div>
                <div>
                    <h1 className='text-3xl'>{userInDb.name}</h1>
                    <h2 className='text-md mt-4'><span className='font-bold mr-2'>Email: </span><span className='text-blue-400'>{user.email}</span></h2>
                    <h2 className='text-md mb-4'><span className='font-bold mr-2'>Phone:</span> {userInDb.phone}</h2>
                </div>
            </div>
            <div>
                <p className='mb-4'><span className='font-bold text-lg lg:text-xl'>Address: </span><br></br><span className='text-gray-500'>{userInDb.address}</span></p>
                <div className='mb-6'>
                    <p className='font-bold text-lg'>LinkedIn Profile</p>
                    <a className='text-blue-400' target='blank' href={userInDb.linkedIn}>{userInDb.linkedIn}</a>
                </div>
                <div>
                    <p className='font-bold text-lg'>Facebook Profile</p>
                    <a className='text-blue-400' target='blank' href={userInDb.facebook}>{userInDb.facebook}</a>
                </div>
            </div>
            <div>
                <label for="my-modal-6" class="btn btn-outline btn-accent mt-8 btn-sm modal-button">Update Profile</label>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute top-2 right-2">x</label>
                        <div class="form-control w-full max-w-xs">
                            <label class="label"><span class="label-text">Your Name</span></label>
                            <input onChange={getName} type="text" class="input input-bordered w-full max-w-xs" value={userInDb.name} />
                            <label class="label"><span class="label-text">Your Address</span></label>
                            <input onChange={getAddress} type="text" class="input input-bordered w-full max-w-xs" value={userInDb.address} />
                            <label class="label"><span class="label-text">Your Phone Number</span></label>
                            <input onChange={getPhone} className="input input-bordered w-full max-w-xs appearance-none" type="number" value={userInDb.phone} />
                            <label class="label"><span class="label-text">LinkedIn profile link</span></label>
                            <input onChange={getLinkedIn} type="text" class="input input-bordered w-full max-w-xs" value={userInDb.linkedIn} />
                            <label class="label"><span class="label-text">Facebook profile link</span></label>
                            <input onChange={getFacebook} type="text" class="input input-bordered w-full max-w-xs" value={userInDb.facebook} />
                        </div>
                        <div class="modal-action">
                            <label onClick={updateUser} for="my-modal-6" class="btn btn-outline btn-accent btn-sm">Update</label>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyProfile;