import UserRow from "./UserRow.tsx";
import {users} from "../../data/users.ts";

const EditUsersTableBody = () => {
    return (
        <tbody>
        {
            users.map((user) => (
                <UserRow user={user} key={user.getId} />
            ))
        }
        </tbody>
    )
}
export default EditUsersTableBody;