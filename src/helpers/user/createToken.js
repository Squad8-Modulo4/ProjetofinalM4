import jwt from "jsonwebtoken";

export const createToken = user => {
  const payload = {
    id: user.id,
    role: user.role,
  };

  const token = jwt.sign(payload, process.env.JWT_PASS, {
    expiresIn: "1d",
  });

  return token;
};
