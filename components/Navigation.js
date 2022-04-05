import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
// import {useTransition, animated} from 'react-spring'
import NavigationMenu from './NavigationMenu'
  

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    // const maskTransitions = useTransition(showMenu, null, {
    //     from: { position: 'absolute', opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 },
    // })

    // const menuTransitions = useTransition(showMenu, null, {
    //     from: { opacity: 0, transform: 'translateX(-100%)' },
    //     enter: { opacity: 1, transform: 'translateX(0%)' },
    //     leave: { opacity: 0, transform: 'translateX(-100%)' },
    // })

    return (
      <nav>
        <span className="text-xl">
          <FaBars 
            onClick={() => setShowMenu(!showMenu)}
          />
        </span>

        <button 
          // key={key} 
          // style={props}
          className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
          onClick={() => setShowMenu(false)}
        >OPEN
        </button>

        {/* {
          maskTransitions.map(({ item, key, props }) =>
            item && 
            <animated.div 
                key={key} 
                style={props}
                className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                onClick={() => setShowMenu(false)}
            >
            </animated.div>
          )
        } */}

        {/* {
          menuTransitions.map(({ item, key, props }) =>
            item && 
            <animated.div 
              key={key} 
              style={props}
              className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
            >
              <NavigationMenu 
                  closeMenu={() => setShowMenu(false)}
              />
            </animated.div>
          )
        } */}
        <NavigationMenu closeMenu={() => setShowMenu(false)}/>
    </nav>
    )
}

export default Navigation