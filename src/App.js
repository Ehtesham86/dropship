import './App.css';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import ArticleSection from './Pages/ArticleSection/ArticleSection';
import ProductCards from './Pages/Card/Card';
import CustomerReviews from './Pages/CustomerReview/CustomerReview';
import DiscoverProducts from './Pages/DiscoverProduct/DiscoverProduct';
import DropshipSpyTools from './Pages/DropShip/DropShip';
import Industry from './Pages/Industry/Industry';
import JoinMerchants from './Pages/Merchant/Merchant';
import Product from './Pages/Product/Product';
import SaleTraker from './Pages/SaleTraker/SaleTraker';
import Seller from './Pages/Seller/seller';
import ShopifyTracker from './Pages/Shopfy/Shopfy';
import Signup from './Pages1/Signup/Signup';
import SignIn from './Pages1/Singin/Signin';


function App() {
  return (
    <div className="App">
      <SignIn/>
     <Header/>
      <Signup/>
      <DiscoverProducts/>
      <Seller/>
      <Product/>
      <ShopifyTracker/>
      <DropshipSpyTools/>
      <SaleTraker/>
      <ProductCards/>
      <JoinMerchants/>
      <Industry/>
      <CustomerReviews/>
      <ArticleSection/>
      <Footer/>  
    </div>
  );
}

export default App;
