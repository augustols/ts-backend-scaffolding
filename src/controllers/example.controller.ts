import { ExampleService } from "../services/example.service";
import { inject, injectable } from "inversify";
import { ExampleModel } from "../models/example.model";
import { ServiceInterface } from "../interfaces/service.interface";

@injectable()
export class ExampleController {
  constructor(@inject(ExampleService) private service: ServiceInterface<ExampleModel>) { }

  get(id: string): Promise<ExampleModel> {
    return this.service.get(id);
  }

  getAll(): Promise<ExampleModel[]> {
    return this.service.getAll();
  }

  save(model: ExampleModel): Promise<void> {
    return this.service.save(model);
  }

  update(model: ExampleModel): Promise<void> {
    return this.service.update(model);
  }

  delete(model: ExampleModel): Promise<void> {
    return this.service.delete(model);
  }
}
