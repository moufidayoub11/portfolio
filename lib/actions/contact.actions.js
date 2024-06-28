"use server"

export async function getContactData(formState, formData) {
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');
    console.log(firstname, lastname, email, phone, service, message);
    if (!firstname || !lastname) {
        return { error: true, message: "Please enter your full name" };
    }
    if (!email) {
        return { error: true, message: "Please enter your email" };
    }
    if (!phone) {
        return { error: true, message: "Please enter your phone number" };
    }
    if (!service) {
        return { error: true, message: "Please select a service" };
    }
    if (!message) {
        return { error: true, message: "Please enter your message" };
    }
    await sendDiscordMessage(firstname, lastname, email, phone, message, service);
    return { error: false, message: "Sent!" };
}



async function sendDiscordMessage(fname, lname, email, phone,message, service) {
    const fullMessage = `--------------------------------
:envelope: **New Portfolio Contact Message**\n
---
**First Name**: ${fname}
**Last Name**: ${lname}
**Phone**: ${phone}
**Email**: ${email}
**Service**: ${service}
**Message**: ${message}
---\n
:bell: *A new message has been received from your portfolio contact.*
--------------------------------
<@207870194952044544>
	`;
    const webhookURL = process.env.DISCORD_WEBHOOK_URL;

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