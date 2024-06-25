import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
  <div className="h-[110vh] flex items-center justify-center">
    <SignUp />;
  </div> 
  );
}