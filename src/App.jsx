import BannerText from "./components/BannerText"
import PrimarySearchAppBar from "./components/NavBars"
import ProductsCards from "./components/ProductCards/ProductsCards"


function App() {

  return (
    <div className="pb-32">
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <BannerText></BannerText>
      <ProductsCards></ProductsCards>
    </div>
  )
}

export default App
