const Joi=require("joi");

const taskValidation=(req,res,next) => {
    const {title,details,task_date}=req.body;

    const taskInfo={
        title,
        details,
        task_date
    }

    const schema=Joi.object({
        title: Joi.string()
            .min(3)
            .max(30)
            .required(),
        details: Joi.string()
            .allow('')
            .max(1000),
        task_date: Joi.date().required()
    })

    const {error}= schema.validate(taskInfo);
    if(error){
        return res.status(500).json({error: error.details[0].message});
    }
    next();
};

module.exports={
    taskValidation,
}