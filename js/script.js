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
bankAccount.prototype.deleteAccount = function (id) {
  if (this.accounts[id] === undefined) {
    return false;
  }
  delete this.accounts[id];
  return true;
};

bankAccount.prototype.findAccount = function (id) {
  if (this.accounts[id] != undefined) {
    return this.accounts[id];
  }
  return false;
};
