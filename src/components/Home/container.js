import "./container.css";

import Totalcount from "./totalcount"
import Whatwedo from "./whatwedo"
import Topnews from "./topnews"
import Ourteam from "./ourteam"
import Feedback from "./feedback"
import Homebanner from "./homebanner"

import totalcounts_Json from "../../mockData/totalcount.json";
import Whatwedo_Json from "../../mockData/whatwedo.json";
import Ourteam_Json from "../../mockData/ourteam.json";
import Topnews_Json from "../../mockData/topnews.json";
import Feedback_Json from "../../mockData/feedback.json";



const container = () => {
    return (
        // <!-- container  -->
            <>              
                    {/* <!-- Start Content --> */}
                   <Homebanner />
                    <Totalcount  items={totalcounts_Json}  />
                    <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">                        
                        <Whatwedo  items={Whatwedo_Json}   />
                        <Topnews  items={Topnews_Json} />
                    </div>

                    <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
                        <Ourteam  items={Ourteam_Json} />
                        <Feedback  items={Feedback_Json}/>
                    </div>
                    {/* <!-- End Content --> */}
                  {/* <Marquee  items={Marquee_Json}/>  */}
            </>
            // {/* <!--end container--> */}
    );
};
export default container;


// import Signin from "../Account/signin"
// <Signin  />

// import Signup from "../Account/signup"
// <Signup  />

// import Resetpassword from "../Account/resetpassword"
// <Twostepverfication  />

// import Twostepverfication from "../Account/twostepverfication"
// <Twostepverfication  />

// import Comingsoon from "../Account/comingsoon"
// <Comingsoon  />


// import Undermaintenance from "../Account/undermaintenance"
// <Undermaintenance  />


//  import Error from "../Account/error"
// <Error  />