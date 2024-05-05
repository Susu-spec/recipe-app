import RecipeList from "./ui/recipes";
import { styleScript } from "./ui/fonts";

export default function Home() {
  return (
    <main className=" min-h-screen items-center justify-between">
      <div className="mt-10 flex flex-col justify-center">
        <div className="mt-10 flex-col flex items-center justify-center">
        <h1 className={`flex flex-col items-center flex-wrap w-4/5 mx-auto my-0 text-white text-3xl antialiased ${styleScript.className}`}>Edmama's Recipes</h1>
          <RecipeList />
        </div>
      </div>
    </main>
  );
}
