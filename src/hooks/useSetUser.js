import { useEffect, useState } from "react"

const useSetUser = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = {
            role: '',
        };
        if (email) {
            const url = `http://localhost:5000/user/${email}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(result => setToken(true));
        }
    }, [user]);
    return [token];
}
export default useSetUser;