"use client";
import { useState, useEffect } from 'react';
import { Recipe } from "@/app/lib/definitions";
import { useParams, useSearchParams } from 'next/navigation';
import { fetchRecipe, fetchRecipes } from '@/app/api/recipe';
import { styleScript, lusitana } from "@/app/ui/fonts";
import RecipeCard from '@/app/ui/recipe-card';

export default function RecipeDetail () {
  const searchParams = useSearchParams();
    const { id }  = useParams();
    const query = searchParams.get("query");
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [recipes, setRecipes ] = useState([] as Recipe[]);
    // const [ limit, setLimit ] = useState(30)
  
    const getRecipe = async(id: string | string[]) => {
        try {
            console.log(id);
            const fetchedRecipe = await fetchRecipe(id);
            
            setRecipe(fetchedRecipe);
            console.log(recipe);
            const recommend = await fetchRecipes({ query: query, limit: 5 })
            setRecipes(recommend);
          }   
        
        catch (error) {
            console.error("Error fetching recipe data: ", error);
            throw error;
        }
    }

    useEffect(() => {
      getRecipe(id);
    }, [id])

    return (
      <div className='min-h-screen items-center justify-between w-4/5 mx-auto my-0'>
        <h1 className={`flex flex-col items-center flex-wrap w-4/5 mx-auto my-0 mt-10 text-white text-4xl antialiased ${styleScript.className}`}>{recipe?.label}</h1>
      <div className='w-full px-4 lg:px-20 pt-5'>

        <div className='flex gap-10 items-center justify-center px-4'>
          <div className='flex flex-col justify-between'>
            <span className='text-white text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2'>{recipe?.calories} </span>

            <p className='text-neutral-100 text-[12px] md:text-md'>CALORIES</p>
          </div>

          <div className='flex flex-col justify-center'>
            <span className='text-white text-center border border-gray-500 py-1.5 rounded-full mb-2'>
              {recipe?.totalTime}
            </span>
            <p className='text-neutral-100 text-[12px] md:text-md'>
              TOTAL TIME
            </p>
          </div>

          <div className='flex flex-col justify-center'>
            <span className='text-white text-center border border-gray-500 py-1.5 rounded-full mb-2'>
              {recipe?.yield}
            </span>
            <p className='text-neutral-100 text-[12px] md:text-md'>SERVINGS</p>
          </div>


        </div>

        <div className='w-full flex flex-col md:flex-row gap-8 py-20 pxx-4 md:px-10'>
          {/* LEFT SIDE */}
          <div className='w-full md:w-2/4 md:border-r border-slate-800 pr-1'>
            <div className='flex flex-col gap-5'>
              <p className={`text-green-500 text-bold text-2xl underline antialiased ${lusitana.className}`}>Ingredients</p>

              {
                recipe?.ingredientLines?.map((ingredient, index) => {
                  return (
                    <p key={index} className={`text-neutral-100 flex gap-2 antialiased ${lusitana.className}`}> {ingredient}</p>
                  )
                })
              }
            </div>

            <div className='flex flex-col gap-3 mt-20'>
              <p className={`text-green-500 text-bold text-2xl underline antialiased ${lusitana.className}`}>Health Labels</p>

              <div className='flex flex-wrap gap-4 p-4 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]'>
                {
                  recipe?.healthLabels.map((item, index) => (
                    <p className={`text-black flex gap-2 bg-[#fff5f518]  px-4 py-1 rounded-full antialiased ${lusitana.className}`} key={index}>{item}</p>
                  ))
                }

              </div>
            </div>
          </div>


          {/* RIGHT SIDE */}
          <div className='w-full md:w-2/4 2xl:pl-10 mt-20 md:mt-0'>
            {
              recipes?.length > 0 && (
                <>
                  <p className={`text-white text-2xl antialiased ${lusitana.className}`}>Also Try This</p>

                  <div className='flex flex-wrap gap-6 px-1 pt-3'>
                    {
                      recipes?.map((item, index) => (
                        <RecipeCard recipe={item} key={index} />
                      ))
                    }
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
    )
}