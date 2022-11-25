
class UserController {

    get(req, res) {
        return res.status(200).json({
            content: 'Get user by id',
        });
    }

    list(req, res) {
        return res.status(200).json({
            content: 'List all users'
        });
    }

    create(req, res) {
        return res.status(201).json({
            content: 'Create new user.'
        });
    }

    update(req, res) {
        return res.status(200).json({
            content: 'Update user that already exist.',
        });
    }

    delete(req, res) {
        return res.status(200).json({
            content: 'Delete user.'
        });
    }

}

export default UserController;