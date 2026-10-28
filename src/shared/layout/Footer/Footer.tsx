import Lists from "./DesktopLists";
import FeaturesSection from "./FeaturesSection";
import ScrollToTop from "./ScrollToTop";
import MobileLists from "./MobileLists";



export default function Footer(){

    

    return (
        <footer className="container-0 px-3">
            <FeaturesSection />
            <div className="bg-theme-2 text-white rounded-t-lg">
                <div className="lg:hidden">
                    <MobileLists />
                </div>

                <div className="hidden lg:block">
                    <Lists />
                </div>

                <div className="h-px w-full bg-white mt-10 xl:mt-5"></div>

                <div className="py-4 relative">
                    <ScrollToTop />
                    <p 
                    className="text-center text-[12px] md:text-[13px] lg:text-[14px]">
                    تمامی حقوق این وب سایت متعلق به خانه کالا  میباشد  .
                    </p>
                </div>
            </div>            
        </footer>
    )
}