function bankAccount() {
  this.accounts = {};
  this.currentId = 2209146835;
}
bankAccount.prototype.assignID = function () {
  this.currentId += 1260;
  return this.currentId;
};
bankAccount.prototype.addAccount = function (account) {
  account.id = this.assignID();
  this.accounts[account.id] = account
}
