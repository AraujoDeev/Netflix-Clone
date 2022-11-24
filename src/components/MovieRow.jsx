import React, {useState} from "react";
import './MovieRow.css'
import { MdOutlineNavigateBefore, MdNavigateNext } from "react-icons/md";
import Modal from "./Modal";



const MovieRow = ({title, items}) =>{
    const [scrollX, setScrollX] = useState(0)
    const [modal, setModal] = useState(false)

    const  handleLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0
        }
        setScrollX(x)
    }

    const handleRigthArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    }

    const infoMovie = () =>{
        setModal(true)
    }

    return(
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow-left" onClick={handleLeftArrow}>
                <MdOutlineNavigateBefore style={{fontSize: 50}} />
            </div>

            <div className="movieRow-rigth" onClick={handleRigthArrow}>
                <MdNavigateNext style={{fontSize: 50}} />
            </div>

            <div className="movieRow--listarea">

                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                {items.results.length > 0 && items.results.map((item, key) =>(
                    <div className="movieRow--item">
                        <img key={item} onClick={infoMovie} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </div>
                ))}
                </div>
            </div>
                <Modal modal={modal} setModal={setModal} items={items}/>
        </div>
    )
}

export default MovieRow