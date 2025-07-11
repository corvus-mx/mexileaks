export interface Leak {
  id: string;
  title: string;
  date: string;
  summary: string;
  url: string;
  category: string;
  verified: boolean;
  content?: string;
  evidenceFiles?: Array<{
    name: string;
    url: string;
    type: string;
    size?: string;
  }>;
  hashFile?: string;
  torrentFile?: string;
}

export const leaks: Leak[] = [
  {
    id: 'caso-001',
    title: 'Corrupción en licitaciones públicas federales',
    date: '2025-01-15',
    summary: 'Documentos internos revelan manipulación sistemática en procesos de licitación de obras públicas por un valor de $2,400 millones de pesos. Incluye comunicaciones entre funcionarios y empresas privadas.',
    url: '/filtraciones/2025/caso-001',
    category: 'Corrupción',
    verified: true,
    evidenceFiles: [
      {
        name: 'Evidencia principal',
        url: '/filtraciones/2025/evidencias/evidencia1.pdf',
        type: 'PDF',
        size: '2.3 MB'
      }
    ],
    hashFile: '/filtraciones/2025/hash.txt',
    torrentFile: '/filtraciones/2025/torrents/caso-001.torrent'
  }
];

export function getLeakById(id: string): Leak | undefined {
  return leaks.find(leak => leak.id === id);
}

export function getAllLeaks(): Leak[] {
  return leaks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}