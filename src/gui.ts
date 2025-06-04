import { MonitorControl } from "./monitor";

function setInternal() {
  MonitorControl.setBackgroundColor(colors.green);
  MonitorControl.setText("INTERN");
}

function setExternal() {
  MonitorControl.setBackgroundColor(colors.red);
  MonitorControl.setText("EXTERN");
}

function setTransitionToInternal() {
  MonitorControl.setBackgroundColor(colors.green);
  MonitorControl.setText("...");
}

function setTransitionToExternal() {
  MonitorControl.setBackgroundColor(colors.red);
  MonitorControl.setText("...");
}

function run(callback: () => any) {
  while (true) {
    os.pullEvent("monitor_touch");
    callback();
  }
}

export const GUI = {
  setExternal,
  setInternal,
  setTransitionToExternal,
  setTransitionToInternal,
  run,
};
