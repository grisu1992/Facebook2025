export async function POST(req: Request) {
  const data = await req.formData();
  console.log("🔥 TEST - Form ricevuto:", data);
  return new Response("Tutto ok");
}
