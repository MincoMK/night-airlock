const [doorExt, doorInt, detectR, oxyR, alarmR, emergencyAlarmR] = [
  peripheral.find("redstone_relay"),
] as any;

export class RedstoneIO {
  public constructor(
    private device: any,
    private dir: string,
  ) { }

  public setOutput(value: boolean) {
    this.device.setOutput(this.dir, value);
  }

  public getInput(): boolean {
    return this.device.getInput(this.dir);
  }
}

export const externalDoor = new RedstoneIO(doorExt, "top");
export const internalDoor = new RedstoneIO(doorInt, "top");
export const alarm = new RedstoneIO(alarmR, "bottom");
export const oxygenDetector = new RedstoneIO(detectR, "front");
export const oxygen = new RedstoneIO(oxyR, "bottom");
export const emergencyAlarm = new RedstoneIO(emergencyAlarmR, "bottom");
