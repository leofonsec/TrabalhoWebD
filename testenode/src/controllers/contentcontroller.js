const Annotation = require('../models/annotationdata')

module.exports = {
    async update(response, request){
        const {id} = request.params
        const {description} = request.body
        const annotation = await Annotation.findOne({_id: id})

        if(description)
        {
            annotation.description = description
            await annotation.save()
        }
        return response.json(annotation)
    }
}