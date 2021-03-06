export const EMPTY_ACCOUNT = (id: string) => ({
  account_id: id,
  dynamic_inputs: [],
  dynamic_outputs: [],
  static_streams: [],
  last_action: null,
  ready_to_withdraw: [],
  total_incoming: [],
  total_outgoing: [],
  total_received: [],
  is_external_update_enabled: false,
});

// Multiply your stream speed by one of this constants, to receive amount transferred over period
export const TICK_TO_MS = 1e6;
export const TICK_TO_S = 1e9;
export const TICK_TO_MINUTE = TICK_TO_S * 60;
export const TICK_TO_HOUR = TICK_TO_MINUTE * 60;
export const TICK_TO_DAY = TICK_TO_HOUR * 24;
export const TICK_TO_WEEK = TICK_TO_DAY * 7;
export const TICK_TO_MONTH = TICK_TO_WEEK * 4;
export const TICK_TO_YEAR = TICK_TO_MONTH * 12;
