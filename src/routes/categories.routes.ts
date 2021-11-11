import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRouter = Router();
const categoriesRepositories = new CategoriesRepository();

categoriesRouter.post("/", (request, response) => {
    const { name, description } = request.body;
    categoriesRepositories.create({ name, description });

    return response.status(201).send();
});

export { categoriesRouter };
