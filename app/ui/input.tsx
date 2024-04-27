'use client';

import { InputRecipeDataProps } from "../lib/definitions";
import { ChangeEvent } from 'react';

export default function InputRecipeData (RecipeProps: InputRecipeDataProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        RecipeProps.onChangeQuery(event);
      };
    
      const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          RecipeProps.onSearch();
        }
      };

   return (
   <form onSubmit={(event) => { event.preventDefault();}} className='w-full lg:w-2/4'>
        <div className="search__input border-[2px] border-slate-500 flex flex-row items-center gap-5 p-1 rounded-[15px]">
            <label htmlFor="searchId"></label>
            <input
                type="text"
                id="searchId"
                placeholder="Enter recipe keyword"
                value={RecipeProps.query}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                className="bg-[transparent] outline-none border-none max-w-xs py-3 pl-2 pr-3"
            />
        </div>
    </form>

   
   )
}