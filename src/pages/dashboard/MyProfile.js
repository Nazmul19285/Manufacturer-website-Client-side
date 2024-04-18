import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [userInDb, setUserInDb] = useState({});
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [linkedIn, setLinkedId] = useState();
    const [facebook, setFacebook] = useState();
    const [reload, setReload] = useState(false);
    const [reloadUser, setReloadUser] = useState(false);

    const imgbbApiKey = '40aba2d8cab92ff9f201339a847d5ef6';

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
        fetch(`https://manufacturer-website-server-side-0oju.onrender.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInDb(data);
                setReload(true);
            });
    }, [user, reloadUser]);

    if (reload) {
        setName(userInDb.name);
        setAddress(userInDb.address);
        setPhone(userInDb.phone);
        setLinkedId(userInDb.linkedIn);
        setFacebook(userInDb.facebook);
        setReload(false);
    };

    const uploadImage = () => {
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const data = {
                    image: result.data.url,
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
                    .then(uploadedPic => {
                        setReloadUser(!reloadUser);
                        toast('Picture Uploaded');
                    });
            }
        })

    }


    const updateUser = () => {
        const data = {
            name: name,
            address: address,
            phone: phone,
            linkedIn: linkedIn,
            facebook: facebook,
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
                setUserInDb(result);
                setReloadUser(!reloadUser);
                toast('Profile Updated');
            });
    };
    return (
        <div>
            <div className='lg:flex lg:items-center'>
                <div>
                    <div className='w-32 h-32 bg-green-400 rounded-full mr-6 mb-6'>
                        <img className='rounded-full' src={userInDb.image} alt="" />
                    </div>
                    <label for="my-modal" className="btn btn-xs modal-button">Change Picture</label>
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <div className='flex justify-between'>
                                <input onChange={(e) => setImage(e.target.files[0])} type="file" />
                                <label for="my-modal" className="btn btn-sm btn-circle">x</label>
                            </div>
                            <div className="modal-action">
                                <label onClick={uploadImage} for="my-modal" className="btn btn-sm mt-6">Upload</label>
                            </div>
                        </div>
                    </div>
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
                <label for="my-modal-6" className="btn btn-outline btn-accent mt-8 btn-sm modal-button">Update Profile</label>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label for="my-modal-6" className="btn btn-sm btn-circle absolute top-2 right-2">x</label>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Your Name</span></label>
                            <input onChange={getName} type="text" className="input input-bordered w-full max-w-xs" value={name} />
                            <label className="label"><span className="label-text">Your Address</span></label>
                            <input onChange={getAddress} type="text" className="input input-bordered w-full max-w-xs" value={address} />
                            <label className="label"><span className="label-text">Your Phone Number</span></label>
                            <input onChange={getPhone} className="input input-bordered w-full max-w-xs appearance-none" type="number" value={phone} />
                            <label className="label"><span className="label-text">LinkedIn profile link</span></label>
                            <input onChange={getLinkedIn} type="text" className="input input-bordered w-full max-w-xs" value={linkedIn} />
                            <label className="label"><span className="label-text">Facebook profile link</span></label>
                            <input onChange={getFacebook} type="text" className="input input-bordered w-full max-w-xs" value={facebook} />
                        </div>
                        <div className="modal-action">
                            <label onClick={updateUser} for="my-modal-6" className="btn btn-outline btn-accent btn-sm">Update</label>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default MyProfile;