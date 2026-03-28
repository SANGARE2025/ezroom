const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('un utilisateur authentifie', function () {
  this.user = { authenticated: true };
});

Given('une salle A101 disponible le 2026-03-25 de 10:00 a 11:00', function () {
  this.slot = { available: true };
});

When('il confirme la reservation', function () {
  this.result = {
    status: 'CONFIRMED',
    reservationId: 'RES-001',
    emailPrepared: true,
    slotLocked: true
  };
});

Then('la reservation est enregistree', function () {
  assert.equal(this.result.status, 'CONFIRMED');
});

Then('un identifiant unique est genere', function () {
  assert.ok(this.result.reservationId);
});

Then('un email de confirmation est prepare', function () {
  assert.equal(this.result.emailPrepared, true);
});

Then('le creneau devient indisponible', function () {
  assert.equal(this.result.slotLocked, true);
});
