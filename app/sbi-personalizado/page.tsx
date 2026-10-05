import type { Metadata } from "next";
import Image from "next/image";
import styles from "./sbi-personalizado.module.css";

export const metadata: Metadata = {
  title: "SBI — Site personalizado (modelo enxuto)",
  description:
    "Proposta visual da Softaliza: modelo de Site personalizado para a Sociedade Brasileira de Imunologia.",
  openGraph: {
    title: "SBI — modelo de Site personalizado",
    description:
      "Proposta visual preparada pela Softaliza para a Sociedade Brasileira de Imunologia.",
    type: "website",
    locale: "pt_BR",
    url: "https://exemplo.softaliza.com.br/sbi-personalizado",
    siteName: "Proposta Softaliza — SBI",
    images: [{ url: "/sbi/og.png", width: 1200, height: 630, alt: "Modelo de Site personalizado para a SBI — proposta Softaliza" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SBI — modelo de Site personalizado",
    description: "Proposta visual preparada pela Softaliza para a SBI.",
    images: ["/sbi/og.png"],
  },
};

const official = "https://sbi.org.br";
const memberArea = "#associado";

// Mesmo conteúdo real de sbi.org.br usado no modelo Premium — aqui em volume
// menor, que é justamente o que diferencia os dois modelos de site.
const news = [
  ["27 JUL 2026", "SBI na 78ª Reunião Anual da Sociedade Brasileira para o Progresso da Ciência"],
  ["23 JUL 2026", "Comemore o 50º Congresso da Sociedade Brasileira de Imunologia"],
  ["14 JUL 2026", "SBI Entrevistas: Jorge Kalil e a 2ª geração de imunologistas brasileiros"],
];

const agenda = [
  ["8 a 12 de setembro de 2026", "ImmunoFoz — 50ª Reunião da SBI", "Foz do Iguaçu · PR, junto ao WCI 2026"],
  ["Edição 2026", "Prêmio Thereza Kipnis e honrarias", "Cronograma divulgado pela Secretaria"],
  ["Ao longo do ano", "Cursos e eventos das regionais", "Presenciais e online"],
];

const sobre = [
  ["Congresso anual", "A reunião que reúne a imunologia brasileira, com 50 edições em 2026."],
  ["Prêmios e honrarias", "Reconhecimento à pesquisa e à formação de novos imunologistas."],
  ["Quatro regionais", "Sudeste, Sul, Centro-Oeste e Norte-Nordeste, com atividades próprias."],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function SbiSitePersonalizado() {
  return (
    <main className={styles.page}>
      {/* Aviso de abertura: fecha só com CSS (checkbox), sem depender de JavaScript */}
      <input type="checkbox" id="fechar-aviso" className={styles.noticeToggle} aria-hidden="true" />
      <div className={styles.notice} role="note" aria-label="Aviso sobre esta demonstração">
        <div className={styles.noticeCard}>
          <div className={styles.noticeLogos}>
            <Image src="/sbi/logo-navy.png" alt="SBI" width={167} height={44} />
            <span aria-hidden="true">×</span>
            <strong>Softaliza</strong>
          </div>
          <p className={styles.noticeEyebrow}>Proposta visual · modelo enxuto</p>
          <h2>Este é o modelo <em>Site personalizado</em>.</h2>
          <p>Preparamos dois exemplos para a Sociedade Brasileira de Imunologia comparar. Este é o
            <strong> Site personalizado</strong>: um site institucional enxuto — apresentação, agenda,
            notícias e contato —, com os documentos e o conteúdo do associado na área restrita do
            sistema de gestão.</p>
          <p>O outro exemplo é o <strong>Portal institucional Premium</strong>, que traz todo o acervo
            público no próprio site: SBlogI com busca, oportunidades, prêmios e uma página para cada regional.</p>
          <p className={styles.noticeFine}>Nada aqui está fechado: layout, cores, seções e textos são
            definidos com a diretoria e a secretaria. Não é o site oficial da SBI e não substitui o sbi.org.br.</p>
          <div className={styles.noticeActions}>
            <label className={styles.noticeButton} htmlFor="fechar-aviso">Entendi — quero navegar <Arrow /></label>
            <a className={styles.noticeAlt} href="https://exemplo.softaliza.com.br/sbi">Ver o modelo Premium <Arrow diagonal /></a>
          </div>
        </div>
      </div>

      <div className={styles.proposalBar}>
        <div className={styles.shell}>
          <p><span>Modelo enxuto</span> Site personalizado — layout e conteúdo podem ser alterados conforme a necessidade da SBI</p>
          <a href="https://exemplo.softaliza.com.br/sbi">Ver o modelo Portal Premium <Arrow diagonal /></a>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.shell}>
          <a className={styles.brand} href="#inicio" aria-label="SBI — página inicial">
            <Image src="/sbi/logo-navy.png" alt="SBI — Sociedade Brasileira de Imunologia" width={167} height={44} priority />
          </a>
          <nav aria-label="Navegação principal">
            <a href="#sociedade">A Sociedade</a>
            <a href="#agenda">Eventos</a>
            <a href="#noticias">Notícias</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className={styles.primaryButton} href={memberArea}>Área do associado <Arrow /></a>
          <details className={styles.mobileMenu}>
            <summary>Menu</summary>
            <nav><a href="#sociedade">A Sociedade</a><a href="#agenda">Eventos</a><a href="#noticias">Notícias</a><a href="#contato">Contato</a><a href={memberArea}>Área do associado</a></nav>
          </details>
        </div>
      </header>

      <section className={styles.hero} id="inicio">
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div>
            <p className={styles.eyebrow}>Ciência · Formação · Divulgação</p>
            <h1>Sociedade Brasileira de <em>Imunologia</em></h1>
            <p className={styles.heroLead}>A SBI congrega pesquisadores, docentes e estudantes de todo o
              país — com congresso anual, prêmios, cursos e quatro regionais ativas.</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href={memberArea}>Afilie-se à SBI <Arrow /></a>
              <a className={styles.secondaryButton} href="#agenda">Próximos eventos</a>
            </div>
          </div>
          <figure className={styles.heroCard}>
            <Image src="/sbi/hero-banner.jpg" alt="ImmunoFoz — 50ª Reunião da SBI" width={1200} height={378} />
            <figcaption>
              <strong>ImmunoFoz — 50ª Reunião da SBI</strong>
              <span>Foz do Iguaçu · 8 a 12 de setembro de 2026</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section} id="sociedade">
        <div className={styles.shell}>
          <p className={styles.sectionLabel}>A Sociedade</p>
          <h2>Há 50 anos fazendo a imunologia brasileira avançar.</h2>
          <p className={styles.sectionLead}>Um site institucional enxuto: apresenta a Sociedade, mostra o
            que vem pela frente e leva o associado direto para a área restrita.</p>
          <div className={styles.cardsGrid}>
            {sobre.map(([titulo, texto]) => (
              <article key={titulo}>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt} id="agenda">
        <div className={styles.shell}>
          <p className={styles.sectionLabel}>Eventos</p>
          <h2>Agenda da SBI</h2>
          <ul className={styles.agendaList}>
            {agenda.map(([quando, titulo, onde]) => (
              <li key={titulo}>
                <span className={styles.agendaWhen}>{quando}</span>
                <div>
                  <strong>{titulo}</strong>
                  <span>{onde}</span>
                </div>
                <a href="#agenda">Detalhes <Arrow /></a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id="noticias">
        <div className={styles.shell}>
          <div className={styles.sectionTop}>
            <div>
              <p className={styles.sectionLabel}>Notícias</p>
              <h2>O que a SBI publicou</h2>
            </div>
            <a className={styles.textLink} href={`${official}/noticias/`} target="_blank" rel="noreferrer">Ver todas <Arrow /></a>
          </div>
          <div className={styles.newsGrid}>
            {news.map(([data, titulo]) => (
              <article key={titulo}>
                <span>{data}</span>
                <h3>{titulo}</h3>
                <p className={styles.newsMore}>Ler notícia <Arrow /></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.memberBand} id="associado">
        <div className={`${styles.shell} ${styles.memberGrid}`}>
          <div>
            <p className={styles.sectionLabelLight}>Área do associado</p>
            <h2>O login do associado abre a plataforma da SBI.</h2>
            <p>Anuidade, carteirinha digital, votações, documentos, cursos e comunicados ficam na área
              restrita do sistema de gestão — por isso o site público fica leve e rápido de manter.</p>
            <a className={styles.whiteButton} href={memberArea}>Entrar na área do associado <Arrow /></a>
          </div>
          <ul className={styles.memberList}>
            <li>Anuidade por PIX, boleto e cartão</li>
            <li>Carteirinha digital</li>
            <li>Votações em assembleias e eleições</li>
            <li>Documentos, atas e comunicados</li>
            <li>Inscrição em cursos e eventos</li>
          </ul>
        </div>
      </section>

      <section className={styles.section} id="contato">
        <div className={styles.shell}>
          <p className={styles.sectionLabel}>Contato</p>
          <h2>Fale com a Secretaria da SBI</h2>
          <div className={styles.contactGrid}>
            <div>
              <span>E-mail</span>
              <strong>secretaria@sbi.org.br</strong>
            </div>
            <div>
              <span>Site oficial</span>
              <strong>sbi.org.br</strong>
            </div>
            <div>
              <span>Afiliação</span>
              <strong>Categorias e anuidades na área do associado</strong>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.shell} ${styles.footerGrid}`}>
          <div>
            <Image src="/sbi/logo-white.png" alt="SBI — Sociedade Brasileira de Imunologia" width={167} height={44} />
            <p>Sociedade Brasileira de Imunologia — demonstração visual preparada pela Softaliza.</p>
          </div>
          <nav aria-label="Rodapé">
            <a href="#sociedade">A Sociedade</a>
            <a href="#agenda">Eventos</a>
            <a href="#noticias">Notícias</a>
            <a href="#contato">Contato</a>
            <a href={memberArea}>Área do associado</a>
          </nav>
        </div>
        <div className={`${styles.shell} ${styles.footerBase}`}>
          <p>Demonstração — não é o site oficial da SBI.</p>
          <a href="https://exemplo.softaliza.com.br/sbi">Ver o modelo Portal Premium <Arrow diagonal /></a>
        </div>
      </footer>
    </main>
  );
}
