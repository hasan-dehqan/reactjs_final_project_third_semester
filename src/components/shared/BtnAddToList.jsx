import React from "react";
import {CiHeart} from "react-icons/ci";
import {IoHeart} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {addToList, removeToList} from "../../features/list/ListSlice";
import {isInList} from "../../functions/function";
import {toast} from "react-hot-toast";
import "./BtnAddToList.css";


const BtnAddToList = ({data}) => {
    const list = useSelector((state) => state.list);
    const dispatch = useDispatch();

    const addToListHandler = () => {
        dispatch(addToList(data));
        toast.success("Add To List");
    };
    const removeToListHandler = () => {
        dispatch(removeToList(data));
        toast.success("Remove To List");
    };
  return (
    <div className="btnList">
        {!isInList(list, data.id) ? (
            <button onClick={addToListHandler} className="ciHeart">
                <CiHeart size={25} />
            </button>
        ) : (
            <button onClick={removeToListHandler} className="ioHeart">
                <IoHeart size={25} color="red"/>
            </button>
        )}
    </div>
  )
}

export default BtnAddToList;