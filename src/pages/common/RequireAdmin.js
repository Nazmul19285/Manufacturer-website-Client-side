import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";


const RequireAdmin = ({ children }) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    if(!user){
        navigate("/reserve");
    };
    if(user){
        fetch(`https://manufacturer-website-server-side-0oju.onrender.com/user/${user.email}`)
        .then(res => res.json())
        .then(data => {
            if(data.role !== 'admin'){
                navigate("/reserve");
            }
        });
    };
    
    
    return children;
};

export default RequireAdmin;