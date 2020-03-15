import {messages} from "./main";
import {updateNotification} from "./navigation";

export function updateAvailableMsg(): void {
    const availableMsg = document.getElementById("availableMsg");
    let unread = 0;
    for (let i = 0; i < messages.length; i++) {
        if (!messages[i].read)
            unread++;
    }
    availableMsg.textContent = (unread > 0 ? unread.toString() : "No") + " New Messages"
}

function markAsRead(event: MouseEvent): void {
    let div = event.target as HTMLDivElement;
    let id = div.id;
    if (!id) {
        div = div.parentElement as HTMLDivElement;
        id = div.id;
    }

    div.className = "messages";
    messages[parseInt(id)].read = true;

    updateAvailableMsg();
    updateNotification()
}

export function addMessage(): void {
    const container = document.getElementById("messageContainer");

    if (messages.length > 0) {
        const subjectDiv = document.createElement("div");
        subjectDiv.textContent = "Subject: " + messages[messages.length - 1].subject;

        const bodyDiv = document.createElement("div");
        bodyDiv.textContent = "Message: " + messages[messages.length - 1].body;

        const message = document.createElement("div");
        message.className = "messages unread";

        message.append(subjectDiv, bodyDiv);
        container.appendChild(message);
        message.id = (messages.length - 1).toString();
        message.onclick = markAsRead;
        updateAvailableMsg();
    }
}
