import { Recipe } from "../lib/definitions";
import Link from "next/link";
import Image from "next/image";

export default function RecipeCard ({ recipe } : { recipe: Recipe }) {
    const { uri, label, cuisineType, dietLabels, mealType,
         image } = recipe;
         const id = uri?.split("#")[1];

    return (
        <Link href={"/recipes/${id}"} className="w-4/5 md:w-[220px]">
            <div  className="mx-auto my-0 from-yellow-300 shadow text-xs">
                <Image 
                    src={image!}
                    alt={label!}
                    className="rounded-lg h-[200px] md:h-[150px] w-full"
                    width={200}
                    height={0} 
                />
                <div className="p-2">
                    <p className="text-white font-semibold">{label}</p>
                </div>
                <div className="mt-2 flex justfy-center items-center">
                    <span className="px-2 py-1 capitalize rounded-full mr-3 text-yellow-500">
                        <p className="text-white font-semibold">
                            {cuisineType}
                        </p>
                    </span>
                    <span className="px-2 py-1 capitalize rounded-full mr-3 text-yellow-500">
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