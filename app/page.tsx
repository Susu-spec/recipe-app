import Loading from "./loading";
import { Suspense } from "react";
import RecipeList from "./ui/recipes";
import { styleScript } from "./ui/fonts";




export default function Home() {
  return (
    <main className=" min-h-screen  items-center justify-between p-12">
      {/* <TopNav /> */}
      {/* <div className="absolute w-full mx-0 my-0">
        <Image 
          src="/burger-mobile.avif"
          alt="Picture of burger"
          width={800}
          height={800}
          />
      </div> */}
      <div className="flex flex-col items-center justify-center">
        <div className="mt-10 flex-col flex items-center justify-center">
        <h1 className={`flex flex-col flex-wrap w-4/5 mx-auto my-0 text-white text-3xl antialiased ${styleScript.className}`}>Edmama's Recipes</h1>
          <Suspense fallback={<Loading />}>
            <RecipeList />
          </Suspense>
        </div>
      </div> 
    </main>
  );
}
