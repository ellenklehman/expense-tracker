describe("Purchase", function() {
  describe("total", function() {
    it("multiplies the quantity by the cost", function() {
      var testPurchase = Object.create(Purchase);
      testPurchase.total(7);
      testPurchase.cost.should.equal(70);
    });
  });
});

// describe("BankAccount", function() {
//   describe("deposit", function() {
//     it("adds the amount to the balance", function() {
//       var testBankAccount = Object.create(BankAccount);
//       testBankAccount.deposit(10);
//       testBankAccount.balance.should.equal(10);
//     });
//   });

//   describe("withdraw", function() {
//     it("subtracts the amount from the balance", function() {
//       var testBankAccount = Object.create(BankAccount);
//       testBankAccount.withdraw(10);
//       testBankAccount.balance.should.equal(-10);
//     });
//   });
// });
