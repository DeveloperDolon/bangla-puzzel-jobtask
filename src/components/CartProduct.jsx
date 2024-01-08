import { Delete } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AuthContext } from "../contextApi/AuthProvider";

const CartProduct = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(item?.price);
    const {cart, setCart, cartIds, setCartIds} = useContext(AuthContext);

    const handleIncrease = (item) => {
        setQuantity(quantity+1);
        item.quantity = quantity;
        setPrice(price + item?.price);
    }

    const handleDecrease = (item) => {
        if(item.quantity > 1) {
            setQuantity(quantity-1);
            item.quantity = quantity;
            setPrice(price - item?.price);
        }
    }

    const handleRemove = (id) => {
        const newCart = cart?.filter(item => item.id !== id);
        const newCartIds = cartIds?.filter(item => item !== id);
        setCartIds(newCartIds);
        setCart(newCart);
    }

    return (
        <div className='border-2 border-white grid grid-cols-5 rounded-lg relative p-2 gap-5'>
            <div className='col-span-2'>
                <img src={item?.image} className='w-full h-[100px] object-cover rounded-lg' alt="" />
            </div>

            <div className='col-span-3'>
                <h5 className='md:text-lg text-base font-semibold text-white'>{item?.name}</h5>
                <p className='md:text-sm text-xs font-medium text-white'>{item?.price}$/each</p>

                <div className='flex mt-3 items-center'>
                    <button onClick={() => handleDecrease(item)} className='px-[8.5px] py-1 font-bold bg-gray-200 rounded-md'> - </button>
                    <span className='px-4 bg-white md:text-sm text-xs font-semibold py-[2px]'>{quantity}</span>
                    <button onClick={() => handleIncrease(item)} className='px-[6px] py-1 font-bold bg-gray-200 rounded-md'> + </button>
                </div>

                <p className="absolute bottom-1 right-1 md:text-lg text-base font-medium text-white">
                    {price}$
                </p>

                <button onClick={() => handleRemove(item?.id)} className="absolute bg-white text-[#fd5442] -top-2 z-40 px-1 -right-2 rounded-md"><Delete style={{fontSize: "17px"}}></Delete></button>
            </div>
        </div>
    );
};

export default CartProduct;
CartProduct.propTypes = {
    item: PropTypes.object
}