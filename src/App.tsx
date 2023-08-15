import Home from "./pages/home/Home.tsx";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import Users from "./pages/users/Users.tsx";
import Products from "./pages/products/products.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/footer.tsx";
import Menu from "./components/menu/menu.tsx";

function App() {
    const Layout = () => {
        return (
            <div className={"main"}>
                <Navbar/>
                <div className="container">
                    <div className="menuConteiner">
                        <Menu/>
                        <div className="contentContainer">
                            <Outlet/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/users",
                    element: <Users/>
                },
                {
                    path: "/products",
                    element: <Products/>
                },
            ]
        },
    ]);


    return (
        <RouterProvider router={router}/>
    )
}

export default App
