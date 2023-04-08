const Migrations  = artifacts.require("Tickets");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
}