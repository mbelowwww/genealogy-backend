// Все обработчики ошибок должны иметь 4 параметра, иначе они будут обычными контроллерами
module.exports = function(err,req,res,next)
{
    console.error(err);
    res.status(500).send(err.stack || err.message);
};