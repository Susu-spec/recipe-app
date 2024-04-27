import TopNav from "./ui/top-bar"
import Loading from "./loading";
import { Suspense } from "react";
import RecipeList from "./ui/recipes";


export default function Home() {
  return (
    <main className=" min-h-screen  items-center justify-between p-24">
      <TopNav />
      <div className="flex flex-col items-center justify-center">
        <div className="mt-10 flex-col flex items-center justify-center">
        <h1 className="text-4xl">Edmama's Recipes</h1>
          <p>Edmama's amazing recipes</p>
          <Suspense fallback={<Loading />}>
            <RecipeList />
          </Suspense>
        </div>
      </div>
      
      
      
    </main>
  );
}
