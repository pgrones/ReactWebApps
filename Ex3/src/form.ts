import {messages} from "./main";
import {updateNotification} from "./navigation";
import {addMessage} from "./messages";

export function validateInput(): void {
    const message = document.getElementById("message") as HTMLInputElement;
    const subject = document.getElementById("subject") as HTMLTextAreaElement;
    const submitBtn = document.getElementById("submit") as HTMLButtonElement;
    submitBtn.disabled = !(message.value && message.value !== '' && subject && subject.value !== '');
}

export function submit(event: Event): void {
    event.preventDefault();
    const form = document.getElementById('form') as HTMLFormElement;
    const formData = new FormData(form);
    const message = {
        subject: formData.get("subject"),
        body: formData.get("message"),
        read: false
    };
    messages.push(message);
    addMessage();
    updateNotification();
    form.reset();
    const submitBtn = document.getElementById("submit") as HTMLButtonElement;
    submitBtn.disabled = true;
}
