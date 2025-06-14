import {User} from "../models/User.ts";

const user1 = new User("Ali", "ali@gmail.com", "pass", true);
const user2 = new User("Sina", "ali@gmail.com", "pass", false);
const user3 = new User("Armin", "ali@gmail.com", "pass", true);
const user4 = new User("Aylin", "ali@gmail.com", "pass", false);
const user5 = new User("Mahdi", "ali@gmail.com", "pass", true);

export const users = [user1, user2, user3, user4, user5];


