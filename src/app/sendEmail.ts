interface EmailData {
  email: string;
  name: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<Response> {
  const apiEndpoint = "/api/email";
  return fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
