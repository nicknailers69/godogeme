import Express from "express";
import Cors from "cors";
import Helmet from "helmet";
import Routes from "../config/routes";

class App  {

    protected app:Express.Application;
    protected router:Express.Router;

    constructor() {
        this.app = Express();

    }

    init() {
        this.app.use(Cors());
        this.app.use(Helmet());
        this.app.use(Routes(this.router));
    }

}