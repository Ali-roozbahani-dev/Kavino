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
          <div className="flex items-center">
            <div>
              <MobileNavbar categoriesGroup={categoriesGroup} />
            </div>

            <div className="ms-2">
              <CartLink />
            </div>
          </div>

          <div className="w-25">
            <Logo />
          </div>

          <div className="flex">
            <AuthMenu />
          </div>
        </div>              
        
      </div>
    </>
  );
}
