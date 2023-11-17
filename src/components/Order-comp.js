
import React from "react"
export const OrderItem = ({ item, onTapViewMore }) => {
    const [orderDetail, setOrderDetails] = React.useState(false)
    const [selectedOrderId, setSelectedOrderId] = React.useState("")

    console.log("item", item)
    const { _id, orderId, amount, status, items } = item;

   

    return (
        <div className="container mb-2 p-1 border rounded">
            <div className="row">
                <div className="col">
                    <span> Order ID: {orderId}</span>
                </div>
                <div className="col-2 p-2">
                    <span>₹{amount}</span>
                </div>
            </div>
            
            <div className="row mt-3 mb-3 p-3">
                <div className="col-4 ml-auto">
                        <button className="btn bg-warning" data-toggle="modal" data-target={`#order-${_id}`}
                            // onClick={() => {setSelectedOrderId(_id);setOrderDetails(true)}}
                        >
                            <i className="fas fa-trash mr-2"></i>
                            View Details
                        </button>
                        
                </div>
            </div>
            <div class="modal fade" id={`order-${_id}`}  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title font-medium" id="exampleModalLongTitle">Order Details</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                           <div className="text-center">
                              <div className="flex items-center border-b font-medium p-2"><div className="w-1/3">Image</div><div className="w-1/3">Qlty</div><div className="w-1/3">Amount</div></div>
                              {items && items.length > 0 && items.map(itm => (
                                <div className="flex items-center border-b">
                                   <div className="w-1/3 p-3"><img className="w-16 m-auto" src={itm?.product?.banner} /></div>
                                   <div className="w-1/3">{itm.unit}</div>
                                   <div className="w-1/3">₹{itm?.product?.price}</div>
                              </div>
                              ))}
                               <div className="flex p-2"><div className="w-2/3 text-left">Total Price </div><div className="w-1/3">₹{amount}</div></div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}