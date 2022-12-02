const Annotation = require('../models/annotationdata')

module.exports = {
    async read(response, request){
        const priority = request.priority
        const prioritynotes = await Annotation.find(priority)
        
        return response.json(prioritynotes)
    },

    async update(response, request){
        const { id } = request.params
        const annotation = await Annotation.findOne({_id: id})

        if(!annotation.priority)
        {
            annotation.priority = true
        }
        else
        {
            annotation.priority = false
        }

        await annotation.save()
        return response.json(annotation)
    }
}