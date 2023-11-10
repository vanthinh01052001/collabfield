document.addEventListener('turbo:load', function() { 
  let chatWindowsCount = document.querySelectorAll('.conversation-window').length;
  console.log('run', chatWindowsCount)
  if (window.gon.last_visible_chat_window == null && chatWindowsCount > 0) {
      window.gon.last_visible_chat_window = chatWindowsCount;
  }

  if (window.gon.hidden_chats == null) {
      window.gon.hidden_chats = 0;
  }

  window.addEventListener('resize', hideShowChatWindow);

  positionChatWindows();
  hideShowChatWindow();
});

function positionChatWindows() {
  let chatWindowsCount = document.querySelectorAll('.conversation-window').length;

  if (window.gon.hidden_chats + window.gon.last_visible_chat_window !== chatWindowsCount) {
      if (window.gon.hidden_chats == 0) {
          window.gon.last_visible_chat_window = chatWindowsCount;
      }
  }

  document.querySelectorAll('.conversation-window').forEach(function(chatWindow, index) {
      let rightPosition = index * 410;
      chatWindow.style.right = rightPosition + 'px';
  });
}

function hideShowChatWindow() {
  if (document.querySelectorAll('.conversation-window').length < 1) {
      return;
  }
  let offset = document.querySelector('.conversation-window:nth-of-type(' + window.gon.last_visible_chat_window + ')').getBoundingClientRect();

  if (offset.left < 50 && window.gon.last_visible_chat_window !== 1) {
      document.querySelector('.conversation-window:nth-of-type(' + window.gon.last_visible_chat_window + ')').style.display = 'none';
      window.gon.hidden_chats++;
      window.gon.last_visible_chat_window--;
  }

  if (offset.left > 550 && window.gon.hidden_chats !== 0) {
      window.gon.hidden_chats--;
      window.gon.last_visible_chat_window++;
      document.querySelector('.conversation-window:nth-of-type(' + window.gon.last_visible_chat_window + ')').style.display = 'initial';
  }
}
