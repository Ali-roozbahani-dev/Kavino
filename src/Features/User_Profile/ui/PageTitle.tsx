import { ProfileRootLink } from "./navigation/ProfileRootLink";


export function PageTitle({children} : {children: React.ReactNode}){


    return(
        <div className="flex items-center gap-x-2">
            <div className="lg:hidden">
            <ProfileRootLink />
            </div>
            <h1 className="text-lg font-bold text-gray-900">
              {children}
            </h1>
        </div>
    )
} 