
import React, { useReducer, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddressComponent = ({ address, deleteAddress, editAddress}) => {
    const addressCard = ({_id,street,postalCode,city,country}) => {
        return <div className="col-sm col-lg-4 col-mid-3 bg-white p-2 rounded mr-1">
                  <div>
                    <span class="badge badge-warning">Default Address</span>
                    <p>{street}</p>
                    <span className="">{postalCode},{city},{country}</span>
                  </div>
                  <div className="float-right">
                    <button type="button" class="btn btn-info btn-sm mr-2" onClick={() => deleteAddress(_id)}>
                      <i className="fas fa-trash"></i>
                    </button>
                    <button type="button" class="btn btn-info btn-sm mr-2" onClick={() => editAddress(_id)}>
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
          </div>      
      }
  
      const listOfAddress = () => {
          if(Array.isArray(address)){
            return address.map((item) => {
                return addressCard(item)
            });
          }else{
            return <p> Address Not available!</p>
          }
      }

    return <div className="d-flex flex-row flex-nowrap overflow-auto ">
            {listOfAddress()}
    </div>


}