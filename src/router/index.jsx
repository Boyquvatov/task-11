import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
 import { Users,Login,Cars,Posts,Main} from "@pages" 


const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
            <Route index element={<Login/>}/>
            <Route path="main/*" element={<Main/>}>
            <Route index element={<Cars/>}/>
            <Route path="cars" element={<Cars/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="posts" element={<Posts/>}/>
            </Route>
            </Route>
        )
    );
    return <RouterProvider router={router}/>
};
export default Index;
