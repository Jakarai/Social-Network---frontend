import { Picture } from "./picture";
import { User } from "./user";

export interface Post{
    postId: number;
    submitted: any;
    content: string;
    picture: Picture[];
    user: User;
}