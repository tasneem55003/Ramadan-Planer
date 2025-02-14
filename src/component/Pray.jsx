
import { useState } from 'react';
import '../App.css';


function Pray() {
    const [p, setp] = useState([
        { name: "الفجر", completed: false },
        { name: "الظهر", completed: false },
        { name: "العصر", completed: false },
        { name: "المغرب", completed: false },
        { name: "العشاء", completed: false },
        { name: "التراويح", completed: false },
        { name: "التهجد", completed: false }
    ]);
    const itemDn = (index) => {
        const newp = [...p];
        newp[index].completed = !newp[index].completed
        setp(newp)
    };
    return (
        <div className="Pray">
            <h2>Pray</h2>
            <div>
                <ul className='prayName'>
                    {
                        p.map((item, index) => {
                            return <li
                            className={item.completed ? "dstyle" : ""}

                                key={index}
                                onClick={() => itemDn(index)}
                            >{item.name}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}


export default Pray;

