import PropTypes from "prop-types";
import { useState } from "react";

const CartProduct = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(item?.price);

    const handleIncrease = (item) => {
        setQuantity(quantity+1);
        item.quantity = quantity;
        setPrice(price + item?.price);
    }

    const handleDecrease = (item) => {
        if(item.quantity > 2) {
            setQuantity(quantity-1);
            item.quantity = quantity;
            setPrice(price - item?.price);
        }
    }

    return (
        <div className='border-2 border-white grid grid-cols-5 rounded-lg overflow-hidden relative p-2 gap-5'>
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
            </div>
        </div>
    );
};

export default CartProduct;
CartProduct.propTypes = {
    item: PropTypes.object
}