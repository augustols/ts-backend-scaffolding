import "reflect-metadata";
import { Container } from "inversify";
import { ExampleModel } from "../models/example.model";
import { ServiceInterface } from "../interfaces/service.interface";
import { ExampleService } from "../services/example.service";

const DIContainer = new Container();

DIContainer.bind<ServiceInterface<ExampleModel>>(ExampleService).toSelf();

export default DIContainer;