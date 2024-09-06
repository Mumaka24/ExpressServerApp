let names = [
    {id: 1, tittle: 'Name One'},
    {id: 2, tittle: 'Name Two'},
    {id: 3, tittle: 'Name Three'},
    ];

// @desc Get all Names
// @ route GET/api/names
export const getNames = (req, res, next) => {
    console.log(req.query);
    const limit = parseInt(req.querry.limit);

    if (!isNaN(limit) && limit > 0) {
        return res
        .status(200)
        .json(names.slice(0, limit));
     }
         res.status(200).json(names);
     };

     // @desc Get single name
     // @route GET/ api/names/:id
     export const getName = (req, res, next) => {
        const id = parseInt(req.params.id);
        //console.log(req.prams.id);
        const name = names.find((name) => name.id ===id);
        
    if (!name) {
       const error =  new Error(`A name with the id of ${id} was not found`);
       error.status = 404;
        return next(error);
     }
        res.status(200).json(name);
     };

     // @desc Create new name
     // @route POST/ api/names
     export const createName = (req, res, next) => {
        const newName = {
            id: names.length +1,
            tittle: req.body.tittle,
        }
        if (!newName.tittle) {
           const error =  new Error(`Please include a tittle`);
           error.status = 400;
           return next(error);
        }
        
        Name.push(newName);
        res.status(201).json(names);
     };

     // @desc Update name
     // @route PUT/ api/names
     export const updateName = (req,res, next) => {
        const id = parseInt(req.params.id);
        const name = names.find((name) =>name.id === id);
     
        if (!name) {
            const error =  new Error(`A name with the id of ${id} was not found`);
            error.status = 404;
            return next(error);
        }
    
        names.tittle = req.body.title;
        res.status(200).json(names);
    
     };

     // @desc Delete name
     // @route DELETE/ api/names
     export const deleteName = (req,res, next) => {
        const id = parseInt(req.params.id);
        const name = names.find((Name) =>Name.id === id);
     
        if (!name) {
            const error =  new Error(`A name with the id of ${id} was not found`);
            error.status = 404;
            return next(error);
        }
    
        name = name.filter((name) => name.id !==id)
        res.status(200).json(name);
     }; 