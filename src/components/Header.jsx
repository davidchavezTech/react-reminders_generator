import Button from "./Button"

const Header = ({ onAdd, showAddOrClose }) => {

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button text={showAddOrClose ? 'Close' : 'Add'} color={showAddOrClose ? 'red' : 'green'} onClick={onAdd} />
        </header>
    )
}

export default Header