import {Request, Response} from 'express'
import { createMenuObject } from '../helpers/createMenuObject'
import { Pet } from '../models/pet'

export const search = (req:Request, res:Response) =>{

    let query: string = req.query.q as string
    
    let list = Pet.getFromName(query)

    res.render('pages/pages',{
        menu:createMenuObject(''),
        list
    })
}