const loanRepository = require('../repositories/loan_repository');
const clientRepository = require('../repositories/client_repository');
const LoanCalculator = require('../utils/LoanCalculator'); // Utilitário de cálculo

async function processRequest({ clientId, amount, termInMonths }) {
  // 1. Validação de Regras de Negócio Simples
  if (amount < 1000) {
    throw { message: 'O valor mínimo do empréstimo é R$ 1000.', isClientError: true };
  }

  // 2. Orquestração: Buscar dados do Cliente
  const client = await clientRepository.findById(clientId);
  if (!client) {
    throw { message: 'Cliente não encontrado.', isClientError: true };
  }
  
  // 3. Lógica de Elegibilidade Complexa
  if (amount > client.monthlyIncome * 5) {
      throw { message: 'Empréstimo excede o limite de crédito do cliente.', isClientError: true };
  }
  
  // 4. Cálculo
  const { monthlyPayment, totalInterest } = LoanCalculator.calculate(amount, termInMonths);
  
  // 5. Estruturação dos atributos a serem salvos
  const newLoanData = {
    clientId: clientId,
    amount: amount,
    termInMonths: termInMonths,
    monthlyPayment: monthlyPayment,
    status: 'PENDING_APPROVAL', // Atributo definido pela lógica
    createdAt: new Date()
  };

  // 6. Persistência: Chamar o Repository para salvar os atributos
  const loan = await loanRepository.create(newLoanData);

  return loan;
}