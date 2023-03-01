import React, { useContext } from 'react'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import { About } from '../component/About'
import { Contact } from '../component/Contact'
import { Home } from '../component/Home'
import { Item } from '../component/Item'
import { Login } from '../component/Login'
import { NotFound } from '../component/NotFound'
import { User } from '../component/User'
import { Context } from '../context/Context'

export const Router = () => {

    const { user, setUser } = useContext(Context);
    const navigateVar = useNavigate();

    const logOut = (e) => {
        e.preventDefault();
        setUser(null);
        navigateVar("/")
    }

    return (
        <>
            {/* NavBar */}
            <header className='header'>
                <nav>
                    <div className='logo'>
                        <img src="./images/logo.png" alt="E2D logo" />
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/home">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/item">ITEM</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">CONTACT</NavLink>
                        </li>
                        { user === null || !user.hasOwnProperty("name") ? (
                            <li>
                                <NavLink to="/login">LOGIN</NavLink>
                            </li>
                        ) : (
                            <li>
                                <NavLink to="/user">{user.name.toUpperCase()}</NavLink>
                                <a href='#' onClick={logOut}>LOGOUT</a>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>

            <section className='content'>
                {/* ROUTING */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/item' element={<Item />} />
                    <Route path='/user' element={<User />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </section>
        </>
    )
}
