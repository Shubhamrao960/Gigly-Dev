import { Route, Routes } from "react-router-dom";
import * as Component from "../app/component";
import * as Layouts from "../app/layouts"
// import PrivateCheck from "../app/layouts/PrivateCheck";


const Router = () => {
    return (
        <>
            <Routes>
                <Route element={<Layouts.MainLayout />}>
                    <Route path="/" element={<Component.Register />} />
                    <Route path="/login" element={<Component.Login />} />
                </Route>
                <Route element={<Layouts.PrivateLayout />}>
                    <Route path="/Dashboard" element={<Component.Dashboard/>} />
                </Route>
            </Routes>
        </>
    );
}

export default Router;