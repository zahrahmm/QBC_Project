import type { User } from "../../models/User.ts";
import {
  CheckIcon,
  EditIcon,
  TrashCan,
  XIcon,
} from "../common/uiComponents.tsx";

const UserRow = ({ user }: { user: User }) => {
  return (
    <tr>
      <td className="py-10">{user.getId}</td>
      <td className="py-10">
        <div className="flex items-center justify-start px-14 gap-x-2">
          <button>
            <EditIcon />
          </button>
          <span>{user.getName}</span>
        </div>
      </td>
      <td className="py-10">
        <div className="flex items-center justify-start px-14 gap-x-2">
          <button>
            <EditIcon />
          </button>
          <span>{user.getEmail}</span>
        </div>
      </td>
      <td className="py-10">
        <div className="flex justify-center">
          {user.getIsAdmin ? <CheckIcon /> : <XIcon />}
        </div>
      </td>
      <td className="py-10">
        <button className="w-full flex items-center justify-center">
          <TrashCan />
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
