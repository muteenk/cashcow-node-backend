import { ObjectId } from "mongoose";

export interface ICreateFamilyGroup{
    name: string,
    description: string,
    members: string[],
    category: string,
    admins: string[]
}
