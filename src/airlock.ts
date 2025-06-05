import {
  alarm,
  externalDoor,
  internalDoor,
  oxygen,
  oxygenDetector,
  emergencyAlarm,
} from "./airlock-raw";
import { playFile } from "./audio";

const speaker = peripheral.find("speaker");

function transitionInternalState() {
  alarm.setOutput(true);
  externalDoor.setOutput(false);
  os.sleep(3);
  oxygen.setOutput(true);
  os.sleep(3);
  for (let i = 0; i < 3; i++) {
    if (oxygenDetector.getInput()) {
      internalDoor.setOutput(true);
      parallel.waitForAll(
        () => playFile(speaker, "online.dfpwm"),
        () => {
          os.sleep(3);
          alarm.setOutput(false);
        },
      );
      return true;
    }
    os.sleep(1);
  }
  parallel.waitForAll(
    () => playFile(speaker, "oxy.dfpwm"),
    () => {
      internalDoor.setOutput(false);
      emergencyAlarm.setOutput(true);
      os.sleep(2);
      oxygen.setOutput(false);
      externalDoor.setOutput(true);
      os.sleep(3);
      emergencyAlarm.setOutput(false);
      alarm.setOutput(false);
      return false;
    },
  );
  return false;
}

function transitionExternalState() {
  alarm.setOutput(true);
  internalDoor.setOutput(false);
  os.sleep(3);
  oxygen.setOutput(false);
  playFile(speaker, "safe.dfpwm");
  externalDoor.setOutput(true);
  os.sleep(3);
  alarm.setOutput(false);
}

export const Airlock = { transitionInternalState, transitionExternalState };
