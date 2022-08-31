const STATES = {
  LIT: "lit",
  UNLIT: "unlit",
  BROKEN: "broken",
};
function lightBulb() {
  const { LIT, UNLIT, BROKEN } = STATES;
  let state = UNLIT;
  return {
    state() {
      console.log(state);
      return state;
    },
    toggle() {
      switch (state) {
        case LIT:
          state = UNLIT;
          break;
        case UNLIT:
          state = LIT;
          break;
      }
    },
    break() {
      state = BROKEN;
    },
  };
}

const bulb = lightBulb();
bulb.state();
bulb.toggle();
// bulb.toggle()
bulb.state();
bulb.break();
bulb.state();
