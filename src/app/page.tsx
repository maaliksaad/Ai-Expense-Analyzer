import LandingPage from "@/components/landingPage";
import { currentUser } from "@clerk/nextjs/server";
import Dashboard from "./dashboard/page";

export default async function Home() {
  const user = await currentUser();
  if (!user) {
    return <LandingPage />;
  }
  return (
    <>
      <Dashboard />
    </>
  );
}
