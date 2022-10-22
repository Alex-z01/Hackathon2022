/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
 const NOTIFICATION_TITLE = 'FinGenie - Brokerage'
 const NOTIFICATION_BODY = 'Purchased $200 SPY ETF'
 const CLICK_MESSAGE = 'Purchased $200 SPY ETF'

const modal = document.getElementById('modal_container');

document.getElementById('modal_open').addEventListener('click', async () => {
  console.log('OPEN');
  modal.classList.add('show');
})

document.getElementById('modal_submit').addEventListener('click', async () => {
  console.log('CLOSE');
  modal.classList.remove('show');

  new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE
})





