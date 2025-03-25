// const secretKey = process.env.JWT_SECRET;
const secretKey = "yakout";

if (!secretKey) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

module.exports = {
  secretKey,
  options: {
    expiresIn: '1h'
  }
};
