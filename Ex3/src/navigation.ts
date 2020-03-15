import {messages} from "./main";

export function onMessageClick(): void {
    const form = document.getElementById("formContainer");
    form.style.display = "none";
    const messages = document.getElementById("messageContainer");
    messages.style.display = "flex";
}

export function onAddMessageClick(): void {
    const form = document.getElementById("form") as HTMLFormElement;
    form.reset();
    const messages = document.getElementById("messageContainer");
    messages.style.display = "none";
    const formContainer = document.getElementById("formContainer");
    formContainer.style.display = "flex";
}

export function updateNotification(): void {
    const notification = document.getElementById("notification") as HTMLSpanElement;
    let unread = 0;
    for (let i = 0; i < messages.length; i++) {
        if (!messages[i].read)
            unread++;
    }
    if (unread > 0) {
        notification.textContent = unread > 5 ? "5+" : unread.toString();
        notification.style.visibility = "visible";
    } else
        notification.style.visibility = "hidden";
}
