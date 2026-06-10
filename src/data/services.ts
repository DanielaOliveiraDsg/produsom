import Lighting from '@/assets/images/photos/festa1.jpg';
import Lighting2 from '@/assets/images/photos/iluminacao-festa.jpg';
import Lighting3 from '@/assets/images/photos/festa2.jpg';
import Lighting4 from '@/assets/images/photos/iluminacao-teatro.jpg';
import Lighting5 from '@/assets/images/photos/teatro2.jpg';
import Sound from '@/assets/images/photos/sound.jpg';
import Imaging from '@/assets/images/photos/imaging.jpg';
import Imaging2 from '@/assets/images/photos/painel-led.jpg'
import Structures from '@/assets/images/photos/equipments.jpg';
import Structures2 from '@/assets/images/photos/infinity-paris.jpg';
import Structures3 from '@/assets/images/photos/equipments2.jpg'



export interface Service {
  id: string;
  title: string;
  image: string; //thumbnail for Home
  link: string;
  description_pt?: string;
  videoUrl?: string;
  gallery?: string[];
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Iluminação',
    image: Lighting,
    link: '/servicos#iluminacao',
    description_pt: 'Transformamos ambientes com sistemas de LED de alta performance e moving heads, criando a atmosfera perfeita para seu evento.',
    gallery: [Lighting, Lighting2, Lighting3, Lighting4, Lighting5],
  },
  {
    id: '2',
    title: 'Sonorização',
    image: Sound,
    link: '/servicos#sonorizacao',
    description_pt: 'Áudio cristalino e potente. Utilizamos equipamentos de ponta para garantir que cada batida e cada palavra sejam ouvidas com perfeição.',
    videoUrl: '/assets/videos/sound-demo.mp4',
  },
  {
    id: '3',
    title: 'Imagens',
    image: Imaging,
    link: '/servicos#imagens',
    description_pt: 'Soluções visuais completas, desde painéis de LED de alta resolução até projeções mapeadas que elevam a experiência do público.',
    gallery: [Imaging, Imaging2]
  },
  {
    id: '4',
    title: 'Estruturas',
    image: Structures,
    link: '/servicos#estruturas',
    description_pt: 'Montagem técnica segura e estética para palcos, stands e pistas de dança, garantindo a base sólida que seu evento merece.',
    gallery: [Structures2, Structures, Structures3]
  },
];