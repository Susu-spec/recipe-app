import { ChangeEvent } from "react";
export type Recipe = {
    uri?: string,
    image?: string,
    label?: string,
    cuisineType?: string[],
    dietLabels?: string[],
    mealType?: string[]
}

export type InputRecipeDataProps = {
    query: string;
    onSearch: () => void;
    onChangeQuery: (event: ChangeEvent<HTMLInputElement>) => void;
}