import React from "react";
import { UberWhiteCar } from "../assets/images";
import { RiArrowDownWideFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { FaMoneyCheck } from "react-icons/fa";

const ConfirmedRide = (props) => {
  return (
    <div>
      <h5 className="w-full flex justify-center text-center px-2 py-1 mb-5 text-gray-400 ">
        <RiArrowDownWideFill size={20} onClick={()=>props.setConfirmedRidePanel(false)}/>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 text-center">Confirm Your Ride</h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <img className="h-20" src={UberWhiteCar} alt="" />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
           
            <GrMapLocation size={22}  />

            <div>
              <h4 className="text-lg font-medium ">37/11-A</h4>
              <p className="text-sm -mt-1 text-gray-600">WorkShop Nanded</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
          <MdLocationPin size={22} />
            <div>
              <h4 className="text-lg font-medium ">37/11-A</h4>
              <p className="text-sm -mt-1 text-gray-600">WorkShop Nanded</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
          <FaMoneyCheck size={22} />

            <div>
              <h4 className="text-lg font-medium ">₹ 193.90</h4>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <button onClick={
        ()=>{props.setVehicleFound(true);
        props.setConfirmedRidePanel(false)
        }} className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
