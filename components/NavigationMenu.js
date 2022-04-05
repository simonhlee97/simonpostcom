import Link from "next/link"

function NavigationMenu(props){
    return (
        <div>
            <div className="font-bold py-3">
                AppName
            </div>
            <ul>
                <li>
                    <Link 
                        href="/" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        test home
                    </Link>
                </li>
                <li>
                    <Link 
                        href="/about" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        test About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu