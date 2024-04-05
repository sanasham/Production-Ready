import express from "express";
import dotenv from "dotenv";
dotenv.config();
import Controller from "interfaces/controller.interface";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

class App {
  public app: express.Application;
  constructor(controller: Controller[]) {
    this.app = express();
    this.connectToDatabase();
    this.initializeMiddleware();
    this.initializeController(controller);
    this.initializeErrorHandling();
  }
  public listen() {
    this.app.listen(process.env.PORT || 3002, () => {
      console.log(`server is running on ${process.env.PORT || 3002}`);
    });
  }

  public getServer() {
    return this.app;
  }
  private initializeMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
  }
  private initializeController(controllers: Controller[]) {
    // this.app.use(express.json());
    // this.app.use(express.urlencoded({ extended: true }));
    // this.app.use(express.static("public"));
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  private initializeErrorHandling() {
    //register error middleware
    //this.app.use(errorMiddleware);
  }
  private connectToDatabase() {
    const mongodbUri = process.env.MONGODB_URI;

    if (!mongodbUri) {
      throw new Error("MONGODB_URI environment variable is not defined.");
    }

    mongoose.connect(mongodbUri);
  }
}

export default App;
