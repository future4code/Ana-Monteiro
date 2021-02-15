import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase{
    private static TABLE_NAME = 'Recipess';

    public async createRecipe(recipe_id: string, user_id: string, title: string, description: string, createdAt: number) : Promise<void>{
        await this.getConnection()
        .insert({
            recipe_id,
            user_id,
            title,
            description,
            createdAt
        }).into(RecipeDatabase.TABLE_NAME)
    }
}