'use client';
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import { Recipe } from "@/app/lib/definitions"
import { fetchRecipes } from '../api/recipe';

export default function InputRecipeData () {
    const router = useRouter();
    const [ query, setQuery ] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const value  = event.target.value;
        setQuery(value);
    }

    const handleSearch = async () => {
        if (query.trim() !== '') {
            try {
                const recipes = await fetchRecipes(query);
                console.log(Object.keys(recipes).length)
                if (Object.keys(recipes).length !== 0) {
                    console.log('Fetched recipes: ', recipes);
                }

            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        }
        else {
            router.push('/');
            
        }
    }

   
   

   return (
    <div className="search__input border-[2px] border-slate-500 flex flex-row items-center gap-5 p-1 rounded-[15px]">
       <label htmlFor="searchId">search</label>
       <input type="text"
            id="searchId"
            placeholder="Enter recipe keyword"
            value={query} onChange={handleChange}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
            }}
            className="bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3" 
            />
    </div>
   
   )
}