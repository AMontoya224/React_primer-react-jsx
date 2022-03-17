import './Tarea.css'




const Tarea = ( {tareas} ) => {
    return (
        <div >
            <li className='tarea'>
                {tareas}
            </li>
        </div>
    )
}

export default Tarea;