function loadGame(rom, core) {

  document.getElementById("emulator-container").innerHTML = `
    <div style="width:640px;height:480px;margin:auto;">
      <div id="game"></div>
    </div>
  `;

  window.EJS_player = '#game';
  window.EJS_gameUrl = rom;
  window.EJS_core = core;
  window.EJS_pathtodata = 'emulator/data/';

  let script = document.createElement("script");
  script.src = "emulator/loader.js";

  document.body.appendChild(script);
}
