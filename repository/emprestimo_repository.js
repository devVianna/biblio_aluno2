// Supondo que você use um ORM como o Sequelize ou Mongoose
const LoanModel = require('../models/LoanModel'); 

async function create(loanData) {
  // Simplesmente salva os dados no banco
  const newLoan = await LoanModel.create(loanData);
  return newLoan;
}

// Outras funções de acesso ao banco...
async function findById(id) {
  return LoanModel.findByPk(id);
}