const chatbotIcon = document.getElementById('chatbotIcon');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChatbot = document.getElementById('closeChatbot');
const sendMessage = document.getElementById('sendMessage');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotMessages = document.getElementById('chatbotMessage');

chatbotIcon.addEventListener('click', () => {
    chatbotIcon.style.display = 'none';
    chatbotWindow.style.display = 'flex';
});

closeChatbot.addEventListener('click', () => {
    chatbotIcon.style.display = 'flex';
    chatbotWindow.style.display = 'none';
});

async function handleSend() {
    const question = chatbotInput.value.trim();
    if (!question) return;

    const userMsg = document.createElement('div');
    userMsg.textContent = `👤 ${question}`;
    userMsg.style.background = '#e0f7fa';
    userMsg.style.padding = '5px';
    userMsg.style.borderRadius = '8px';
    chatbotMessages.appendChild(userMsg);
    chatbotInput.value = '';

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question })
        });

        const result = await response.json();
        const botMsg = document.createElement('div');
        botMsg.textContent = `🤖 ${result.answer}`;
        botMsg.style.background = '#ffebee';
        botMsg.style.padding = '5px';
        botMsg.style.borderRadius = '8px';
        chatbotMessages.appendChild(botMsg);
    } catch (error) {
        const errorMsg = document.createElement('div');
        errorMsg.textContent = `🤖 서버와 연결할 수 없습니다.`;
        errorMsg.style.color = 'red';
        chatbotMessages.appendChild(errorMsg);
    }

    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

sendMessage.addEventListener('click', handleSend);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});
