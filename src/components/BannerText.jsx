import { ArrowForwardIos } from "@mui/icons-material";
import Container from "@mui/material/Container";


const BannerText = () => {
    return (
        <Container maxWidth="lg">
            <h1 className="pt-8 md:text-5xl text-3xl text-center uppercase text-[#fd5442] font-medium flex items-center justify-center">Chicken Crisper<span className="md:text-7xl text-5xl">&#174;</span> Combos</h1>          

            <p className="text-center md:text-lg text-base flex items-center justify-center py-3">
                <span className="md:text-base text-sm text-[#fd5442] pr-3">Menu</span> <ArrowForwardIos style={{fontSize: "20px", marginRight: "8px"}}></ArrowForwardIos>
                Chicken Crisper<span className="">&#174; Combos</span> Combos
            </p>  

            <p className="text-center md:text-xl text-lg font-medium pt-2">
                Find everything from our Big Mouth Burgers&#174;, our always sizzling, Full-on Fajitas and our famous Chicken Crispers&#174;
            </p>
        </Container>
    );
};

export default BannerText;