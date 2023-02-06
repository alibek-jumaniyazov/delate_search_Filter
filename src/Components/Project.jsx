import icon1 from '../images/img1.png'
import icon2 from '../images/img2.png'
import icon3 from '../images/clock.png'
import icon4 from '../images/user.png'
import icon5 from '../images/phone.png'
import icon6 from '../images/x.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Project() {

    const [state, setState] = useState([])
    const [inputvalue, setValue] = useState("")


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => setState(res.data))
    }, [])

    function delet(id){
        const newData = state.filter((value) => value.id !== id)
        setState(newData)


 
    }
       function getSearch(e){
            const aa = state.filter((value) => value.name.toLowerCase().includes(e.toLowerCase()))
            setState(aa)
        }

    return (
        <div className="Project">
            <div className="Sidebar">
                <div className="update">
                    <img src={icon1} alt="" />
                    <p>Yangi buyurtma <br /> qo’shish</p>
                </div>
                <div className="sidebar-main">
                    <div className="search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder='Search' onChange={e => getSearch(e.target.value)} />

                    </div>

                </div>
                <div className="sidebar-footer">
                    <div className="img">
                        <img src={icon2} alt="" />
                    </div>
                    <div className="img">
                        <img src={icon2} alt="" />
                    </div>

                </div>
            </div>
            <main>
                <div className="cards">
                    {
                        state.map((item) => (
                            <div className="card">
                                <div className="list_1">
                                    <p className="number">{item.id}</p>
                                    <div className="data">
                                        <img src={icon3} alt="" />
                                        <span>00:24</span>
                                    </div>
                                </div>
                                <div className="list_2">
                                    <h3 className="name">
                                        <img src={icon4} alt="" />
                                        {item.name}
                                    </h3>
                                    <h4 className='tel'>
                                        <img src={icon5} alt="" />
                                        {item.phone}
                                    </h4>
                                </div>
                                <div className="list_3">
                                    <div className="opertator">
                                        <span>Operator:</span>
                                        <p>Komilova M</p>
                                    </div>
                                    <div className="opertator">
                                        <span>Filial:</span>
                                        <p>Fast Food <br /> Maksim Gorkiy</p>
                                    </div>
                                </div>
                                <div onClick={() => delet(item.id)} className='imgg'> <img src={icon6} alt="" className="delete" /> </div>
                            </div>
                        ))
                    }

                </div>
            </main>
        </div>
    )
}