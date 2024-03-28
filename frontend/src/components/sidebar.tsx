import { Home, Hotel, Rows4, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside
        id="sidebar"
        className="fixed left-0 top-0 z-40 h-screen w-64 transition-transform"
        aria-label="Sidebar"
      >
        <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 py-4 dark:border-border dark:bg-card">
          <div className="mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white">
            <span className="ml-3 text-base font-semibold">The CAPPA</span>
          </div>
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <Link
                to="/admin"
                className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
              >
                <Home />
                <span className="ml-3 flex-1 whitespace-nowrap">admin</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/hotelbooks"
                className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
              >
                <Hotel />
                <span className="ml-3 flex-1 whitespace-nowrap">
                  Hotel Books
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/alluser"
                className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
              >
                <Users />
                <span className="ml-3 flex-1 whitespace-nowrap">All users</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/hotellist"
                className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
              >
                <Rows4 />
                <span className="ml-3 flex-1 whitespace-nowrap">
                  Hotel List
                </span>
              </Link>
            </li>
          </ul>
          {/* <div className="mt-auto flex">
            <div className="flex w-full justify-between">
              <span className="text-sm font-medium text-black dark:text-white">

              </span>
            </div>
          </div> */}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
