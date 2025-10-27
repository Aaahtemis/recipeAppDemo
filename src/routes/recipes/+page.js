import { json } from "@sveltejs/kit";

export async function load({fetch}){
    const response = await fetch('https://dummyjson.com/recipes')
    const recipes = await response.json();
    return {recipes};
}   