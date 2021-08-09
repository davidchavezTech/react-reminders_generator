import Button from "./Button"

const Header = () => {
    const handleClick = (e) =>{
        console.log('click')
    }

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button text="Add" color="green" onClick={handleClick} />
        </header>
    )
}

export default Header