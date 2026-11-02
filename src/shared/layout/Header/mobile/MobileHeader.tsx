import Logo from "../Logo";
import CartLink from "../CartLink";
import MobileNavbar from "../NavbarHeader/MobileNavbar";
import { TCategoriesGroup } from "../desktop/Categories/utils/categorizeCategories";
import AuthMenu from "../AuthMenu";


export default function MobileHeader({
  categoriesGroup,
}: {
  categoriesGroup: TCategoriesGroup;
}) {
 

  return (
    <>
      <div className="container-0 py-3 px-2">
        <div className="flex-between">
          
          <div className="flex">
              <div>
                <MobileNavbar categoriesGroup={categoriesGroup} />
              </div>

              <div className="ms-1 md:ms-2">
                <CartLink />
              </div>
          </div>

          <div className="w-30">
            <Logo />
          </div>

          <div className="flex justify-end min-w-[50px]">
            <AuthMenu />
          </div>
        </div>              
        
      </div>
    </>
  );
}
