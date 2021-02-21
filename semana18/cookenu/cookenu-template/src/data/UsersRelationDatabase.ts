import { BaseDatabase } from "./BaseDatabase";

export class UsersRelationDatabase extends BaseDatabase {
    private static TABLE_NAME = 'users_relationn';

    public async followUser(userId: string, userToFollowId: string): Promise<void>{
        await this.getConnection()
        .insert({
            user_id: userId,
            user_to_follow_id: userToFollowId
        }).into(UsersRelationDatabase.TABLE_NAME)
    }
}