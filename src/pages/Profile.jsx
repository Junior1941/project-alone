import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import NavBar from "../components/NavBar";

export default function Home() {
  const {} = useAuth();

  return (
    <div>
      <NavBar />
      <div className="ml-4">
        <div className="flex items-center justify-center mt-44 ml-[700px]">
          <Link to="/home" className="text-[#1e6899] mr-20 Font1 text-[20px]">
            หน้าแรก
          </Link>
          <div className="flex ml-[530px]">
            <h1 className="text-[#1e6899] text-center Font1 text-[20px] mr-20 underline">
              การสั่งซื้อ
            </h1>
            <h1 className="text-[#1e6899] text-center Font1 text-[20px] mr-22 underline">
              ประวัติการสั่งซื้อ
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
