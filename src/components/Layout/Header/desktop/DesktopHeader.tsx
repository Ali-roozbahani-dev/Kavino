import Logo from "../Logo";
import CartLink from "../CartLink";
import SearchHeader from "@/components/Features/Search/SearchHeader";
import AuthMenu from "../AuthMenu ";

export default function DesktopHeader() {
  return (    
    <div className="px-3 lg:px-17">
      <div className="container-0 py-3  bg-white">
        <div className="flex-between pt-2">
          <div className="flex items-center flex-1">
            <div className="w-35">
              <Logo />
            </div>
            <div className="ms-5 w-130">
              <SearchHeader />
            </div>
          </div>
          <div className="flex">
            <div className="me-3">
              <AuthMenu />
            </div>

            <div>
              <CartLink />
            </div>
          </div>
        </div>
      </div>     
    </div>  
  );
}
