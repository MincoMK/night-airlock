import { Airlock } from "./airlock";
import { GUI } from "./gui";
import { MonitorControl } from "./monitor";

let state = true;
let inTransition = false;

GUI.setInternal();
Airlock.transitionInternalState();

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
    Airlock.transitionInternalState();
    GUI.setInternal();
    state = true;
    inTransition = false;
  }
});
