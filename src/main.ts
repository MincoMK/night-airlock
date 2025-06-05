import { Airlock } from "./airlock";
import { GUI } from "./gui";
import { MonitorControl } from "./monitor";

let state = false;
let inTransition = false;

GUI.setExternal();
Airlock.transitionExternalState();

GUI.run(() => {
  if (inTransition) return;
  if (state) {
    GUI.setTransitionToExternal();
    inTransition = true;
    Airlock.transitionExternalState();
    GUI.setExternal();
    state = false;
    inTransition = false;
  } else {
    GUI.setTransitionToInternal();
    inTransition = true;
    if (!Airlock.transitionInternalState()) {
      GUI.setExternal();
      state = false;
      inTransition = false;
      return;
    }
    GUI.setInternal();
    state = true;
    inTransition = false;
  }
});
