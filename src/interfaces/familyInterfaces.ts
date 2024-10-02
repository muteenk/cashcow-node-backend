import { ObjectId } from "mongoose";

export interface ICreateFamilyGroup{
    name: string,
    description: string,
    members: ObjectId[],
    category: string,
    admins: string[]
}
