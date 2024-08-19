class AuthMiddleware {
    handle(req, res, next) {
        const { authorization } = req.headers;
        if (authorization) {
            const jwtToken = authorization.split(' ')[1];
            if (jwtToken) {
                try {
                    // TODO : Authentication service
                    next();
                } catch (error) {
                    return res.status(401)
                    .send({
                        code: 401,
                        message: 'Unauthorized',
                    });
                }
            } else {
                return res.status(401)
                .send({
                    code: 401,
                    message: 'Unauthorized',
                });
            }
        }
    }
}

module.exports = new AuthMiddleware();
