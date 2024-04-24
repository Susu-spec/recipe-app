import { Recipe } from "@/app/lib/definitions";

export async function fetchRecipes(query: string): Promise<Recipe[]> {
    try {
        const baseUrl = 'https://api.edamam.com/api/recipes/v2/';
        const type = 'public';
        const apiUrl = `https://api.edamam.com/api/recipes/v2?type=${type}&query=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`;  
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
      
       
      // catch (error) {
      //     console.error('Error fetching data:', error); 
      // }
   
      // export async function fetchRecipes(query: string):  Promise<Recipe[] | undefined> {

      //   const baseUrl = 'https://api.edamam.com/api/recipes/v2';
      //   const type = 'public';
      //   const apiUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=4572c917&app_key=7dc799fa659c22e788d04487db930521";

      //   const response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=4572c917&app_key=7dc799fa659c22e788d04487db930521");
      //   if (!response.ok) {
      //     throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      //   }
        
      //   const data = await response.json();
        

