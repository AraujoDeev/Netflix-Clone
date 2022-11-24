import React from "react";
import './Modal.css'
import { SlLike } from "react-icons/sl";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Modal = ({modal, setModal}) =>{
    if(!modal){
        return
    }
    return(

        <div className="modal">
        <div className="modal--information">
            <div className="poster">
            <img src='./logo.png' alt="" />
            <button onClick={()=>setModal(false)}>X</button>
            </div>
            <div className="buttons">
            <div className="buttons--left">
                <button><BsFillPlayFill/></button>
                <button><AiOutlinePlus/></button>
                <button><SlLike/></button>
            </div>
            <div className="button--rigth">
                <button><MdOutlineKeyboardArrowDown/></button>
            </div>
            </div>
            
        </div>
        </div>
    )
}

export default Modal