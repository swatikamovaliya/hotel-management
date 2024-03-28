/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import HotelListAdmin from "@/components/HotelListAdmin";
import AdminNav from "@/components/AdminNav";
import Sidebar from "@/components/sidebar";
import { Route, Routes } from "react-router-dom";
import AllHotelBooks from "@/components/AllHotelBooks";
import AllUsers from "@/components/AllUsers";
import Dashboard from "@/components/Dashboard";

const Admin = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [Subscriptions, setSubscriptions] = useState(0);
  const [allUsers, setAllUsers] = useState<any[] | []>([]);
  const [resentHotel, setResentHotel] = useState<any[] | []>([]);
  const [allSubscription, setAllSubscription] = useState([]);

  const fetchTotalRevenue = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/admin/TotalRevenue`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTotalRevenue(data.totalRevenue);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSubscriptions = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/admin/Subscriptions`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSubscriptions(data.subscriptions);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllUsers = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/admin/getAllUsers`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setAllUsers(data.data);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchResentHotels = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/admin/resentHotels`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setResentHotel(data.data);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchallSubscriptions = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/admin/allSubscriptions`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setAllSubscription(data.data);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTotalRevenue();
    fetchSubscriptions();
    fetchAllUsers();
    fetchResentHotels();
    fetchallSubscriptions();
  }, []);

  return (
    <div className="space-y-4 m-4">
      <AdminNav />
      <div className="flex ml-80">
        <Sidebar />
        <div className="space-y-4 m-4 ">
          <div className="">
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    totalRevenue={totalRevenue}
                    Subscriptions={Subscriptions}
                    allSubscription={allSubscription}
                  />
                }
              />
              <Route
                path="/hotelbooks"
                element={<AllHotelBooks resentHotel={resentHotel} />}
              />
              <Route
                path="/alluser"
                element={<AllUsers allUsers={allUsers} />}
              />
              <Route path="/hotellist" element={<HotelListAdmin />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
