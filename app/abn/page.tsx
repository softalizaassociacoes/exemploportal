import type { Metadata } from "next";
import Image from "next/image";
import styles from "./abn.module.css";

export const metadata: Metadata = {
  title: "ABN — Academia Brasileira de Neurologia",
  description:
    "Proposta visual da Softaliza: MVP do novo portal institucional da Academia Brasileira de Neurologia.",
  openGraph: {
    title: "ABN — MVP do novo portal institucional",
    description:
      "Proposta visual preparada pela Softaliza para a Academia Brasileira de Neurologia.",
    type: "website",
    locale: "pt_BR",
    url: "https://exemplo.softaliza.com.br/abn",
    siteName: "Proposta Softaliza — ABN",
    images: [{ url: "/abn/og.png", width: 1200, height: 630, alt: "MVP do novo portal da ABN — proposta Softaliza" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABN — MVP do novo portal institucional",
    description: "Proposta visual preparada pela Softaliza para a ABN.",
    images: ["/abn/og.png"],
  },
};

const official = "https://abneuro.org.br";
// Nesta demonstração todos os acessos do associado apontam para o mockup da
// própria página — a área restrita real é a plataforma Softaliza integrada.
const memberArea = "#associado";

// Atalhos que hoje exigem passar por menus de vários níveis: a queixa central
// da ABN é o número de cliques até o conteúdo.
const atalhos = [
  ["Título de Especialista", "Editais, inscrições e listas de aprovados"],
  ["Encontre seu médico", "Busca pública por nome, cidade e especialidade"],
  ["ABN Lab e webinars", "Agenda, inscrição e certificados"],
  ["Biblioteca", "Diretrizes, recomendações e documentos"],
  ["Departamentos Científicos", "23 departamentos, com página própria"],
  ["Área do associado", "Anuidade, votações, carteirinha e EMC"],
];

// Conteúdo real publicado hoje em abneuro.org.br (julho/2026) — as capas são
// as artes que a própria ABN publicou em cada notícia.
const noticias = [
  ["30 JUN 2026", "ABN Lab", "PIDC em foco: quando suspeitar, como confirmar e como tratar", "/abn/thumb-abnlab.jpg"],
  ["26 JUN 2026", "Institucional", "Dia Mundial do Cérebro 2026", "/abn/thumb-brainday.jpg"],
  ["14 MAI 2026", "Ciência", "Novos horizontes em ADEM: avanços no entendimento imunológico e seu contínuo com MOGAD", "/abn/thumb-adem.jpg"],
];

// Banners reais do site atual — no portal novo, a equipe troca pelo painel.
const banners = [
  ["/abn/banner-neuro26.jpg", "NEURO26 — XXXII Congresso Brasileiro de Neurologia"],
  ["/abn/banner-premio.jpg", "Prêmio Academia Brasileira de Neurologia"],
  ["/abn/banner-brainday.jpg", "Dia Mundial do Cérebro 2026"],
];

const departamentos = [
  "Cefaleia", "Dor", "Epilepsia", "História da Neurologia", "Moléstias Neuromusculares",
  "Neuroepidemiologia", "Neurofisiologia Clínica", "Neurogenética", "Neuroimunologia",
  "Neuroinfecção", "Neurologia Cognitiva e do Envelhecimento", "Neurologia Geral",
  "Neurologia Infantil", "Neuro-oncologia", "Neuropatias Periféricas", "Neurossonologia",
  "Reabilitação Neurológica", "Sono", "Transtornos do Movimento",
  "Traumatismo Cranioencefálico", "Distúrbios Vestibulares e do Equilíbrio",
  "Doenças do Neurônio Motor / ELA", "Líquido Cefalorraquiano",
];

const publicacoes = [
  ["Arquivos de Neuro-Psiquiatria", "A revista científica da ABN, indexada e de acesso aberto."],
  ["Dementia & Neuropsychologia", "Publicação dedicada à neurologia cognitiva e do envelhecimento."],
  ["Continuum Neurology", "Educação médica continuada em parceria internacional."],
  ["ABNews", "O informativo institucional da Academia, na área do associado."],
];

const educacao = [
  ["ABN Lab", "Webinars ao vivo com os Departamentos Científicos, com certificado."],
  ["ABNeuro.TV", "Videoteca da Academia, aberta ao associado."],
  ["Educação Médica Continuada", "Trilhas, cursos e pontuação para a titulação."],
  ["Oportunidades", "Residências, bolsas, fellowships e vagas em neurologia."],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function AbnProposal() {
  return (
    <main className={styles.page}>
      {/* Aviso de abertura: fecha só com CSS (checkbox), sem depender de JavaScript */}
      <input type="checkbox" id="fechar-aviso" className={styles.noticeToggle} aria-hidden="true" />
      <div className={styles.notice} role="note" aria-label="Aviso sobre esta demonstração">
        <div className={styles.noticeCard}>
          <div className={styles.noticeLogos}>
            <Image src="/abn/logo-escuro.png" alt="ABN" width={302} height={114} />
            <span aria-hidden="true">×</span>
            <strong>Softaliza</strong>
          </div>
          <p className={styles.noticeEyebrow}>Proposta visual</p>
          <h2>Esta é uma demonstração criada para a ABN.</h2>
          <p>Preparamos este portal como <strong>proposta visual</strong> para a Academia Brasileira de
            Neurologia. Ele usa conteúdo real publicado hoje em abneuro.org.br apenas para mostrar como
            o novo portal poderia se organizar — com <strong>menos cliques até o conteúdo</strong>.</p>
          <p><strong>Nada aqui está fechado.</strong> Layout, cores, seções, menus e textos são
            definidos junto com a diretoria e a equipe da ABN, e <strong>podem ser alterados conforme a
            necessidade da Academia</strong>.</p>
          <p className={styles.noticeFine}>Não é o portal oficial da ABN e não substitui o abneuro.org.br.</p>
          <label className={styles.noticeButton} htmlFor="fechar-aviso">Entendi — quero navegar <Arrow /></label>
        </div>
      </div>

      <div className={styles.proposalBar}>
        <div className={styles.shell}>
          <p><span>Proposta visual</span> Layout e conteúdo podem ser alterados conforme a necessidade da ABN</p>
          <a href="#associado">Desenvolvido pela Softaliza <Arrow /></a>
        </div>
      </div>

      <div className={styles.utilityBar}>
        <div className={styles.shell}>
          <p>Academia Brasileira de Neurologia · desde 1962</p>
          <div>
            <a href={`${official}/encontre-seu-medico/`} target="_blank" rel="noreferrer">Encontre seu médico</a>
            <span>•</span>
            <a href={`${official}/associe-se/`} target="_blank" rel="noreferrer">Associe-se</a>
            <a className={styles.utilityMember} href={memberArea}>Área do associado</a>
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.shell}>
          <a className={styles.brand} href="#inicio" aria-label="ABN — página inicial">
            <Image src="/abn/logo-branco.svg" alt="ABN — Academia Brasileira de Neurologia" width={850} height={354} priority />
          </a>
          <nav aria-label="Navegação principal">
            <a href="#academia">A Academia</a>
            <a href="#departamentos">Departamentos</a>
            <a href="#educacao">Educação</a>
            <a href="#publicacoes">Publicações</a>
            <a href="#eventos">Eventos</a>
            <a href="#noticias">Notícias</a>
          </nav>
          <a className={styles.primaryButton} href={memberArea}>Área do associado <Arrow /></a>
          <details className={styles.mobileMenu}>
            <summary>Menu</summary>
            <nav><a href="#academia">A Academia</a><a href="#departamentos">Departamentos</a><a href="#educacao">Educação</a><a href="#publicacoes">Publicações</a><a href="#eventos">Eventos</a><a href="#noticias">Notícias</a><a href={memberArea}>Área do associado</a></nav>
          </details>
        </div>
      </header>

      <section className={styles.hero} id="inicio">
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div>
            <p className={styles.eyebrow}>Ensino · Pesquisa · Representação</p>
            <h1>A neurologia brasileira, <em>em um só lugar.</em></h1>
            <p className={styles.heroLead}>A ABN congrega os médicos que exercem e cultivam a Neurologia
              e as ciências afins no Brasil — com 23 Departamentos Científicos, capítulos estaduais,
              titulação, publicações e educação médica continuada.</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href={`${official}/associe-se/`} target="_blank" rel="noreferrer">Associe-se à ABN <Arrow /></a>
              <a className={styles.secondaryButton} href="#eventos">Congresso NEURO26</a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            {/* Carrossel real: 3 banners publicados hoje pela ABN, em crossfade
                por CSS puro — no portal, a equipe troca os banners pelo painel. */}
            <figure className={styles.carousel}>
              <div className={styles.carouselSlide}>
                {banners.map(([src, alt], i) => (
                  <span key={src} className={styles.slide} style={{ animationDelay: `${i * 5}s` }}>
                    <Image src={src} alt={alt} fill sizes="(max-width: 980px) 100vw, 50vw" priority={i === 0} />
                  </span>
                ))}
              </div>
              <div className={styles.carouselDots} aria-hidden="true">
                {banners.map(([src], i) => (
                  <i key={src} style={{ animationDelay: `${i * 5}s` }} />
                ))}
              </div>
            </figure>
            <div className={styles.heroEvent}>
              <span aria-hidden="true">XXXII</span>
              <div>
                <strong>NEURO26 — Congresso Brasileiro de Neurologia</strong>
                <small>Rio de Janeiro · 7 a 10 de outubro de 2026 · Centro de Convenções Windsor</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.shortcuts} id="atalhos">
        <div className={styles.shell}>
          <div className={styles.sectionTop}>
            <div>
              <p className={styles.sectionLabel}>Em um clique</p>
              <h2>O que mais se procura, direto da capa.</h2>
            </div>
            <p className={styles.sectionAside}>Hoje esses conteúdos estão a três ou quatro cliques de
              distância, dentro de menus de vários níveis. No novo portal, eles ficam na primeira dobra.</p>
          </div>
          <div className={styles.shortcutGrid}>
            {atalhos.map(([titulo, texto]) => (
              <a key={titulo} href={memberArea}>
                <strong>{titulo}</strong>
                <span>{texto}</span>
                <i aria-hidden="true">→</i>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="academia">
        <div className={styles.shell}>
          <div className={styles.aboutGrid}>
            <div>
              <p className={styles.sectionLabel}>A Academia</p>
              <h2>Uma casa científica com 60 anos de história.</h2>
              <p className={styles.sectionLead}>Fundada em 1962, a ABN reúne a comunidade neurológica do
                país: forma e titula especialistas, organiza o Congresso Brasileiro de Neurologia,
                publica ciência e representa a especialidade junto às instituições de saúde.</p>
              <a className={styles.textLink} href={`${official}/institucional/historia/`} target="_blank" rel="noreferrer">Conheça a história da ABN <Arrow /></a>
            </div>
            <ul className={styles.numbers}>
              <li><strong>1962</strong><span>ano de fundação da Academia</span></li>
              <li><strong>23</strong><span>Departamentos Científicos</span></li>
              <li><strong>XXXII</strong><span>edição do Congresso Brasileiro de Neurologia</span></li>
              <li><strong>Nacional</strong><span>capítulos estaduais em todo o país</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionDark} id="departamentos">
        <div className={styles.shell}>
          <div className={styles.sectionTop}>
            <div>
              <p className={styles.sectionLabelLight}>Departamentos Científicos</p>
              <h2>23 departamentos, cada um com página própria.</h2>
            </div>
            <p className={styles.sectionAsideLight}>Com busca e filtro por área — e cada departamento
              publicando suas próprias diretrizes, eventos e recomendações.</p>
          </div>
          <div className={styles.searchMock} aria-hidden="true">
            <span>Buscar departamento, diretriz ou recomendação…</span>
            <b>Buscar</b>
          </div>
          <ul className={styles.deptGrid}>
            {departamentos.map((d) => (
              <li key={d}><a href="#departamentos">{d}</a></li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id="educacao">
        <div className={styles.shell}>
          <p className={styles.sectionLabel}>Educação</p>
          <h2>Formação continuada, do webinar à titulação.</h2>
          <div className={styles.cardsGrid}>
            {educacao.map(([titulo, texto]) => (
              <article key={titulo}>
                <h3>{titulo}</h3>
                <p>{texto}</p>
                <p className={styles.cardMore}>Acessar <Arrow /></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt} id="publicacoes">
        <div className={styles.shell}>
          <p className={styles.sectionLabel}>Publicações científicas</p>
          <h2>A produção científica da Academia.</h2>
          <div className={styles.pubGrid}>
            {publicacoes.map(([titulo, texto]) => (
              <article key={titulo}>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finder} id="encontre">
        <div className={`${styles.shell} ${styles.finderGrid}`}>
          <div>
            <p className={styles.sectionLabel}>Serviço ao público</p>
            <h2>Encontre seu médico</h2>
            <p className={styles.sectionLead}>A busca pública da ABN, em destaque na capa: mais de
              400 neurologistas titulados, por nome, cidade e área de atuação.</p>
          </div>
          <div className={styles.finderBox} aria-hidden="true">
            <div className={styles.finderInput}><span>Buscar por nome ou cidade…</span><b>Buscar</b></div>
            <div className={styles.finderChips}>
              <i>Cefaleia</i><i>Epilepsia</i><i>Sono</i><i>Neuropediatria</i><i>Transtornos do Movimento</i><i>+ 18 áreas</i>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="eventos">
        <div className={styles.shell}>
          <div className={styles.sectionTop}>
            <div>
              <p className={styles.sectionLabel}>Eventos</p>
              <h2>Agenda da ABN</h2>
            </div>
            <a className={styles.textLink} href={`${official}/eventos/calendario/`} target="_blank" rel="noreferrer">Ver o calendário completo <Arrow /></a>
          </div>
          <div className={styles.eventFeature}>
            <Image src="/abn/banner-premio.jpg" alt="Prêmio Academia Brasileira de Neurologia" width={1424} height={400} />
            <div>
              <p className={styles.eventTag}>Inscrições abertas</p>
              <h3>Prêmio Academia Brasileira de Neurologia</h3>
              <p>Conferido bienalmente à melhor dissertação de mestrado, tese de doutorado ou
                livre-docência aprovada na área de Neurologia e ainda não publicada integralmente.</p>
              <p className={styles.cardMore}>Ver o regulamento <Arrow /></p>
            </div>
          </div>
          <ul className={styles.agendaList}>
            <li>
              <span className={styles.agendaWhen}>7 a 10 de outubro de 2026</span>
              <div><strong>NEURO26 — XXXII Congresso Brasileiro de Neurologia</strong>
                <span>Rio de Janeiro · Centro de Convenções &amp; Hotéis Windsor</span></div>
              <a href="#eventos">Inscrições <Arrow /></a>
            </li>
            <li>
              <span className={styles.agendaWhen}>Ao longo do ano</span>
              <div><strong>ABN Lab — webinars dos Departamentos Científicos</strong>
                <span>Online, com emissão de certificado</span></div>
              <a href="#eventos">Programação <Arrow /></a>
            </li>
            <li>
              <span className={styles.agendaWhen}>Calendário 2026</span>
              <div><strong>Provas de título e certificações de área de atuação</strong>
                <span>Neurologia, Neurologia Pediátrica e Neurossonologia</span></div>
              <a href="#eventos">Editais <Arrow /></a>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.sectionAlt} id="noticias">
        <div className={styles.shell}>
          <div className={styles.sectionTop}>
            <div>
              <p className={styles.sectionLabel}>Notícias</p>
              <h2>O que a ABN publicou</h2>
            </div>
            <a className={styles.textLink} href={`${official}/noticias/`} target="_blank" rel="noreferrer">Ver todas <Arrow /></a>
          </div>
          <div className={styles.newsGrid}>
            {noticias.map(([data, tag, titulo, capa]) => (
              <article key={titulo}>
                <span className={styles.newsThumb}>
                  <Image src={capa} alt="" width={640} height={360} />
                </span>
                <div className={styles.newsBody}>
                  <p className={styles.newsMeta}><b>{tag}</b> · {data}</p>
                  <h3>{titulo}</h3>
                  <p className={styles.cardMore}>Ler notícia <Arrow /></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.memberBand} id="associado">
        <div className={`${styles.shell} ${styles.memberGrid}`}>
          <div>
            <p className={styles.sectionLabelLight}>Área do associado</p>
            <h2>O login do associado abre a plataforma da ABN.</h2>
            <p>Anuidade, carteirinha digital, votações de diretoria e assembleia, biblioteca restrita,
              EMC e comunicados ficam no sistema de gestão — integrados ao portal, com um acesso só.</p>
            <a className={styles.whiteButton} href={memberArea}>Entrar na área do associado <Arrow /></a>
          </div>
          <ul className={styles.memberList}>
            <li>Votações com voto secreto ou nominal, quórum e auditoria</li>
            <li>Anuidade por PIX, boleto e cartão, com histórico</li>
            <li>Carteirinha digital e comprovante de adimplência</li>
            <li>Biblioteca restrita: atas, documentos e resultados</li>
            <li>Pré-cadastro de filiação com envio de documentos</li>
            <li>Educação médica continuada e certificados</li>
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.shell} ${styles.footerGrid}`}>
          <div>
            <Image src="/abn/logo-branco.svg" alt="ABN — Academia Brasileira de Neurologia" width={850} height={354} />
            <p>Academia Brasileira de Neurologia — demonstração visual preparada pela Softaliza.</p>
          </div>
          <nav aria-label="Rodapé">
            <a href="#academia">A Academia</a>
            <a href="#departamentos">Departamentos</a>
            <a href="#educacao">Educação</a>
            <a href="#publicacoes">Publicações</a>
            <a href="#eventos">Eventos</a>
            <a href={memberArea}>Área do associado</a>
          </nav>
        </div>
        <div className={`${styles.shell} ${styles.footerBase}`}>
          <p>Demonstração — não é o portal oficial da ABN.</p>
          <a href={official} target="_blank" rel="noreferrer">abneuro.org.br <Arrow diagonal /></a>
        </div>
      </footer>
    </main>
  );
}
