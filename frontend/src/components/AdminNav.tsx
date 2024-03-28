import { ModeToggle } from "./mode-toggle";

const AdminNav = () => {
  return (
    <div className="flex justify-between w-full border-b pb-4">
      <div />
      <img src="/logo.png" className="w-40" alt="logo" />
      <ModeToggle />
    </div>
  );
};

export default AdminNav;
