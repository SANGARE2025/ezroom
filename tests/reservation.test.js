const { reserveSlot } = require('../src/reservation');

test('reserve an available slot', () => {
  const result = reserveSlot({
    room: 'A101',
    date: '2026-03-25',
    start: '10:00',
    end: '11:00',
    available: true
  });

  expect(result.status).toBe('CONFIRMED');
  expect(result.reservationId).toBeDefined();
});
