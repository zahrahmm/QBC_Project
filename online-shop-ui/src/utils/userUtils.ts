import type {User} from "../models/User.ts";
import {users} from "../data/users.ts";

export function removeUser(target: User) {
    users.filter(user => {return user !== target})
}

export function editUsername(user: User) {

}

export function editEmail(user: User) {

}