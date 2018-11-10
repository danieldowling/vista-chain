class TransactionPool {
    constructor() {
        this.transactions = [];
    }

    updateOrAddTransaction(transaction) {
        let transactionWitId = this.transactions.find(t => t.id);

        if (transactionWitId) {
            this.transactions[this.indexOf(transactionWitId)] = transaction;
        } else {
            this.transactions.push(transaction);
        }
    }
}

module.exports = TransactionPool;