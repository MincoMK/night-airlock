const monitors = [peripheral.find("monitor")] as any;

function setText(text: string) {
  for (const monitor of monitors) {
    monitor.clear();
    monitor.setCursorPos(1, 1);
    monitor.write(text);
  }
}

function setBackgroundColor(color: number) {
  for (const monitor of monitors) {
    monitor.setBackgroundColor(color);
  }
}

function init() {
  for (const monitor of monitors) {
    monitor.clear();
    monitor.setCursorPos(1, 1);
    monitor.setTextScale(2);
  }
}

export const MonitorControl = { setText, init, setBackgroundColor };
