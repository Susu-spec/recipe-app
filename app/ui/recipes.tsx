'use client';

import InputRecipeData from '@/app/ui/input'

export default function RecipeList () {
    return (
        <div className='w-full'>
            <div className='w-full flex items-center pt-10 pb-5 justify-center'>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                    }}
                 className='w-full lg:w-2/4'>
                    <InputRecipeData />
                </form>
            </div>
        </div>
    );
}