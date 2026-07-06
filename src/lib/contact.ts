export const CONTACT_EMAIL = "info@avgcstudios.com";

export type ContactFormPayload = {
  name: string;
  org: string;
  email: string;
  phone?: string;
  message: string;
};

/** Forwards conversation requests to the AVGC Studios inbox via FormSubmit. */
export async function submitConversationRequest(payload: ContactFormPayload): Promise<void> {
  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      org: payload.org,
      email: payload.email,
      phone: payload.phone ?? "",
      message: payload.message,
      _subject: `New conversation request from ${payload.name}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to send your request. Please try again or email us directly.");
  }

  const data = (await response.json()) as { success?: string };
  if (!data.success) {
    throw new Error("Unable to send your request. Please try again or email us directly.");
  }
}
