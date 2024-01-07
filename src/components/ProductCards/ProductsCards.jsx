import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";

const ProductsCards = () => {
    const {cartIds, setCartIds, foodsItems, toggleDrawer} = useContext(AuthContext);

    const handleAddToCart = (item) => {
        setCartIds([...cartIds, item]);
        toggleDrawer("right");
    }

    return (
        <Container maxWidth="lg">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-10">

                {
                    foodsItems?.map(item => <Card sx={{ background: "#ebedef" }} key={item?.id}>
                        <div className="p-4">
                            <CardMedia
                                sx={{ height: 160, borderRadius: "8px" }}
                                image={item?.image}
                                title="green iguana"
                            />
                        </div>

                        <CardContent>
                            <Typography gutterBottom variant="h5" sx={{pb: "0px", lineHeight: "13px"}} fontWeight={600} component="div">
                                {item?.name}
                            </Typography>
                            <p className="md:text-xl text-lg font-medium pb-3">
                                {item?.price}$/each
                            </p>
                            <Typography variant="body2" sx={{textAlign: "justify"}} color="text.secondary">
                               {item?.description}
                            </Typography>
                        </CardContent>

                        <div className="p-4 space-y-4">
                            {
                                cartIds?.includes(item?.id) ? <Button disabled variant="contained" sx={{width: "100%", background: "#fd5442"}}>Added To Cart</Button> : <span onClick={toggleDrawer("right")} ><Button onClick={() => handleAddToCart(item?.id)} variant="contained" sx={{width: "100%", background: "#fd5442"}}>Add To Order</Button></span>
                            }
                            
                            <Button variant="outlined" sx={{width: "100%", color: "#fd5442", border: "2px solid #fd5442", fontWeight: "600"}}>Customize {item?.id}</Button>
                        </div>
                    </Card>)
                }
            </div>
        </Container>
    );
};

export default ProductsCards;