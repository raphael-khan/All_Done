import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <div className='header'>
            <h1 style={{color:'coral'}}>{title}</h1>
            <Button color='orange' text='Buy $1.00' onClick={onClick}/>
        </div>
    )
}

export default Header

Header.defaultProps = {
    title: 'All Done - The Ultimate Task Tracker'
}

Header.prototype = {
    title: PropTypes.string.isRequired
}