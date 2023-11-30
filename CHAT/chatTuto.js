document.addEventListener("DOMContentLoaded", function () {
  // Carregar mensagens do servidor ou inicializar um array vazio.
  let messages = [];

  const chatBox = document.querySelector(".chat-box");
  const messageInput = document.querySelector(".typing-area input");
  const sendButton = document.querySelector(".typing-area button");

  // Adicionar evento de clique ao botão de envio.
  sendButton.addEventListener("click", function () {
    sendMessage();
  });

  // Adicionar evento de tecla pressionada ao campo de entrada.
  messageInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  // Função para enviar uma mensagem.
  function sendMessage() {
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
      // Adicione a mensagem ao array de mensagens.
      messages.push({ type: "outgoing", text: messageText });

      // Atualize a exibição da caixa de chat.
      updateChatDisplay();

      // Envie a mensagem para o servidor (você deve implementar essa lógica).
      // Exemplo fictício:
      // sendToServer(messageText);

      // Limpe o campo de entrada.
      messageInput.value = "";
    }
  }

  // Função para receber uma mensagem.
  function receiveMessage(text) {
    // Adicione a mensagem ao array de mensagens.
    messages.push({ type: "incoming", text: text });

    // Atualize a exibição da caixa de chat.
    updateChatDisplay();
  }

  // Função para atualizar a exibição da caixa de chat.
  function updateChatDisplay() {
    // Limpe o conteúdo atual da caixa de chat.
    chatBox.innerHTML = "";

    // Adicione cada mensagem ao DOM.
    messages.forEach((message) => {
      const messageElement = document.createElement("div");
      messageElement.classList.add("chat", message.type);
      messageElement.innerHTML = `<div class="details"><p>${message.text}</p></div>`;
      chatBox.appendChild(messageElement);
    });

    // Role para baixo para mostrar a mensagem mais recente.
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // Exemplo fictício: recebendo uma mensagem do servidor a cada 3 segundos.
  setInterval(function () {
    const receivedMessage = "Oi, tudo bem";
    receiveMessage(receivedMessage);
  }, 30000);
});
