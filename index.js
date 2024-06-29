

// var div = document.getElementById("msgList");

// var autoMsgList = [
//   { name: "bot", msg: "how are you" },
//   { name: "bot", msg: "how may i help you" },
//   { name: "bot", msg: "are you busy today?" },
//   { name: "bot", msg: "Thank You" },
// ];

// var messagesList = [
//   { name: "ahmed", msg: "hello" },
//   { name: "bot", msg: "Yes" },
//   { name: "ahmed", msg: "there?" },
//   { name: "bot", msg: "yes" },
//   { name: "ahmed", msg: "okay, I'll call you" },
// ];

//  renderMsgs = () => {
//   for (let idx = 0; idx < messagesList.length; idx++) {
//     const element = messagesList[idx];
//     if (element.name == "ahmed") {
//       div.innerHTML += `<div class="bg-white px-2 mb-2 rounded-md w-max self-end">${element.msg}</div>`;
//     } else {
//       div.innerHTML += `<div class="bg-white px-2 mb-2 rounded-md w-max">${element.msg}</div>`;
//     }
//   }
// };

//  sendMsg = () => {
//   div.innerHTML = "";
//   var txt = document.getElementsByTagName("input")[0];
//   var msgData = { name: "ahmed", msg: txt.value };
//   messagesList.push(msgData);
//   renderMsgs();
//   autoReply();
//   txt.value = "";
// };

// function autoReply() {
//   setTimeout(() => {
//     div.innerHTML = "";
//     var random = Math.floor(Math.random() * autoMsgList.length);
//     messagesList.push(autoMsgList[random]);
//     renderMsgs();
//   }, 1000);
// }