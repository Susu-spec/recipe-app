import TopNav from "./ui/top-bar"
import Loading from "./loading";
import { Suspense } from "react";
import RecipeList from "./ui/recipes";


export default function Home() {
  return (
    <main className=" min-h-screen  items-center justify-between max-w-prose">
      <TopNav />
      <div className=" flex items-center font-bold justify-center">
        <h1 className="text-xl">Edmama's Recipes</h1>
        
      </div>
      <div className="mt-10 flex-col flex items-center justify-center">
      <p>Edmama's amazing recipes</p>
      <Suspense fallback={<Loading />}>
          <RecipeList />
        </Suspense>
      </div>
      
      
    </main>
  );
}
