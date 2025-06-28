import EditUsersTableHeader from "./editUsersTableHeader.tsx";
import EditUsersTableBody from "./editUsersTableBody.tsx";

const EditUsersTable = () => {
    return (
        <table className="w-full border-collapse">
            <EditUsersTableHeader />
            <EditUsersTableBody />
        </table>
    )
}



export default EditUsersTable;