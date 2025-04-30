import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        console.log("token", token);
        
        if (!token) {
            return res.status(401).json({ 
                errorMessage: "Unauthorized", 
                success: false 
            });
        }

        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        console.log("decode", decode);

        if (!decode) {
            return res.status(401).json({ 
                errorMessage: "Unauthorized", 
                success: false 
            });
        }
        
        req.id = decode.userId;
        req.user = decode;

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ 
            errorMessage: "Invalid token", 
            success: false 
        });
    }
}

export default auth;