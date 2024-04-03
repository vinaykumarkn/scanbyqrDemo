import logo from './logo.svg';
import './App.css';
import './common/css/tailwind.min.css';
import { Routes, Route } from "react-router-dom";


// import './common/css/materialdesignicons.min.css';


import Navbar from './components/Header/navbar';
import Footer from './components/Footer/footer';
import Container from './components/Home/container';


import AboutUs from './components/Common/aboutus';
import OurServices from './components/Common/ourservices';
import TermsandCondition from './components/Common/termsandconditions';
import Blog from './components/Common/blog';
import ContactUs from './components/Common/aboutus';
import OurPolicy from './components/Common/ourpolicy';
import Comingsoon from './components/Account/comingsoon';
import Properties from './components/Common/properties';
import Promoter from './components/Common/promoters';
import PropertyPost from './components/Common/propertypost';
import Signin from './components/Account/signin';
import Signup from './components/Account/signup';
import Resetpassword from './components/Account/resetpassword';
import Twostepverfication from './components/Account/twostepverfication';
import Undermaintenance from './components/Account/undermaintenance';
import Error from './components/Account/error';

import PageNotFound from './components/Common/pagenotfound';

function App() {
  return (
    <div className="App page-wrapper">

      <main className="page-content bg-gray-50 dark:bg-slate-800">
        <Navbar /> 

        <div className="container-fluid relative px-0">
          <div className="layout-specing">
          <Routes>
          <Route exact path="/" element={<Container />} />          
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Properties" element={<Properties />} />
          <Route path="/Promoters" element={<Promoter />} />
          <Route path="/PropertyPost" element={<PropertyPost />} />          
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/TermsandCondition" element={<TermsandCondition />} />
          <Route path="/OurPolicy" element={<OurPolicy />} />
          <Route path="/Comingsoon" element={<Comingsoon />} />
          <Route path="/Undermaintenance" element={<Undermaintenance />} /> 
          <Route path="/Error" element={<Error />} /> 
          {/* <Route path="/login" element={<Signin />} /> */}
          <Route path="/User/Signup" element={<Signup />} /> 
          <Route path="/User/Signin" element={<Signin />} /> 
          <Route path="/User/Resetpassword" element={<Resetpassword />} /> 
          <Route path="/User/Twostepverfication" element={<Twostepverfication />} />        
          <Route path="*" element={<PageNotFound />} />           
        </Routes>
           </div>  
        </div>  
       
        <Footer />
      </main>

    </div>
  );
}

export default App;
