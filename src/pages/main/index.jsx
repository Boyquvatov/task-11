import { Outlet } from "react-router-dom"
import { Header,Sidebar  } from "@components"
import  ResponsiveDrawer  from "../../components/ui/layout.jsx"
import './index.css'
const Main = () => {
  return (
    // <div className="main-layout">
    //     <Sidebar className="saidbar"/>
    //     <div className="main-left">
    //         <Header/>
    //         <main className="outletmain" >
    //             <Outlet/>
    //         </main>
    //     </div>
    // </div>
    <>
    <ResponsiveDrawer/>
    </>
  )
}

export default Main