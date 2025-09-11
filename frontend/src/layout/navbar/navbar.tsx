import ActionGroup from "@/components/action-group/action-group";
import CartSidebar from "@/components/cart-sidebar/cart-sidebar";
import { useCartSidebarStore } from "@/store/useCartSidebarStore";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
    isAuthenticated: boolean;
    onLogout: () => void;
}

export default function Navbar({ isAuthenticated, onLogout }: NavbarProps)
{
    const [ scrolled, setScrolled ] = useState(false)
    const [ dropdown, setDropdown ] = useState(false)

    const { open } = useCartSidebarStore()

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setScrolled(scrollPosition > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }

    return (
        <>
        <CartSidebar/>

        <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="navbar-wrapper">

                    {/* Logo */}
                    <div className="navbar-logo">
                        <span>WatcHome24</span>
                    </div>

                    {/* Main Menu */}
                    <nav className="navbar-menu">
                        <ul className="navbar-menu-list">
                            <li className="navbar-menu-item">
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li className="navbar-menu-item">
                                <Link to={'/shop'}>Shop</Link>
                            </li>
                            <li className="navbar-menu-item">
                                <Link to={'/about'}>About</Link>
                            </li>
                            <li className="navbar-menu-item">
                                <Link to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Action Group */}
                    <ActionGroup>
                        {isAuthenticated ? (
                            <div className="user-dropdown">
                                <div className="user-trigger" onClick={toggleDropdown}>
                                    <User/>
                                </div>
                                {dropdown && (
                                    <div className="user-dropdown-menu">
                                        <button className="user-dropdown-item" onClick={onLogout}>
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>

                        ) : (
                            <>
                            <div className="auth-button">
                                <Link to={"/auth/login"}>Login</Link>
                            </div>
                            <div className="auth-button">
                                <Link to={"/auth/register"}>Register</Link>
                            </div>
                            </>
                        )}

                        {/* Search */}
                        <div className="navbar-search">
                            <Search/>
                        </div>

                        {/* Favorites */}
                        <div className="navbar-favorites">
                            <Heart/>
                        </div>

                        {/* Cart */}
                        <div className="navbar-cart" onClick={open}>
                            <ShoppingCart/>
                        </div>

                    </ActionGroup>

                </div>
            </div>
        </header>
        </>
    );
}