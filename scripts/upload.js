(async () => {
  const x =
    "https://p.wrl.ink/raw/" +
    (
      await (
        await fetch("https://p.wrl.ink/documents", {
          method: "POST",
          body: require("fs").readFileSync("dist/bundle.lua", "utf8"),
        })
      ).json()
    ).key;
  console.log(x);
})();
