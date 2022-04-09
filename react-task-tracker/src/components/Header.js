import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <div className='header'>
            <h1>{title}</h1>
            <Button color='orange' text='Add Task' onClick={onClick}/>
        </div>
    )
}

export default Header

Header.defaultProps = {
    title: 'ALL DONE - Task Tracker'
}

Header.prototype = {
    title: PropTypes.string.isRequired
}