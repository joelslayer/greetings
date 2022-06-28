import {Request, Response} from 'express';
import fetch from 'node-fetch';

export const main = async (req: Request, res: Response)=>{
    let verso = await fetch('http://localhost:2000');

    if(verso.ok){
        let versiculo = await verso.json();        

        res.render('pages/page', {
            versiculo
        });
    }    

    
}