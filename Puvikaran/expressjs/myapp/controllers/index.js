function index(req, res) {

    res.render('../views/index', {
        title: 'Express App'
    });
}

module.exports = {
    index: index
};