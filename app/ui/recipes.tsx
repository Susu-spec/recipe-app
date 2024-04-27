'use client';
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import { fetchRecipes } from '../api/recipe';
import InputRecipeData from '@/app/ui/input';
import { Recipe } from "../lib/definitions";
import RecipeCard from '@/app/ui/recipecard';


export default function RecipeList () {
    const router = useRouter();
    const [ query, setQuery ] = useState('');
    const [ recipes, setRecipes ] = useState([] as Recipe[]);


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value  = event.target.value;
        setQuery(value);
    }

    const handleSearch = async () => {
        if (query.trim() !== '') {
            try {
                const fetchedRecipes = await fetchRecipes(query);
                setRecipes(recipes => [...recipes, ...fetchedRecipes]);

                
                console.log('Recipes state after setting:', fetchedRecipes);
                // console.log(Object.keys(recipes).length)
                // if (Object.keys(recipes).length !== 0) {
                //     console.log('Fetched recipes: ', recipes);
                // }

            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        }
        else {
            router.push('/');
            
        }
    }

    return (
        <div className='w-full'>
            <div className='w-full flex items-center mt-5 mb-3 justify-center'>
                <InputRecipeData query={query} onSearch={handleSearch} onChangeQuery={handleChange}/>
            </div>
            <div>
            <div className="w-full">
                {recipes?.length > 0 ? (
                    <div className="w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10">
                    {recipes.map((item, index) => (
                        <RecipeCard recipe={item} key={index} />
                    ))}
                    </div>
                ) : (
                    <div className="text-white w-full items-center justify-center py-10">
                    <p className="text-center">No Recipe Found</p>
                    </div>
                )}
                </div>
        </div>
    </div>
    );
}   