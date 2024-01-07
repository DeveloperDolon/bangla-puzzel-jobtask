import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductsCards = () => {

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
                            <Button variant="contained" sx={{width: "100%", background: "#fd5442"}}>Add To Order</Button>
                            <Button variant="outlined" sx={{width: "100%", color: "#fd5442", border: "2px solid #fd5442", fontWeight: "600"}}>Customize</Button>
                        </div>
                    </Card>)
                }
            </div>
        </Container>
    );
};

export default ProductsCards;