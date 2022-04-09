const Tasks = ({tasks}) => {
    return (
        <>
            {tasks.map( (task) => (
            <h4>{task.text}</h4>)
            )}
        </>
    )
}

export default Tasks