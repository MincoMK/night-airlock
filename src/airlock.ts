import { alarm, externalDoor, internalDoor, oxygen } from "./airlock-raw";

let state = true;

function transitionInternalState() {
  if (!state) {
    alarm.setOutput(true);
    externalDoor.setOutput(false);
    os.sleep(3);
    oxygen.setOutput(true);
    os.sleep(2);
    internalDoor.setOutput(true);
    os.sleep(3);
    alarm.setOutput(false);
    state = true;
  }
}

function transitionExternalState() {
  if (state) {
    alarm.setOutput(true);
    internalDoor.setOutput(false);
    os.sleep(3);
    oxygen.setOutput(false);
    os.sleep(2);
    externalDoor.setOutput(true);
    os.sleep(3);
    alarm.setOutput(false);
    state = false;
  }
}

export const Airlock = { transitionInternalState, transitionExternalState };
