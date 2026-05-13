interface EmailData {
  email: string;
  name: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<Response> {
  const apiEndpoint = "/api/email";
  return fetch(apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
