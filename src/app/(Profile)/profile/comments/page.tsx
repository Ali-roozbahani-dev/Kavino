import { PageTitle } from "@/Features/User_Profile";
import UserReviews from "@/Features/User_Profile/reviews/UserReviews";
import { MessageSquare } from "lucide-react";


export default function CommentsPage() {
  return (
    <section className="space-y-5">
      <PageTitle>
        <div className="bg-white py-5 lg:p-5">
            <div className="flex items-center gap-4">
              <div
                className={"hidden lg:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"}
              >  
              <MessageSquare strokeWidth={1.8} size={25} />             
              </div>
      
              <div>
                <h1 className="text-[15px] md:text-xl font-bold">نظرات من</h1>
              </div>
            </div>
          </div>        
      </PageTitle>
      <UserReviews />
    </section>
  );
}