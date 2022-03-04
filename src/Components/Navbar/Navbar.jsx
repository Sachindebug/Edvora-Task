import styles from './Navbar.module.css';




export default function Navbar(props){

    // style classes
    const {_logo,_avatar, name, row, main_nav } = styles;
    
    
    return (
        <nav className = { main_nav } >
            <div className = "--container">
                <div className = { row }>
                    
                    <div className = {_logo}>
                        <h1>Edvora</h1>
                    </div>


                    {
                        <div className = { row }>
                            <p className = { name } >{props.name}</p>

                            <div className = { _avatar } >
                                <img src = {props.picture} alt = "avatar" />
                            </div>
                        </div>
                    }


                </div>
            </div>
        </nav>
    );
};