const WHATSAPP_NUMBER = '94764025965';

export function getProductWhatsAppLink(productName: string, price: number): string {
  const text = `Hi, I'm interested in ${productName} - LKR ${price.toLocaleString()}. Please share more details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppDirectLink(): string {
  const text = "Hello Ai Collection's! I'd like to inquire about your products.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getOrderMessage(productName: string, price: number): string {
  return `Hello Ai Collection's! I'm interested in ordering:\n\nProduct: ${productName}\nPrice: LKR ${price.toLocaleString()}\n\nPlease let me know how to proceed with my order.`;
}

export function getGeneralMessage(): string {
  return `Hello Ai Collection's! I'd like to inquire about your products. Can you help me?`;
}
