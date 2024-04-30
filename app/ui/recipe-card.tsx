import { Recipe } from "../lib/definitions";
import Link from "next/link";
import Image from "next/image";
import { lusitana } from "./fonts";


export default function RecipeCard ({ recipe } : { recipe: Recipe }) {
    const { uri, label, cuisineType, dietLabels, mealType,
         image } = recipe;
         const id = uri?.split("#")[1];
        //  getRecipe(id);

    return (
        <Link href={"/recipes/${id}"} className="w-4/5 md:w-[220px]">
            <div className={`mx-auto my-0 rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] bg-gradient-to-r from-stone-700 to-gray-400 text-xs text-shadow text-black ${lusitana.className}`}>
                <Image 
                    src={image!}
                    alt={label!}
                    className="rounded-t-lg h-[200px] md:h-[150px] w-full"
                    width={200}
                    height={0} 
                />
                <div className="mt-1 p-2">
                    <p className="text-white font-semibold">{label}</p>
                </div>
                <div className=" py-2 flex justfy-center items-center">
                    <span className="px-2 pt-1 capitalize rounded-full mr-3 text-yellow-500">
                        <p className="text-white font-semibold">
                            {cuisineType}
                        </p>
                    </span>
                    <span className="px-2 pt-1 capitalize rounded-full mr-3 text-yellow-500">
                        <p className="text-white font-semibold break-words">
                            {mealType}
                        </p>
                    </span>
                </div>
                
            </div>
        </Link>
    )
}


// 