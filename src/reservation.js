function reserveSlot(slot) {
  if (!slot.available) {
    throw new Error('SLOT_NOT_AVAILABLE');
  }
  return {
    status: 'CONFIRMED',
    reservationId: `RES-${Date.now()}`
  };
}

module.exports = { reserveSlot };
