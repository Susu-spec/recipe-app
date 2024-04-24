import { Recipe } from "@/app/lib/definitions"

export async function fetchRecipes(query: string): Promise<Recipe[]> {
    try {
        const baseUrl = 'https://api.edamam.com/api/recipes/v2/';
        const type = 'public';
        const apiUrl = `https://api.edamam.com/api/recipes/v2?type=${`type`}&query=${`query`}&app_id=${`process.env.APP_ID`}&app_key=${`process.env.APP_KEY`}`;

        
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        setTimeout(() => {
            console.error('Error fetching data:', error);
          }, 3000);
      }
   
}

function CheckError(response : any) {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  }