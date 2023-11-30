const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;

// Objeto de mapeamento de perguntas e respostas programadas
const programmedResponses = {
  "Qual é o seu nome?": "Meu nome é Klimt.",
  "qual seu nome?": "Meu nome é Klimt.",
  "Qual seu nome?": "Meu nome é Klimt.",
  "Como você está?": "Estou bem, obrigado por perguntar!",
  "Boa tarde": "Boa tarde!",
  "boa tarde": "Boa tarde!",
  "Bom dia": "Bom dia!",
  "bom dia": "Bom dia!",
  Oi: "Olá, seja bem-vindo! O que deseja fazer? 1. Saber mais sobre o site. 2. Fazer o cadastro. 3. Fazer Login. 4. Ir para o Blog. 5. Ver Planos.",
  "oi Klimt":
    "Olá, seja bem-vindo! O que deseja fazer? 1. Saber mais sobre o site. 2. Fazer o cadastro. 3. Fazer Login. 4. Ir para o Blog. 5. Ver Planos.",
  oi: "Olá, seja bem-vindo! O que deseja fazer? 1. Saber mais sobre o site. 2. Fazer o cadastro. 3. Fazer Login. 4. Ir para o Blog. 5. Ver Planos.",
  1: "O site Octofy foi feito por jovens para jovens. O site aborda assuntos como a vida financeira na juventude e fornece informações para lidar com essa área da vida de maneira eficaz. O site também disponibiliza cursos básicos que podem ser necessários para começar uma carreira, aprender sobre finança etc.",
  2: "Para fazer seu Cadastro clique em  'Cadastrar-se' no header acima.",
  3: "Para fazer Login clique em 'Login' no header acima.",
  4: "Para ir ao Blog clique em 'Blog' no header acima. ",
  5: "Para ver os planos oferecidos clique em 'Planos' no header acima. ",
  Obrigado:
    "Foi um prazer te ajudar! Caso deseje fazer algo mais, digite 'Sim'.Caso contrário, digite 'Não'.",
  obrigado:
    "Foi um prazer te ajudar! Caso deseje fazer algo mais, digite 'Sim'. Caso contrário, digite 'Não'.",

  Obrigada:
    "Foi um prazer te ajudar! Caso deseje fazer algo mais, digite 'Sim'. Caso contrário, digite 'Não'.",

  obrigada:
    "Foi um prazer te ajudar! Caso deseje fazer algo mais, digite 'Sim'. Caso contrário, digite 'Não'.",
  não: "Espero ter te ajudado, Tchau👋!",
  nao: "Espero ter te ajudado, Tchau👋!",
  Não: "Espero ter te ajudado, Tchau👋!",
  sim: "O que deseja fazer? 1. Saber mais sobre o site. 2. Fazer o cadastro. 3. Fazer Login. 4. Ir para o Blog. 5. Ver Planos.",
};

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `<img class="robozinho" src="chatblt/img/robozinho do chat.png" alt=""><p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

const generateResponse = () => {
  const programmedResponse = programmedResponses[userMessage];
  if (programmedResponse) {
    return programmedResponse;
  } else {
    return "Desculpe, não entendi.";
  }
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    const responseMessage = generateResponse();
    const incomingChatLi = createChatLi(responseMessage, "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }, 600);

  // Limpar o campo de entrada
  chatInput.value = "";
};

// Adicionar evento para enviar mensagem ao pressionar Enter
chatInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleChat();
  }
});

// Adicionar evento de clique no botão de envio
sendChatBtn.addEventListener("click", handleChat);
chatbotCloseBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);
chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
