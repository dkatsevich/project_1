import {postData} from "../services/services";

const forms = () => {
    function sendForm(formSelector, url) {
        const form = document.querySelector(formSelector);
        const statusMessage = {
            sending: "Sending",
            sucsess: "Sucsess",
            faillure: "Faillure",
        };

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const messageBlock = document.createElement('div');
            form.append(messageBlock);
            messageBlock.textContent = statusMessage.sending;
            const formData = new FormData(form);
            postData(url, JSON.stringify(Object.fromEntries(formData.entries())))
                .then(() => messageBlock.textContent = statusMessage.sucsess)
                .catch(() => messageBlock.textContent = statusMessage.faillure)
                .finally(
                    form.reset()
                );

            setTimeout(() => {
                messageBlock.remove();
            }, 5000);
        });
    }

    sendForm('.main_form', 'http://localhost:3000/requests');
}

export default forms;