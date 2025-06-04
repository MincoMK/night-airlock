const [doorExt, doorInt, detectR, oxyR, alarmR] = [
  peripheral.find("redstone_relay"),
] as any;

export class RedstoneOut {
  public constructor(
    private device: any,
    private dir: string,
  ) { }

  public setOutput(value: boolean) {
    this.device.setOutput(this.dir, value);
  }
}

export const externalDoor = new RedstoneOut(doorExt, "top");
export const internalDoor = new RedstoneOut(doorInt, "top");
export const alarm = new RedstoneOut(alarmR, "bottom");
export const oxygen = new RedstoneOut(oxyR, "bottom");
