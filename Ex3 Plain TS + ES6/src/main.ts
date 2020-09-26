import {submit, validateInput} from "./form";
import {onAddMessageClick, onMessageClick} from "./navigation";

/**
 * Sets up all listeners and holds all messages in an array
 */
export const messages = [];

const messageBtn = document.getElementById("messageBtn");
const newBtn = document.getElementById("newMessageBtn");
const message = document.getElementById("message") as HTMLInputElement;
const subject = document.getElementById("subject") as HTMLTextAreaElement;
const form = document.getElementById("form");

messageBtn.onclick = onMessageClick;
newBtn.onclick = onAddMessageClick;
message.onkeyup = validateInput;
subject.onkeyup = validateInput;
form.onsubmit = submit;

