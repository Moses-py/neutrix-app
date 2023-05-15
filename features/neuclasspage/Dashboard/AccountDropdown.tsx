import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface AccountDropdownProps {
  user: string;
}
const AccountDropdown: React.FunctionComponent<AccountDropdownProps> = ({
  user,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        type="button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <AccountCircleIcon />
      </button>
      {showDropdown && (
        <div
          id="dropdownDivider"
          className="z-50 fixed font-normal right-[2.5rem] top-[4rem] pb-0 pt-5 px-5 bg-white divide-gray-100 rounded-lg shadow w-100 border border-gray-300"
        >
          <p className="font-bold divide-y-2">{user}</p>
          <div className="my-5">
            <ul>
              <li className="my-2">
                <Link href="/">Go home</Link>
              </li>
              <li className="my-2">
                <button
                  className="block py-1 w-full text-left text-xs text-gray-700 hover:bg-gray-100"
                  onClick={() => signOut()}
                >
                  <span className="text-red">Log out</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountDropdown;
