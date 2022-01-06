import { Picture } from "./picture";
import { Post } from "./post";

export interface User{
    userId: number;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    posts: Post[];
    pictures: Picture[];
}