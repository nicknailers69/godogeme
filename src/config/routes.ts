import {Router} from "express";

const routes = (router:Router) =>  {

    return () => {
        router.get("/", (req, res, next) => {
            res.status(200).send("godogeme api v1.0.0");
        });
    }


};

export default routes;