import * as dfpwm from "./dfpwm";

export function playFile(speaker: any, path: string) {
  const decoder = dfpwm.make_decoder();

  for (const chunk of io.lines(path, 16 * 1024)) {
    const buffer = decoder(chunk);

    while (!speaker.playAudio(buffer)) {
      os.pullEvent("speaker_audio_empty");
    }
  }
}
