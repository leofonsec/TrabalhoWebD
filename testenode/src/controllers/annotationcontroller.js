//o arq xController é o responsável pelo controle das funções que irão para o routes (tipo uma biblioteca (?))
const Annotation = require('../models/annotationdata')

module.exports = {
//mexeu com db é async
    async read(request, response){
        const annotationlist = await Annotation.find() //sem nada dentro retorna geral
        return response.json(annotationlist)
    },

    async create(request, response){
        const {names, description, values, priority} = request.body

        if (!names || !description)
        {
            return response.status(400).json({error: "Necessário um nome ou descrição"})
        }

        const annotationcreated = await Annotation.create({
            names,
            description,
            values,
            priority
        })
        return response.json(annotationcreated)
    },

    async delete(request, response){
        const {id} = request.params

        const annotationdeleted = await Annotation.findOneAndDelete({_id: id})
        if(!annotationdeleted)
        {
            return response.status(401).json({error: "Deu ruim champs"})
        }

        return response.json(annotationdeleted)
    }
}