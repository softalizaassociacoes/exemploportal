import type { Metadata } from "next";
import Image from "next/image";
import styles from "./sbi.module.css";

export const metadata: Metadata = {
  title: "SBI — Sociedade Brasileira de Imunologia",
  description:
    "Proposta visual da Softaliza: MVP do novo site institucional da Sociedade Brasileira de Imunologia.",
  openGraph: {
    title: "SBI — MVP do novo site institucional",
    description:
      "Proposta visual preparada pela Softaliza para a Sociedade Brasileira de Imunologia.",
    type: "website",
    locale: "pt_BR",
    url: "https://exemplo.softaliza.com.br/sbi",
    siteName: "Proposta Softaliza — SBI",
    images: [{ url: "/sbi/og.png", width: 1200, height: 630, alt: "MVP do novo site da SBI — proposta Softaliza" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SBI — MVP do novo site institucional",
    description: "Proposta visual preparada pela Softaliza para a SBI.",
    images: ["/sbi/og.png"],
  },
};

const official = "https://sbi.org.br";
// A área do associado da solução proposta é a plataforma Softaliza integrada —
// nesta demonstração, todos os acessos apontam para o mockup da própria página.
const memberArea = "#associado";

// Conteúdo real publicado hoje em sbi.org.br (julho/2026).
const news = [
  ["Institucional", "SBI na 78ª Reunião Anual da Sociedade Brasileira para o Progresso da Ciência", "27 JUL 2026"],
  ["SBI 50 anos", "Comemore o 50º Congresso da Sociedade Brasileira de Imunologia", "23 JUL 2026"],
  ["Ciência", "SBI Entrevistas: Jorge Kalil — 2ª geração de imunologistas brasileiros", "14 JUL 2026"],
];

const agenda = [
  {
    tag: "Congresso",
    status: "SBI 50 anos",
    title: "ImmunoFoz — 50ª Reunião da Sociedade Brasileira de Imunologia",
    place: "Foz do Iguaçu · PR, junto ao WCI 2026 (World Congress of Inflammation)",
    date: "8 a 12 de setembro de 2026",
    featured: true,
  },
  {
    tag: "Prêmios",
    status: "Edição 2026",
    title: "Prêmio Thereza Kipnis e honrarias da SBI",
    place: "Reconhecimento à pesquisa em imunologia",
    date: "Cronograma divulgado pela Secretaria",
  },
  {
    tag: "Cursos",
    status: "Ao longo do ano",
    title: "Cursos e eventos das regionais da SBI",
    place: "Presenciais e online",
    date: "Agenda mantida pela Secretaria",
  },
];

// As 4 regionais da SBI (taxonomia real do site atual).
const regionais = [
  ["01", "Regional Sudeste", "Atividades, eventos e representação dos sócios da região Sudeste."],
  ["02", "Regional Sul", "Atividades, eventos e representação dos sócios da região Sul."],
  ["03", "Regional Centro-Oeste", "Atividades, eventos e representação dos sócios do Centro-Oeste."],
  ["04", "Regional Norte-Nordeste", "Atividades, eventos e representação dos sócios do Norte e Nordeste."],
];

const library = [
  ["Afilie-se", "Categorias e valores de anuidade", "Como se associar, categorias de sócio e valores vigentes.", `${official}/afilie-se/`],
  ["Institucional", "Estatuto e atas", "Norma interna, assembleias e governança da Sociedade.", `${official}/`],
  ["Prêmios", "Prêmio Thereza Kipnis e honrarias", "Editais, regulamentos e vencedores.", `${official}/`],
  ["Oportunidades", "Vagas de pós-graduação e pesquisa", "Mestrado, doutorado, pós-doc e posições em imunologia.", `${official}/`],
];

const sblogi = [
  ["SBlogI", "O blog de divulgação científica da SBI", "card-sblogi.jpg"],
  ["SBI Entrevistas", "Histórias da imunologia brasileira", "card-entrevistas.jpg"],
  ["SBI 50 anos", "História da Imunologia no Brasil", "card-50anos.jpg"],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

// O logo oficial da SBI é branco (feito para o header navy do site) —
// em fundos claros usamos a variante navy gerada a partir dele.
function Brand({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <span className={`${styles.brand} ${light ? styles.brandLight : ""} ${compact ? styles.brandCompact : ""}`}>
      <Image
        src={light ? "/sbi/logo-white.png" : "/sbi/logo-navy.png"}
        alt="SBI — Sociedade Brasileira de Imunologia"
        width={167}
        height={44}
        priority
      />
    </span>
  );
}

export default function SbiProposal() {
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
          <p className={styles.noticeEyebrow}>Proposta visual</p>
          <h2>Esta é uma demonstração criada para a SBI.</h2>
          <p>Preparamos este site como <strong>proposta visual</strong> para a Sociedade Brasileira de
            Imunologia. Ele usa conteúdo real publicado hoje em sbi.org.br apenas para mostrar como o
            novo site poderia se organizar.</p>
          <p><strong>Nada aqui está fechado.</strong> Layout, cores, seções, menus e textos são
            definidos junto com a diretoria e a secretaria, e <strong>podem ser alterados conforme a
            necessidade da Sociedade</strong>.</p>
          <p className={styles.noticeFine}>Não é o site oficial da SBI e não substitui o sbi.org.br.</p>
          <label className={styles.noticeButton} htmlFor="fechar-aviso">Entendi — quero navegar <Arrow /></label>
        </div>
      </div>

      <div className={styles.proposalBar}>
        <div className={styles.shell}>
          <p><span>Proposta visual</span> Layout e conteúdo podem ser alterados conforme a necessidade da SBI</p>
          <a href="#proposta">Desenvolvido pela Softaliza <Arrow /></a>
        </div>
      </div>

      <div className={styles.utilityBar}>
        <div className={styles.shell}>
          <p>Sociedade Brasileira de Imunologia</p>
          <div><a href={`${official}/duvidas/`} target="_blank" rel="noreferrer">Dúvidas</a><span>•</span><a href={`${official}/afilie-se/`} target="_blank" rel="noreferrer">Afilie-se</a><a className={styles.utilityMember} href={memberArea}>Área do associado</a></div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.shell}>
          <a href="#inicio" aria-label="SBI — página inicial"><Brand /></a>
          <nav aria-label="Navegação principal">
            <a href="#sociedade">Institucional</a>
            <a href="#agenda">Congressos</a>
            <a href="#regionais">Regionais</a>
            <a href="#sblogi">SBlogI</a>
            <a href="#biblioteca">Documentos</a>
            <a href="#noticias">Notícias</a>
          </nav>
          <div className={styles.headerActions}>
            <a className={styles.memberLink} href={memberArea}>Área do associado</a>
            <a className={styles.primaryButton} href={memberArea}>Afilie-se <Arrow /></a>
          </div>
          <details className={styles.mobileMenu}>
            <summary>Menu</summary>
            <nav><a href="#sociedade">Institucional</a><a href="#agenda">Congressos</a><a href="#regionais">Regionais</a><a href="#sblogi">SBlogI</a><a href="#biblioteca">Documentos</a><a href="#noticias">Notícias</a><a href={memberArea}>Área do associado</a></nav>
          </details>
        </div>
      </header>

      <section className={styles.hero} id="inicio">
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Ciência · Formação · Divulgação</p>
            <h1>Há 50 anos fazendo a imunologia <em>brasileira avançar.</em></h1>
            <p className={styles.heroLead}>A Sociedade Brasileira de Imunologia congrega pesquisadores, docentes e estudantes de todo o país — com congresso anual, prêmios, cursos, regionais e o SBlogI de divulgação científica.</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href={memberArea}>Afilie-se à SBI <Arrow /></a>
              <a className={styles.secondaryButton} href="#agenda">Congressos e eventos</a>
            </div>
            <div className={styles.heroCredential}>
              <strong>50</strong><span>anos de ciência<br />e comunidade</span><i /><p>ImmunoFoz 2026 — a edição do cinquentenário</p>
            </div>
          </div>

          <aside className={styles.heroVisual}>
            <div className={styles.carousel}>
              <div className={styles.carouselSlide}>
                <Image src="/sbi/hero-banner.jpg" alt="Comemore o 50º Congresso da SBI" fill sizes="(max-width: 900px) 100vw, 48vw" />
              </div>
              <div className={styles.carouselDots} aria-hidden="true"><i className={styles.dotOn} /><i /><i /><i /></div>
            </div>
            <div className={styles.heroEvent}>
              <span>50º</span>
              <div><strong>ImmunoFoz — 50ª Reunião da SBI no WCI 2026</strong><small>Foz do Iguaçu · 8 a 12 de setembro de 2026</small></div>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.quickAccess} aria-label="Acessos rápidos">
        <div className={`${styles.shell} ${styles.quickGrid}`}>
          <a href={memberArea}><span className={styles.quickIcon}>ID</span><div><strong>Área do associado</strong><small>Anuidade, carteirinha e histórico</small></div><Arrow diagonal /></a>
          <a href="#biblioteca"><span className={styles.quickIcon}>+</span><div><strong>Afilie-se</strong><small>Categorias, valores e procedimentos</small></div><Arrow diagonal /></a>
          <a href="#sblogi"><span className={styles.quickIcon}>≡</span><div><strong>SBlogI</strong><small>Divulgação científica em imunologia</small></div><Arrow diagonal /></a>
          <a href="#biblioteca"><span className={styles.quickIcon}>★</span><div><strong>Oportunidades</strong><small>Vagas de pós-graduação e pesquisa</small></div><Arrow diagonal /></a>
        </div>
      </section>

      <section className={styles.about} id="sociedade">
        <div className={`${styles.shell} ${styles.aboutGrid}`}>
          <div>
            <p className={styles.sectionLabel}>A SBI</p>
            <h2>A casa da imunologia <em>brasileira.</em></h2>
          </div>
          <div className={styles.aboutCopy}>
            <p>Fundada há cinco décadas, a SBI reúne a comunidade científica da imunologia — da bancada à sala de aula — em torno de congressos, prêmios, formação e divulgação.</p>
            <p>Atua em rede com quatro regionais, promove o congresso anual, reconhece a excelência com prêmios e leva a ciência ao público pelo SBlogI.</p>
            <a href={`${official}/`} target="_blank" rel="noreferrer">Conheça a Sociedade <Arrow /></a>
          </div>
        </div>

        <div className={`${styles.shell} ${styles.valuesGrid}`}>
          <article><span>01</span><i className={styles.valueCircle} /><h3>Ciência</h3><p>Congresso anual, WCI e reuniões científicas com a comunidade internacional.</p></article>
          <article><span>02</span><i className={styles.valueCircle} /><h3>Formação</h3><p>Cursos, prêmios e oportunidades para estudantes e jovens pesquisadores.</p></article>
          <article><span>03</span><i className={styles.valueCircle} /><h3>Divulgação</h3><p>SBlogI, SBI Entrevistas e conteúdo científico aberto ao público.</p></article>
          <article><span>04</span><i className={styles.valueCircle} /><h3>Comunidade</h3><p>Quatro regionais e uma rede nacional de associados.</p></article>
        </div>
      </section>

      <section className={styles.fields} id="regionais">
        <div className={`${styles.shell} ${styles.sectionHeading} ${styles.darkHeading}`}>
          <div><p className={styles.sectionLabel}>Regionais</p><h2>Uma sociedade, quatro <em>regionais.</em></h2></div>
          <p className={styles.fieldsNote}>Cada regional ganha página própria, com notícias e eventos mantidos pela Secretaria.</p>
        </div>
        <div className={`${styles.shell} ${styles.fieldsGrid}`}>
          {regionais.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <div className={styles.fieldSymbol} aria-hidden="true"><i /><i /><i /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.agenda} id="agenda">
        <div className={`${styles.shell} ${styles.sectionHeading} ${styles.darkHeading}`}>
          <div><p className={styles.sectionLabel}>Congressos e eventos</p><h2>Do ImmunoFoz aos cursos <em>regionais.</em></h2></div>
          <a href={`${official}/`} target="_blank" rel="noreferrer">Ver a agenda completa <Arrow /></a>
        </div>
        <div className={`${styles.shell} ${styles.agendaGrid}`}>
          {agenda.map((ev) => (
            <article key={ev.title} className={ev.featured ? styles.agendaFeatured : ""}>
              <div className={styles.agendaTop}>
                <span className={styles.agendaTag}>{ev.tag}</span>
                <span className={styles.agendaStatus}>{ev.status}</span>
              </div>
              <h3>{ev.title}</h3>
              <dl className={styles.agendaMeta}>
                <div><dt>Local</dt><dd>{ev.place}</dd></div>
                <div><dt>Data</dt><dd>{ev.date}</dd></div>
              </dl>
              <a href={`${official}/`} target="_blank" rel="noreferrer">Ver o evento <Arrow /></a>
            </article>
          ))}
        </div>
        <p className={`${styles.shell} ${styles.agendaNote}`}>A agenda é publicada e mantida pela própria Secretaria, com página individual por evento e inscrição integrada.</p>
      </section>

      <section className={styles.emc} id="sblogi">
        <div className={`${styles.shell} ${styles.sectionHeading}`}>
          <div><p className={`${styles.sectionLabel} ${styles.lightLabel}`}>Divulgação científica</p><h2>SBlogI: a imunologia explicada <em>para todos.</em></h2></div>
          <a href={`${official}/todos-sblogi/`} target="_blank" rel="noreferrer">Ver todos os posts <Arrow /></a>
        </div>
        <div className={`${styles.shell} ${styles.emcGrid}`}>
          {sblogi.map(([title, text, img]) => (
            <article key={title}>
              <div className={styles.emcVisual}><Image src={`/sbi/${img}`} alt={title} fill sizes="(max-width: 900px) 100vw, 33vw" /></div>
              <div className={styles.emcCopy}><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
        <p className={`${styles.shell} ${styles.medicalNotice}`}>São mais de 200 posts publicados no SBlogI — organizados por tema, autor e data no novo site, com busca.</p>
      </section>

      <section className={styles.library} id="biblioteca">
        <div className={`${styles.shell} ${styles.libraryGrid}`}>
          <div className={styles.libraryIntro}>
            <p className={styles.sectionLabel}>Documentos e oportunidades</p>
            <h2>Tudo em ordem, fácil de achar.</h2>
            <p>Estatuto, atas, editais de prêmios, valores de anuidade e as 200 oportunidades de pós-graduação e pesquisa — reunidos com busca e categorias, atualizados pela Secretaria.</p>
            <a href={`${official}/`} target="_blank" rel="noreferrer">Ver todos os documentos <Arrow /></a>
          </div>
          <ul className={styles.libraryList}>
            {library.map(([tag, title, text, href]) => (
              <li key={title}>
                <a href={href} target="_blank" rel="noreferrer">
                  <span className={styles.libraryIcon} aria-hidden="true">PDF</span>
                  <div><span className={styles.libraryTag}>{tag}</span><strong>{title}</strong><small>{text}</small></div>
                  <Arrow diagonal />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.news} id="noticias">
        <div className={`${styles.shell} ${styles.sectionHeading} ${styles.darkHeading}`}>
          <div><p className={styles.sectionLabel}>Atualização</p><h2>Notícias da <em>SBI.</em></h2></div>
          <a href={`${official}/`} target="_blank" rel="noreferrer">Ver todas as notícias <Arrow /></a>
        </div>
        <div className={`${styles.shell} ${styles.newsGrid}`}>
          {news.map(([tag, title, date], index) => (
            <article key={title}>
              <div className={`${styles.newsVisual} ${index === 0 ? styles.noteVisual : ""}`}>
                {index === 0 ? <Image src="/sbi/card-sbpc.jpg" alt="SBI na 78ª Reunião Anual da SBPC" fill sizes="(max-width: 900px) 100vw, 33vw" /> : <><span>SBI</span><i /><i /><i /></>}
              </div>
              <div className={styles.newsCopy}><p><span>{tag}</span>{date}</p><h3>{title}</h3><a href={`${official}/`} target="_blank" rel="noreferrer">Ler notícia <Arrow /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.oxi} id="comunicacao">
        <div className={`${styles.shell} ${styles.oxiCard}`}>
          <div className={styles.oxiCopy}>
            <p className={styles.sectionLabel}>Comunicação oficial</p>
            <h2>O associado <em>informado</em>, direto da Secretaria.</h2>
            <p>Avisos, editais e convocações enviados pela própria equipe: template fixo, listas segmentadas — sócios, categorias, regionais — e relatório de abertura por envio.</p>
          </div>
          <form className={styles.oxiForm} action="#comunicacao">
            <label htmlFor="oxi-email">Receba os comunicados da SBI</label>
            <div>
              <input id="oxi-email" type="email" placeholder="seu@email.com.br" />
              <button type="submit">Assinar <Arrow /></button>
            </div>
            <small>Confirmação por duplo opt-in e descadastro em um clique, em todos os envios.</small>
          </form>
        </div>
      </section>

      <section className={styles.membership} id="associado">
        <div className={`${styles.shell} ${styles.membershipGrid}`}>
          <div className={styles.membershipCopy}>
            <p className={`${styles.sectionLabel} ${styles.lightLabel}`}>Para associados</p>
            <h2>Cinquenta anos de comunidade — e uma área do associado à altura.</h2>
            <p>Afilie-se à SBI e participe de uma rede nacional de pesquisadores, com benefícios em congressos, prêmios e formação.</p>
            <ul><li><span>✓</span> Carteirinha digital e anuidade por PIX, boleto ou cartão</li><li><span>✓</span> Histórico financeiro completo — incluindo pagamentos externos</li><li><span>✓</span> Votações online nas assembleias e eleições</li><li><span>✓</span> Condições especiais no congresso e nos cursos</li><li><span>✓</span> Comunicados segmentados por categoria e regional</li></ul>
            <a className={styles.whiteButton} href="#proposta">Quero me afiliar <Arrow /></a>
          </div>

          <div className={styles.dashboardWrap}>
          <div className={styles.dashboard}>
            <div className={styles.dashboardTop}><Brand light compact /><span>Olá, Dra. Vilma <i>VM</i></span></div>
            <div className={styles.dashboardBody}>
              <div className={styles.dashboardWelcome}><div><p>Área do associado</p><h3>Bem-vinda à sua SBI.</h3></div><span>● Cadastro ativo</span></div>
              <div className={styles.dashboardCards}><article><span>Anuidade 2026</span><strong>Em dia</strong><small>Comprovante disponível</small></article><article><span>Votação aberta</span><strong>Assembleia 2026</strong><small>Vote até 30/09</small></article></div>
              <div className={styles.dashboardMenu}><a href={memberArea}><span>01</span>Carteirinha digital<Arrow /></a><a href={memberArea}><span>02</span>Histórico financeiro<Arrow /></a><a href={memberArea}><span>03</span>Votações e assembleias<Arrow /></a><a href={memberArea}><span>04</span>Atualizar cadastro<Arrow /></a></div>
            </div>
          </div>
          <p className={styles.dashboardCaption}>Área do associado nativa — plataforma Softaliza com a identidade da SBI, no mesmo lugar do site.</p>
          </div>
        </div>
      </section>

      <section className={styles.faq} id="duvidas">
        <div className={`${styles.shell} ${styles.faqGrid}`}>
          <div><p className={styles.sectionLabel}>Afilie-se</p><h2>Fazer parte da SBI é simples.</h2><p>Categorias para pesquisadores, docentes, pós-graduandos e estudantes — com valores e procedimentos claros.</p></div>
          <div className={styles.faqList}>
            <details open><summary>Quem pode se associar à SBI?<span>+</span></summary><p>Pesquisadores, docentes, profissionais e estudantes ligados à imunologia e áreas afins, nas categorias previstas no estatuto.</p></details>
            <details><summary>Quais os valores de anuidade?<span>+</span></summary><p>Os valores variam por categoria — profissional, pós-graduando e estudante — e ficam publicados na página de valores, junto com as formas de pagamento.</p></details>
            <details><summary>Quais os benefícios de ser sócio?<span>+</span></summary><p>Condições especiais no congresso anual e nos cursos, participação nas votações e assembleias, acesso a conteúdos e à rede de regionais.</p></details>
            <details><summary>Como funciona a renovação?<span>+</span></summary><p>A anuidade é renovada pela área do associado, com lembretes automáticos e comprovante — e a situação fica visível na carteirinha digital.</p></details>
            <a href={`${official}/afilie-se/`} target="_blank" rel="noreferrer">Ver categorias e valores <Arrow /></a>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={`${styles.shell} ${styles.contactGrid}`}>
          <div><p className={`${styles.sectionLabel} ${styles.lightLabel}`}>Fale com a SBI</p><h2>Ciência e comunidade, há 50 anos.</h2></div>
          <div><a href={`${official}/duvidas/`} target="_blank" rel="noreferrer">Dúvidas frequentes <Arrow /></a><a href={`${official}/afilie-se/`} target="_blank" rel="noreferrer">Afilie-se <Arrow /></a><a className={styles.contactButton} href={`${official}/`} target="_blank" rel="noreferrer">Enviar uma mensagem</a></div>
        </div>
      </section>

      <section className={styles.proposal} id="proposta">
        <div className={`${styles.shell} ${styles.proposalGrid}`}>
          <div><span>Proposta Softaliza</span><h2>Um site à altura dos 50 anos da SBI.</h2></div>
          <div>
            <p>Esta demonstração é o <strong>novo site institucional da SBI</strong>: moderno, responsivo, com menus reorganizáveis e conteúdo publicado pela própria Secretaria — incluindo a migração do acervo atual.</p>
            <p>Ele é entregue como <strong>solução completa</strong>, junto com o sistema de gestão de associados da Softaliza: área restrita, carteirinha digital, anuidade por PIX, boleto ou cartão, histórico com pagamentos externos, votações online e comunicação segmentada.</p>
            <ul className={styles.proposalList}>
              <li>Sem multa, sem fidelidade e sem bloqueio técnico</li>
              <li>Domínio, código, banco e listas em nome da SBI</li>
              <li>Exportação integral dos dados a qualquer momento</li>
            </ul>
            <a href="https://crm.softaliza.com.br/proposta-sbi" target="_blank" rel="noreferrer">Ver a proposta comercial <Arrow /></a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.shell} ${styles.footerGrid}`}>
          <div><Brand light /><p>Sociedade Brasileira de Imunologia — há 50 anos fazendo a ciência avançar.</p></div>
          <div><h2>Institucional</h2><a href="#sociedade">A SBI</a><a href="#regionais">Regionais</a><a href="#biblioteca">Documentos</a><a href="#noticias">Notícias</a></div>
          <div><h2>Ciência</h2><a href="#agenda">Congressos</a><a href="#sblogi">SBlogI</a><a href="#biblioteca">Oportunidades</a><a href={`${official}/videos-galeria/`}>Vídeos</a></div>
          <div><h2>Associados</h2><a href={memberArea}>Área do associado</a><a href={memberArea}>Afilie-se</a><a href={`${official}/valores/`}>Valores</a><a href={`${official}/duvidas/`}>Dúvidas</a></div>
        </div>
        <div className={`${styles.shell} ${styles.footerBottom}`}><p>© 2026 Sociedade Brasileira de Imunologia. Proposta demonstrativa.</p><span>Uma experiência Softaliza</span></div>
      </footer>
    </main>
  );
}
