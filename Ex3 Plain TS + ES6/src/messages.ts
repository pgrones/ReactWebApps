import {messages} from "./main";
import {updateNotification} from "./navigation";

/**
 * Updates the amount of unread messages on the message page
 */
export function updateAvailableMsg(): void {
    const availableMsg = document.getElementById("availableMsg");
    let unread = 0;
    for (let i = 0; i < messages.length; i++) {
        if (!messages[i].read)
            unread++;
    }
    availableMsg.textContent = (unread > 0 ? unread.toString() : "No") + " New Messages"
}

/**
 * Marks a message as read, updating the notification counters and removing the click event
 * @param event
 */
function markAsRead(event: MouseEvent): void {
    let div = event.target as HTMLDivElement;
    let id = div.id;
    if (!id) {
        div = div.parentElement as HTMLDivElement;
        id = div.id;
    }

    div.className = "messages";
    div.removeEventListener("click", markAsRead);
    // The id of the div is the index of the message in the array
    messages[parseInt(id)].read = true;

    updateAvailableMsg();
    updateNotification()
}

/**
 * Adds a new message to the message array as well as to the DOM
 */
export function addMessage(): void {
    if (messages.length > 0) {
        const container = document.getElementById("messageContainer");

        const subjectDiv = document.createElement("div");
        subjectDiv.textContent = "Subject: " + messages[messages.length - 1].subject;

        const bodyDiv = document.createElement("div");
        bodyDiv.textContent = "Message: " + messages[messages.length - 1].body;

        const message = document.createElement("div");
        message.className = "messages unread";

        message.append(subjectDiv, bodyDiv);
        container.appendChild(message);
        // Setting the index of the message in the array as id of the div
        message.id = (messages.length - 1).toString();
        message.addEventListener("click", markAsRead);
        updateAvailableMsg();
    }
}
