import { Recipe } from "@/app/lib/definitions";

export async function fetchRecipes(query: string): Promise<Recipe[]> {
    try {
        const baseUrl = 'https://api.edamam.com/api/recipes/v2/';
        const typeVal = 'public';
        const apiUrl = `https://api.edamam.com/api/recipes/v2?type=${typeVal}&q=${query}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}`;  
        console.log(apiUrl);
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const recipes = data.hits.map((hit: any) => hit.recipe); 
        console.log(recipes);
        return recipes as Recipe[];
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
}
    