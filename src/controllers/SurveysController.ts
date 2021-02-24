import {
    Request,
    Response
} from 'express';
import {
    getCustomRepository
} from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepository';

class SurveysController {

    async create(request: Request, response: Response) {
        const {
            title,
            description
        } = request.body;

        const surveysRespository = getCustomRepository(SurveysRepository);

        const survey = surveysRespository.create({
            title,
            description
        });

        await surveysRespository.save(survey);

        return response.status(201).json(survey);

    }

    async show(request: Request, response: Response) {
        const surveysRespository = getCustomRepository(SurveysRepository);

        const all = await surveysRespository.find();

        return response.json(all);

    }

    async delete(request: Request, response: Response) {

        /* TODO:
        const { id } = request.body;

        return request.body.json();
        process.exit();

        const surveysRespository = getCustomRepository(SurveysRepository);

        const survey = await surveysRespository.findOne(id);

        return response.json(survey);
        */

    }

}
export {
    SurveysController
};

