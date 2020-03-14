import express from 'express';
import { ExampleService } from '../services/example.service';
import { ExampleModel } from '../models/example.model';
import { ExampleController } from '../controllers/example.controller';
import DIContainer from '../configs/di-container.config';
export const ExampleRouter = express.Router();

const controller: ExampleController = DIContainer.resolve<ExampleController>(ExampleController);

// middleware that is specific to this router
ExampleRouter.route('/')
  .get((req, res) => {
    controller.getAll()
      .then(result => res.send(result))
      .catch(error => res.send(error));
  })
  .post((req, res) => {
    const body: ExampleModel = req.body;
    controller.save(body)
      .then(() => res.send('Done!'))
      .catch(error => res.send(error));

  })
  .patch((req, res) => {
    const body: ExampleModel = req.body;
    controller.update(body)
      .then(() => res.send('Done!'))
      .catch(error => res.send(error));

  })
  .delete((req, res) => {
    const body: ExampleModel = req.body;
    controller.delete(body)
      .then(() => res.send('Done!'))
      .catch(error => res.send(error));

  });

ExampleRouter.route('/:id')
  .get((req, res) => {
    const id = req.params.id;
    controller.get(id)
      .then(result => res.send(result))
      .catch(error => res.send(error));
  })
