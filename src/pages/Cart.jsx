import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import NavBarcart from "../components/NavBarcart";

export default function Cart() {
  const {} = useAuth();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    // Ensure the quantity is a positive integer
    const newQuantity = Math.max(1, Math.floor(event.target.value));
    setQuantity(newQuantity);
  };

  return (
    <div>
      <NavBarcart />
      <div className="ml-4">
        <div className="flex items-center justify-center mt-44 ml-[400px]">
          <Link
            to="/home"
            className="text-[#1e6899] mr-20  Font1 text-[20px]  "
          >
            หน้าแรก
          </Link>
          <Link
            to="/"
            className="text-[#1e6899] text-center   Font1 text-[20px] mr-20 "
          >
            สินค้าทั้งหมด
          </Link>
          <Link
            to="/"
            className="text-[#1e6899] text-center  Font1 text-[20px]  mr-20 "
          >
            สินค้าลดราคา
          </Link>
          <h1 className="text-[#1e6899] text-center  Font1 text-[20px]  mr-20 ">
            ผู้ชาย
          </h1>
          <h1 className="text-[#1e6899] text-center  Font1 text-[20px] mr-20 ">
            ผู้หญิง
          </h1>
          <div className=" ">
            <div className="form-control mx-auto ml-[320px]">
              {" "}
              {/* Added ml-auto class */}
              <input
                type="text"
                placeholder="ค้นหาสินค้า..."
                className="input input-bordered pe-40 md:mx-auto Font1"
              />
            </div>
          </div>
        </div>

        <div className="flex ">
          <div className="flex flex-col items-center mt-10 ml-[100px]">
            <h1 className="text-[30px] Font1 font-bold">ตะกร้า</h1>
            <div className="flex flex-col mt-5 mx-4 ">
              <Link to="/product">
                <img
                  src="/Product1.jpg"
                  alt=""
                  style={{ width: "250px", height: "200px" }}
                  className="mb-4 ml-[100px]"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col mt-[65px] ">
            <p className="text-[20px] mt-10  FontP">
              รองเท้า Nike Air Jordan 1 Mid SE{" "}
            </p>
            <p className="text-[20px] mt-1 FontP">‘Elephant Toe’</p>
            <p className="text-[18px] mt-1 FontP text-gray-400">
              สี : Black/University Red-White
            </p>
            <p className="text-[18px] mt-1 FontP text-gray-400">
              ขนาด M11US/45/29CM
            </p>
            <div className="flex items-center mt-4">
              <label htmlFor="quantity" className="mr-2 FontP">
                จำนวน:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                className=" ml-5 border border-gray-400 px-[10px] py-[5px] rounded "
              />
            </div>
          </div>
          <div className="flex flex-col items-center mt-20 mx-4 ml-[350px]">
            <p className="text-[18px] mt-16  FontP text-gray-800">
              8,700.00 บาท
            </p>
            <hr style={{ border: "1px solid gray-200", margin: "50px 0" }} />
          </div>
          

          <div className="flex flex-col  mt-10 ">
            <h1 className="text-[30px] Font1 font-bold">ทั้งหมด</h1>
            <div className="flex mt-6 ml-6 ">
              <p className="text-[20px] FontP">
                รองเท้า Nike Air Jordan 1 Mid SE{" "}
              </p>
              <div className="flex items-center justify-center ml-[200px]">
                <p className="text-[20px] FontP">8,700.00 บาท</p>
              </div>
            </div>
            <div className="flex items-center  ml-6 ">
              <p className="text-[20px] FontP">‘Elephant Toe’</p>
            </div>
            <div className="flex mt-6 ml-6 ">
              <p className="text-[20px] FontP">
                ค่าธรรมเนียมการจัดส่งและดำเนินการโดยประมาณ
              </p>
              <div className="flex items-center justify-center ml-[187px]">
                <p className="text-[20px] FontP">ฟรี</p>
              </div>
            </div>
            <hr style={{ border: "1px solid gray-200", margin: "10px 0" }} />
            <div className="flex ml-6 ">
              <p className="text-[20px] FontP">ยอดรวม</p>
              <div className="flex items-center justify-center ml-[200px]">
                <p className="text-[20px] FontP ml-[230px]">8,700.00 บาท</p>
              </div>
            </div>
            <hr style={{ border: "1px solid gray-200", margin: "10px 0" }} />
            <div className="flex flex-col align-top ">
              <div className="flex justify-center items-center flex-col mt-20 ">
                <p
                  
                  className=" font-bold Font btn bg-black text-white rounded-[30px] Font w-56 text-center mb-4 text-[15px]"
                >
                  ขำระสินค้า
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
