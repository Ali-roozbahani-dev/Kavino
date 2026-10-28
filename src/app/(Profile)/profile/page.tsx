import { SectionContainer, UserInformation } from "@/Features/User_Profile";
import Stats from "@/Features/User_Profile/ui/dashboard/Stats";


export default function DashboardPage(){

    return (
        <>
        <SectionContainer>
            <div className="space-y-6">
                <Stats />
                
                <UserInformation />
            </div>
        </SectionContainer>
        </>
    )
}