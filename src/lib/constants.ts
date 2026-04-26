export const WHATSAPP_NUMBER = "5519971528684";
export const SITE_URL = "https://oticastheo.com.br"; // Altere aqui para o domínio oficial quando estiver pronto

export const getProductLink = (id: string | number) => {
  // Se estiver em localhost, podemos usar o SITE_URL oficial ou o dinâmico
  const baseUrl = window.location.hostname === 'localhost' 
    ? SITE_URL 
    : window.location.origin;
    
  return `${baseUrl}/produto/${String(id).replace('_copy', '')}`;
};
