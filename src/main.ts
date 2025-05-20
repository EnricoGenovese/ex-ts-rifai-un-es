import type { Chef, Recipe } from "./types";
import dayjs from 'dayjs';


function isChef(data: unknown): data is Chef {
  if (typeof data === 'object' && data !== null) {
    return 'id' in data && 'firstName' in data && 'birthDate' in data;
  }
  return false;
}

function isRecipe(data: unknown): data is Recipe {
  if (typeof data === 'object' && data !== null) {
    return 'id' in data && 'userId' in data && 'name' in data;
  }
  return false;
}

const baseUrl = 'https://dummyjson.com'

async function getChefBirthDay(id: number): Promise<string | null> {
  try {
    const recipeRes = await fetch(`${baseUrl}/recipes/${id}`);
    if (!recipeRes.ok) {
      throw new Error(`HTTP error ${recipeRes.status}: ${recipeRes.statusText}`)
    }
    const recipeData: unknown = await recipeRes.json(); 
    if (!isRecipe(recipeData)) {
      throw new Error('Invalid recipe data structure');
    }

    const userRes = await fetch(`${baseUrl}/users/${recipeData.userId}`);
    if (!userRes.ok) {
      throw new Error(`HTTP error ${userRes.status}: ${userRes.statusText}`)
    }
    const userData: unknown = await userRes.json();
    if (!isChef(userData)) {
      throw new Error('Invalid chef data structure');
    }

    return dayjs((userData as Chef).birthDate).format('DD/MM/YYYY');
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Error while getting data: ${error.message}`)
    } else {
      console.error(`Unknown error: ${error}`)
    }
    return null;
  }
}

(async () => {
  try {
    const data = await getChefBirthDay(7)
    console.log('Il compleanno dello chef è il:', data)
  } catch (error) {
    console.error(error)
  } finally {
    console.log('Did it work?')
  }
})();