import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Landing() {
  const { user, logout } = useAuth();

  return (
    <div className="ml-4">
      <h1 className="text-[#000000] text-center underline font-bold Font1 text-5xl">Welcome</h1>
      <div className="flex items-start mt-4">
        <img src="/Screenshot 2024-02-14 221718.png" alt="" className="w-auto h-auto" />
        <div className="flex flex-col ml-2 align-top mt-20">
          <p className="font-bold Font1">สวัสดีครับ/ค่ะ! ยินดีต้อนรับทุกท่านเข้าสู่ [Footstep store] - ที่รวบรวมรองเท้าทุกสไตล์และความสะดวกสบายให้คุณ!</p>
          <div className="flex justify-center items-center flex-col mt-36 ">
            <Link to="/login" className="underline font-bold Font btn bg-black text-white rounded-[30px] Font w-56 text-center mb-4">
              เข้าสู่ระบบ
            </Link>
            <Link to="/register" className="underline font-bold Font btn bg-black text-white rounded-[30px] Font w-56 text-center">
              สมัครสมาชิก
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  
  
  
}