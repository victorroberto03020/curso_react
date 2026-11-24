import './Header.css'

function Header() {

    return (
        <header className='header'>
            <h1>Victor Roberto</h1>
            <ul className='links'>
                <li><a href="https://google.com" target="_blank"> Google </a></li>
                <li><a href="https://youtube.com" target="_blank"> Youtube </a></li>
            </ul>
        </header>
    )
}

export default Header