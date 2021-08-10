import Button from "./Button"
import { useLocation } from 'react-router-dom'

const Header = ({ onAdd, showAddOrClose }) => {
    const location = useLocation()

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            {location.pathname === '/' &&
                <Button text={showAddOrClose ? 'Close' : 'Add'} color={showAddOrClose ? 'red' : 'green'} onClick={onAdd} />
            }
        </header>
    )
}

export default Header