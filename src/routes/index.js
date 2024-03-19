import { Route, Routes } from "react-router-dom";
import * as Containers from "../app/containers";
import * as Layouts from "../app/layouts"
// import PrivateCheck from "../app/layouts/PrivateCheck";


const Router = () => {
    return (
        <>
            <Routes>
                <Route element={<Layouts.MainLayout />}>
                    <Route path="/" element={<Containers.Register />} />
                    <Route path="/login" element={<Containers.Login />} />
                </Route>
            </Routes>
        </>
    );
}

export default Router;