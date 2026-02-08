// WhatsApp number - change this to your number
export const WHATSAPP_NUMBER = "5511999999999";

export const getWhatsAppLink = (productName?: string) => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (productName) {
    return `${baseUrl}?text=Olá,%20tenho%20interesse%20no%20peptídeo%20${encodeURIComponent(productName)}`;
  }
  return `${baseUrl}?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista`;
};

export type ProductCategory = "Músculo" | "Emagrecimento" | "Nootrópicos" | "Recuperação";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  benefit: string;
  tag?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "bpc-157",
    name: "BPC-157",
    category: "Recuperação",
    description: "Peptídeo de regeneração tecidual com alta bioatividade para reparo muscular e articular.",
    benefit: "Recuperação acelerada",
    tag: "Best Seller",
  },
  {
    id: "tb-500",
    name: "TB-500",
    category: "Recuperação",
    description: "Timosina Beta-4 para cicatrização avançada e redução de inflamação sistêmica.",
    benefit: "Anti-inflamatório",
  },
  {
    id: "cjc-1295",
    name: "CJC-1295",
    category: "Músculo",
    description: "Análogo de GHRH para estimulação sustentada do hormônio do crescimento.",
    benefit: "Ganho muscular",
    tag: "Popular",
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin",
    category: "Músculo",
    description: "Secretagogo de GH seletivo com perfil de segurança superior.",
    benefit: "Massa magra",
  },
  {
    id: "semaglutida",
    name: "Semaglutida",
    category: "Emagrecimento",
    description: "Agonista GLP-1 de última geração para controle metabólico e perda de peso.",
    benefit: "Controle de peso",
    tag: "Tendência",
  },
  {
    id: "tirzepatida",
    name: "Tirzepatida",
    category: "Emagrecimento",
    description: "Dual agonista GIP/GLP-1 para otimização metabólica avançada.",
    benefit: "Metabolismo",
  },
  {
    id: "semax",
    name: "Semax",
    category: "Nootrópicos",
    description: "Neuropeptídeo sintético para aprimoramento cognitivo e neuroproteção.",
    benefit: "Foco & Cognição",
  },
  {
    id: "selank",
    name: "Selank",
    category: "Nootrópicos",
    description: "Peptídeo ansiolítico com propriedades nootrópicas e imunomoduladoras.",
    benefit: "Redução de ansiedade",
  },
];

export const CATEGORIES: ProductCategory[] = ["Músculo", "Emagrecimento", "Nootrópicos", "Recuperação"];
