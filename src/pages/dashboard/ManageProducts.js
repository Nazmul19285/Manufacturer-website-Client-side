import { useNavigate } from 'react-router-dom';
import taka from '../../images/taka.png'

const ManageProducts = ({ product, setReload, reload }) => {
    const navigate = useNavigate();

    const update = () => {
        navigate(`/products/${product._id}`);
    }
    const deleteProduct = () => {
        const proceed = window.confirm('You want to delete. Are you sure?');
        if (proceed) {
            const url = `https://manufacturer-website-server-side-0oju.onrender.com/products/${product._id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => setReload(!reload));
        }
    }
    return (
        <div className='border w-[22rem] mx-auto mb-4 lg:mb-0 relative rounded-lg'>
            <div className='flex justify-center'>
                <img src={product.img} alt={product.name} />
            </div>
            <div className='px-4 h-72'>
                <h1 className='italic text-lg font-[1000] uppercase'>{product.name}</h1>
                <div className='flex items-center'>
                    <img className='w-4 h-full mr-1' src={taka} alt="" />
                    <h2 className='text-lg'>{product.price} (Per unit)</h2>
                </div>
                <p className='text-sm mt-2'>{product.description}</p>
                <h3 className='mt-2'>Available quantity: {product.available_quantity}</h3>
                <h3 className='mt-2'>Minimum order quantity: {product.minimum_order}</h3>
            </div>
            <div className='mx-8 absolute bottom-4 flex'>
                <button onClick={update} className='btn btn-outline btn-sm'>Update</button>
                <button onClick={deleteProduct} className='btn btn-outline btn-sm ml-32'>Delete</button>
            </div>
        </div>
    );
};

export default ManageProducts;