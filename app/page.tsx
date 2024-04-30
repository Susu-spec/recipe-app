import Loading from "./loading";
import { Suspense } from "react";
import RecipeList from "./ui/recipes";
import { styleScript } from "./ui/fonts";
import Footer from "@/app/ui/footer";

export default function Home() {
  return (
    <main className=" min-h-screen items-center justify-between">
      {/* <TopNav /> */}
      <div className="mt-10 flex flex-col justify-center">
        <div className="mt-10 flex-col flex items-center justify-center">
        <h1 className={`flex flex-col items-center flex-wrap w-4/5 mx-auto my-0 text-white text-3xl antialiased ${styleScript.className}`}>Edmama's Recipes</h1>
          <Suspense fallback={<Loading />}>
            <RecipeList />
          </Suspense>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
