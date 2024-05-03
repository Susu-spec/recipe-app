'use client';
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import { fetchRecipes } from '../api/recipe';
import InputRecipeData from '@/app/ui/input';
import { Recipe } from "../lib/definitions";
import RecipeCard from '@/app/ui/recipe-card';

export default function RecipeList () {
    const router = useRouter();
    const [ query, setQuery ] = useState('');
    const [ recipes, setRecipes ] = useState([] as Recipe[]);
    const [ limit, setLimit ] = useState(30);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value  = event.target.value;
        setQuery(value);
    }

    const handleSearch = async () => {
        if (query.trim() !== '') {
            try {
                const fetchedRecipes = await fetchRecipes({ query, limit });
                setRecipes(fetchedRecipes);
                
                console.log('Recipes state after setting:', fetchedRecipes);
                

            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        }
        else {
            router.push('/');
            
        }
    }

    const showMore = () => {
        setLimit(prev => prev + 10)
        handleSearch()
    }
    

    return (
        <div className='w-full'>
            <div className='w-full flex mt-5 mb-3 justify-center'>
                <InputRecipeData query={query} onSearch={handleSearch} onChangeQuery={handleChange} />
            </div>
            <div className="w-full">
                {recipes?.length > 0 ? (
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full flex flex-wrap justify-center items-center gap-10 px-0 lg:px-10 py-10">
                        {recipes.map((item, index) => (
                            <RecipeCard recipe={item} key={index} />
                        ))}
                    </div> 
                </div>
                ) : (
                    <div className="text-black w-full items-center justify-center py-10">
                    <p className="text-center">No Recipe Found</p>
                    </div>
                )}
                </div>
        </div>
    );
}   