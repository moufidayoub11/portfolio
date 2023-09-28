document.addEventListener("DOMContentLoaded", () => {
    /* Input */
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const submitButton = document.getElementById("submit");

    /* Invalid Message */
    const nameInvalidMessage = document.getElementById("name_invalid");
    const emailInvalidMessage = document.getElementById("email_invalid");
    const messageInvalidMessage = document.getElementById("message_invalid");

    /* Invalid Icon*/
    const nameInvalidIcon = document.getElementById("name_invalid-icon");
    const emailInvalidIcon = document.getElementById("email_invalid-icon");
    const messageInvalidIcon = document.getElementById("message_invalid-icon");

    nameInput.addEventListener("input", () =>
        toggleDisplay(nameInput, nameInvalidMessage, nameInvalidIcon)
    );
    emailInput.addEventListener("input", () =>
        toggleDisplay(emailInput, emailInvalidMessage, emailInvalidIcon)
    );

    messageInput.addEventListener("input", () =>
        toggleDisplay(messageInput, messageInvalidMessage, messageInvalidIcon)
    );

    /* Handle Contact */
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;
        submitButton.innerText = "Sending";
        submitButton.disabled = true;

        await sendDiscordMessage(name, email, message);

        location.reload();
    });
});

function toggleDisplay(inputElement, invalidMessage, invalidIcon) {
    if (inputElement.validity.valid) {
        inputElement.style.borderBottom = "1px solid var(--accent)";
        invalidMessage.style.display = "none";
        invalidIcon.style.display = "none";
    } else {
        invalidMessage.style.display = "inline-block";
        invalidIcon.style.display = "inline-block";
        inputElement.style.borderBottom = "1px solid var(--invalid)";
    }
}

async function sendDiscordMessage(name, email, message) {
    const fullMessage = `--------------------------------
:envelope: **New Portfolio Contact Message**\n
---
**Name**: ${name}
**Email**: ${email}
**Message**: ${message}
---\n
:bell: *A new message has been received from your portfolio contact.*
--------------------------------
<@207870194952044544>
	`;
    const webhookURL =
        "https://discord.com/api/webhooks/1156998940424683582/iavfvV8fh2LARVl4kWlXAEIRQjJTk8lcDmiVwU--ciiFJVpLRIBz6xBmeuk6qh5Y7YeR";

    await fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: fullMessage,
        }),
    })
        .then((response) => {
            if (response.ok) {
                console.log("Message sent successfully.");
            } else {
                console.error("Failed to send message.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
