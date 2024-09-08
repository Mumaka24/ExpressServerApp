let posts = [
    {id: 1, tittle: 'Name One'},
    {id: 2, tittle: 'Name Two'},
    {id: 3, tittle: 'Name Three'},
    ];

// @desc Get all Posts
// @ route GET/api/posts
export const getPosts = (req, res, next) => {
    console.log(req.query);
    const limit = parseInt(req.querry.limit);

    if (!isNaN(limit) && limit > 0) {
        return res
        .status(200)
        .json(posts.slice(0, limit));
     }
         res.status(200).json(posts);
     };

     // @desc Get single post
     // @route GET/ api/posts/:id
     export const getPost = (req, res, next) => {
        const id = parseInt(req.params.id);
        //console.log(req.prams.id);
        const post = posts.find((post) => post.id ===id);
        
    if (!post) {
       const error =  new Error(`A post with the id of ${id} was not found`);
       error.status = 404;
        return next(error);
     }
        res.status(200).json(post);
     };

     // @desc Create new post
     // @route POST/ api/posts
     export const createPost = (req, res, next) => {
        const newPost = {
            id: posts.length +1,
            tittle: req.body.tittle,
        }
        if (!newPost.tittle) {
           const error =  new Error(`Please include a tittle`);
           error.status = 400;
           return next(error);
        }
        
        Post.push(newPost);
        res.status(201).json(posts);
     };

     // @desc Update post
     // @route PUT/ api/posts
     export const updatePost = (req,res, next) => {
        const id = parseInt(req.params.id);
        const post = posts.find((post) =>post.id === id);
     
        if (!post) {
            const error =  new Error(`A post with the id of ${id} was not found`);
            error.status = 404;
            return next(error);
        }
    
        posts.tittle = req.body.title;
        res.status(200).json(posts);
    
     };

     // @desc Delete post
     // @route DELETE/ api/posts
     export const deletePost = (req,res, next) => {
        const id = parseInt(req.params.id);
        const post = posts.find((Post) =>Post.id === id);
     
        if (!post) {
            const error =  new Error(`A post with the id of ${id} was not found`);
            error.status = 404;
            return next(error);
        }
    
        post = post.filter((post) => post.id !==id)
        res.status(200).json(post);
     }; 