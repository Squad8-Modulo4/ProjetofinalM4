export const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "Erro interno do servidor.";
  console.error(error, "<- Log de erro, servidor rodando");
  return res.status(statusCode).json({ message });
};
