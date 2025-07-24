// @vercel/nodejs22

export default function handler(req, res) {
  const original = { version: 22 };
  const cloned = structuredClone(original); 
  res.status(200).json({ message: 'Now on Node.js 22!', cloned });
}
