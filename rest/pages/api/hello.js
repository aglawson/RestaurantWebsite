// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export function menu() {
  window.open('/menu');
}

export function order() {
  window.open('/order');
}

export function about() {
  window.open('/about');
}