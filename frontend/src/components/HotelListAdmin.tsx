/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { columns } from "./admin/columns";
import { DataTable } from "./admin/data-table";
import { taskSchema } from "../data/schema";

export default function HotelListAdmin() {
  const [data, setData] = useState<(typeof taskSchema)[] | []>([]);

  async function fetchData() {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/hotel`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  useEffect(() => {
    fetchData().then((data) => {
      setData(data.data);
    });
  }, []);

  return (
    <>
      <div className="hidden h-full flex-1 flex-col w-[150vh] space-y-8 p-8 md:flex">
        <DataTable data={data as any[]} columns={columns} />
      </div>
    </>
  );
}
