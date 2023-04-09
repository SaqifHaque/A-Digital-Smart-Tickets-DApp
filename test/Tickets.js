const Tickets = artifacts.require('Tickets');
const assert = require('assert');

contract('Tickets', (accounts) => {
    const BUYER = accounts[1];
    const ticket_id = 0;

    it('should allow a user to buy a ticket', async () => {
        const instance = await Tickets.deployed();
        const originalTicket = await instance.tickets(
            ticket_id
        );
        await instance.buyTicket(ticket_id, {
            from: BUYER,
            value: originalTicket.price
        });
        const updatedTicket = await instance.tickets(
            ticket_id
        );
        assert.equal(
            updatedTicket.owner,
            BUYER,
            'the buyer should now own this ticket'
        );
    })
})

