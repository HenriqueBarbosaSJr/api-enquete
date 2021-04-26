const knex = require('../database/index');

module.exports={

               
        async raiz(req, res){

            const result = await console.log('Servidor requisitado');
        
            return res.send( 'Utilize um recurso do Servidor - API' + '<br>'  
                             + 'Resposta da API - Enquete !!!');

        },

        async create(req, res){
            try{
                    const { idade } = req.body;
                    const { sexo } = req.body;
                    const { escolaridade } = req.body;
                    const { resp } = req.body;
                    await knex('enquete').insert({
                            idade,
                            sexo,
                            escolaridade,
                            resp,
                    });
                    return res.status(201).send();
            }catch(erro){
                    console.log(erro);
            }
    },

    async respostas (req, res){

        const result = await knex('enquete');
    
        return res.json(result);
    },

    // retorna Total de Masculino e Feminino
    async respostasF (req, res){

        const result = await knex('enquete').where('sexo', 'F').count({ Total:'sexo'});
    
        return res.json(result);
    },

    async respostasM (req, res){

        const result = await knex('enquete').where('sexo', 'M').count({ Total:'sexo'});
    
        return res.json(result);
    },

    // retorna Total de Escolaridades
    async respostasEF (req, res){

        const result = await knex('enquete').where('escolaridade', 'EF').count({ Total:'escolaridade'});
    
        return res.json(result);
    },

    async respostasEM (req, res){

        const result = await knex('enquete').where('escolaridade', 'EM').count({ Total:'escolaridade'});
    
        return res.json(result);
    },

    async respostasES (req, res){

        const result = await knex('enquete').where('escolaridade', 'ES').count({ Total:'escolaridade'});
    
        return res.json(result);
    },

    // retorna Total de idade > e < de 18 anos


    async respostasMaior18 (req, res){

        const result = await knex('enquete').where('idade', '>=', 18).count({ Maior18:'idade'});
    
        return res.json(result);
    },


    async respostasMenor18 (req, res){

        const result = await knex('enquete').where('idade', '<', 18).count({ Menor18:'idade'});
    
        return res.json(result);
    },

    // retorna Total de resposta 1 , 2 ou 3


    async respostasOP1 (req, res){

        const result = await knex('enquete').where('resp', '=', 1).count({ OP1:'resp'});
    
        return res.json(result);
    },
   
    async respostasOP2 (req, res){

        const result = await knex('enquete').where('resp', '=', 2).count({ OP2:'resp'});
    
        return res.json(result);
    },

    async respostasOP3 (req, res){

        const result = await knex('enquete').where('resp', '=', 3).count({ OP3:'resp'});
    
        return res.json(result);
    },

    
    async resetall (req, res){

        const result = await knex('enquete').del();
    
        return res.json(result);
    },
   




}