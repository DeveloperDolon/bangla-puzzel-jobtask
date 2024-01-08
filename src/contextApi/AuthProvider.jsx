import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartIds, setCartIds] = useState([]);
    const [open, setOpen] = useState(false);

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const foodsItems = [
        {
            "id": "1",
            "name": "Chicken Fry",
            "image": "https://images.unsplash.com/photo-1626082896492-766af4eb6501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fHww",
            "price": 50,
            "description": "Crispy, golden chicken fry with a flavorful blend of spices,tender on the inside and irresistibly delicious -a perfect balance of crunch and taste."
        },
        {
            "id": "2",
            "name": "Chicken fajitas",
            "image": "https://media.istockphoto.com/id/507532058/photo/mexican-grilled-chicken-fajitas-in-iron-skillet.jpg?s=612x612&w=0&k=20&c=kiYNoqQFc3-qAVV4VYYc0qSKKExzCBBf1qv4a1X-BH4=",
            "price": 250,
            "description": "Sizzling chicken fajitas: Juicy grilled chicken, vibrant bell peppers, and onions, wrapped in warm tortillas. A zesty fiesta of flavors in every bite!"
        },
        {
            "id": "3",
            "name": "Chicken Masala",
            "image": "https://media.istockphoto.com/id/1093661590/photo/traditional-indian-dish-chicken-tikka-masala-with-spicy-curry-meat-in-bowl-basmati-rice-bread.jpg?s=612x612&w=0&k=20&c=DCwxqEciOTaN14A13ym6F4p2UnprhNarn7OwIaOLNNo=",
            "price": 450,
            "description": "Savory chicken masala:Succulent pieces in a rich,aromatic blend of spices and tomatoes.Indian flavors that tantalize the taste buds."
        }
    ]

    const toggleDrawer = (anchor) => (event) => {

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        
        if(event?.target?.parentNode?.offsetParent?.id === "cart-btn" || event?.target?.id === "cart-btn" || event?.target?.parentNode?.parentNode?.offsetParent?.id === "cart-btn") {
            setOpen(!open);
            return setState({ ...state, [anchor]: !open });
        }

        if(event?.target?.id === "close-btn") {
            setOpen(false);
            return setState({ ...state, [anchor]: false });
        }
        
        if(event?.target?.id === "add-to-cart") {
            setOpen(true);
            return setState({ ...state, [anchor]: true });
        }
    };

    useEffect(() => {
        const cartItems = foodsItems.filter(item => {
            if (cartIds.includes(item?.id)) {
                return item;
            }
        });

        setCart(cartItems);
    }, [cartIds]);


    const sharedData = {
        cart,
        setCart,
        cartIds,
        setCartIds,
        foodsItems,
        open,
        setOpen,
        toggleDrawer,
        state, 
        setState
    }


    return (
        <AuthContext.Provider value={sharedData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}