import type { Metadata } from "next";
import Image from "next/image";
import styles from "./aborl.module.css";

export const metadata: Metadata = {
  title: "ABORL-CCF — Associação Brasileira de Otorrinolaringologia e Cirurgia Cérvico-Facial",
  description:
    "Proposta visual da Softaliza: MVP do novo portal institucional da ABORL-CCF.",
  openGraph: {
    title: "ABORL-CCF — MVP do novo portal institucional",
    description:
      "Proposta visual preparada pela Softaliza para a Associação Brasileira de Otorrinolaringologia e Cirurgia Cérvico-Facial.",
    type: "website",
    locale: "pt_BR",
    url: "https://exemplo.softaliza.com.br/aborl",
    siteName: "Proposta Softaliza — ABORL-CCF",
    images: [{ url: "/aborl/og.png", width: 1200, height: 630, alt: "MVP do novo portal da ABORL-CCF — proposta Softaliza" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABORL-CCF — MVP do novo portal institucional",
    description: "Proposta visual preparada pela Softaliza para a ABORL-CCF.",
    images: ["/aborl/og.png"],
  },
};

const official = "https://aborlccf.org.br";
// A área do associado da solução proposta é a plataforma Softaliza integrada —
// nesta demonstração, todos os acessos apontam para o mockup da própria página.
const memberArea = "#associado";

// Conteúdo real publicado hoje em aborlccf.org.br (julho/2026).
const news = [
  ["Eleições 2026", "Candidato ao cargo de 2º Vice-Presidente — eleições ABORL-CCF 2026", "13 JUL 2026"],
  ["Título de Especialista", "Publicado o edital do Exame de Suficiência para obtenção do Título de Especialista", "30 JUN 2026"],
  ["Defesa profissional", "ABORL-CCF fortalece a defesa da otorrinolaringologia em agenda estratégica", "24 JUN 2026"],
];

const agenda = [
  {
    tag: "Congresso",
    status: "Inscrições abertas",
    title: "40º Congresso Panamericano de Otorrinolaringologia",
    place: "Rio de Janeiro · RJ",
    date: "2026",
    featured: true,
  },
  {
    tag: "Meeting",
    status: "Evento próprio",
    title: "XI Combined ABORL-CCF Meeting",
    place: "Realização ABORL-CCF",
    date: "Programação no portal",
  },
  {
    tag: "Curso itinerante",
    status: "Turmas presenciais",
    title: "Curso Itinerante — Laringologia e Imunologia em Rinologia",
    place: "Belo Horizonte · MG",
    date: "Turmas divulgadas pela Secretaria",
  },
];

// As 5 academias de subespecialidade da ABORL-CCF.
const academias = [
  ["01", "Academia Brasileira de Rinologia", "Rinologia e cirurgia endoscópica nasossinusal."],
  ["02", "Academia Brasileira de Laringologia e Voz", "Laringologia, voz profissional e distúrbios da deglutição."],
  ["03", "Sociedade Brasileira de Otologia", "Otologia, otoneurologia e implante coclear."],
  ["04", "Academia Brasileira de Cirurgia Plástica da Face", "Cirurgia plástica facial e reconstrutiva."],
  ["05", "Academia Brasileira de Otorrino Pediátrica", "Otorrinolaringologia da criança e do adolescente."],
];

const library = [
  ["Título de Especialista", "Editais do Exame de Suficiência", "Regras, prazos e provas para o título e as áreas de atuação.", `${official}/documentos/`],
  ["Diretrizes", "Consenso sobre Rinites", "Referência técnica para diagnóstico e conduta.", `${official}/documentos/`],
  ["Institucional", "Estatuto e relatórios", "Norma interna, prestação de contas e governança.", `${official}/documentos/`],
  ["Defesa profissional", "Pareceres e posicionamentos", "Manifestações oficiais da ABORL-CCF e dos comitês.", `${official}/documentos/`],
];

const emc = [
  ["ORLCast", "Podcast oficial da ABORL-CCF", "banner-orlcast.jpg"],
  ["Projeto NEXT", "Formação e atualização do jovem otorrino", "banner-next.jpg"],
  ["Vigilância Médica", "Defesa e informação para o associado", "banner-vigilancia.jpg"],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

// O logo oficial da ABORL-CCF é escuro (azul #00609C), pensado para fundo claro.
// Em fundo escuro (rodapé, painel) usamos a variante branca.
function Brand({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <span className={`${styles.brand} ${light ? styles.brandLight : ""} ${compact ? styles.brandCompact : ""}`}>
      <Image
        src={light ? "/aborl/logo-white.png" : "/aborl/logo.png"}
        alt="ABORL-CCF — Associação Brasileira de Otorrinolaringologia e Cirurgia Cérvico-Facial"
        width={243}
        height={70}
        priority
      />
    </span>
  );
}

export default function AborlProposal() {
  return (
    <main className={styles.page}>
      <div className={styles.proposalBar}>
        <div className={styles.shell}>
          <p><span>Proposta visual</span> MVP do novo portal institucional da ABORL-CCF</p>
          <a href="#proposta">Desenvolvido pela Softaliza <Arrow /></a>
        </div>
      </div>

      <div className={styles.utilityBar}>
        <div className={styles.shell}>
          <p>Associação Brasileira de Otorrinolaringologia e Cirurgia Cérvico-Facial</p>
          <div><a href="tel:+551150537500">(11) 5053-7500</a><span>•</span><a href="https://wa.me/5511952661614" target="_blank" rel="noreferrer">WhatsApp (11) 95266-1614</a><a className={styles.utilityMember} href={memberArea}>Área do associado</a></div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.shell}>
          <a href="#inicio" aria-label="ABORL-CCF — página inicial"><Brand /></a>
          <nav aria-label="Navegação principal">
            <a href="#sociedade">Institucional</a>
            <a href="#academias">Academias e Sociedades</a>
            <a href="#emc">EMC</a>
            <a href="#titulo">Residência e Título</a>
            <a href="#agenda">Eventos</a>
            <a href="#biblioteca">Documentos</a>
            <a href="#noticias">Notícias</a>
          </nav>
          <div className={styles.headerActions}>
            <a className={styles.memberLink} href={memberArea}>Área do associado</a>
            <a className={styles.primaryButton} href={memberArea}>Associe-se <Arrow /></a>
          </div>
          <details className={styles.mobileMenu}>
            <summary>Menu</summary>
            <nav><a href="#sociedade">Institucional</a><a href="#academias">Academias e Sociedades</a><a href="#emc">EMC</a><a href="#titulo">Residência e Título</a><a href="#encontre">Encontre um otorrino</a><a href="#agenda">Eventos</a><a href="#biblioteca">Documentos</a><a href="#noticias">Notícias</a><a href={memberArea}>Área do associado</a></nav>
          </details>
        </div>
      </header>

      <section className={styles.hero} id="inicio">
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Ciência · Formação · Defesa profissional</p>
            <h1>Referência nacional em Otorrinolaringologia e <em>Cirurgia Cérvico-Facial.</em></h1>
            <p className={styles.heroLead}>A ABORL-CCF congrega os especialistas brasileiros, forma e titula novas gerações e defende a otorrinolaringologia — com uma rede de 5 academias e 21 sociedades regionais em todo o país.</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#encontre">Encontre um otorrino <Arrow /></a>
              <a className={styles.secondaryButton} href="#paciente">Sou paciente</a>
            </div>
            <div className={styles.heroCredential}>
              <strong>26</strong><span>academias e sociedades<br />regionais na rede</span><i /><p>Associação médica de atuação nacional</p>
            </div>
          </div>

          {/* O portal da ABORL tem carrossel de banners na home — a demonstração
              reproduz isso com os banners reais, em vez de recortar um deles
              como se fosse foto. */}
          <aside className={styles.heroVisual}>
            <div className={styles.carousel}>
              <div className={styles.carouselSlide}>
                <Image src="/aborl/banner-eleicoes.jpg" alt="Eleições ABORL-CCF 2026" fill sizes="(max-width: 900px) 100vw, 48vw" />
              </div>
              <div className={styles.carouselDots} aria-hidden="true"><i className={styles.dotOn} /><i /><i /><i /></div>
            </div>
            <div className={styles.heroEvent}>
              <span>40º</span>
              <div><strong>Congresso Panamericano de Otorrinolaringologia</strong><small>Rio de Janeiro · Brasil · 2026</small></div>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.quickAccess} aria-label="Acessos rápidos">
        <div className={`${styles.shell} ${styles.quickGrid}`}>
          <a href="#paciente" id="paciente"><span className={styles.quickIcon}>+</span><div><strong>Sou paciente</strong><small>O que faz o otorrinolaringologista</small></div><Arrow diagonal /></a>
          <a href="#encontre"><span className={styles.quickIcon}>⌖</span><div><strong>Encontre um otorrino</strong><small>Diretório por estado e cidade</small></div><Arrow diagonal /></a>
          <a href="#biblioteca"><span className={styles.quickIcon}>≡</span><div><strong>Documentos</strong><small>Editais, diretrizes e pareceres</small></div><Arrow diagonal /></a>
          <a href={memberArea}><span className={styles.quickIcon}>ID</span><div><strong>Área do associado</strong><small>Anuidade, carteirinha e benefícios</small></div><Arrow diagonal /></a>
        </div>
      </section>

      <section className={styles.about} id="sociedade">
        <div className={`${styles.shell} ${styles.aboutGrid}`}>
          <div>
            <p className={styles.sectionLabel}>A ABORL-CCF</p>
            <h2>A entidade que representa a <em>especialidade no Brasil.</em></h2>
          </div>
          <div className={styles.aboutCopy}>
            <p>A Associação Brasileira de Otorrinolaringologia e Cirurgia Cérvico-Facial reúne os especialistas do país em torno da ciência, da formação e da defesa profissional.</p>
            <p>Atua na titulação de especialistas, na educação médica continuada, na produção de diretrizes e no diálogo permanente com entidades de classe e poder público.</p>
            <a href={`${official}/institucional/`} target="_blank" rel="noreferrer">Conheça nossa história <Arrow /></a>
          </div>
        </div>

        <div className={`${styles.shell} ${styles.valuesGrid}`}>
          <article><span>01</span><i className={styles.valueCircle} /><h3>Titulação e formação</h3><p>Título de especialista, áreas de atuação, preceptorias e fellowships.</p></article>
          <article><span>02</span><i className={styles.valueCircle} /><h3>Educação continuada</h3><p>ORLCast, Projeto NEXT, cursos itinerantes e conteúdo científico.</p></article>
          <article><span>03</span><i className={styles.valueCircle} /><h3>Defesa profissional</h3><p>Pareceres, posicionamentos e representação da especialidade.</p></article>
          <article><span>04</span><i className={styles.valueCircle} /><h3>Rede nacional</h3><p>5 academias de subespecialidade e 21 sociedades regionais.</p></article>
        </div>
      </section>

      <section className={styles.fields} id="academias">
        <div className={`${styles.shell} ${styles.sectionHeading} ${styles.darkHeading}`}>
          <div><p className={styles.sectionLabel}>Academias e Sociedades</p><h2>Cinco academias, vinte e uma <em>sociedades regionais.</em></h2></div>
          <p className={styles.fieldsNote}>Cada academia e cada sociedade regional ganha página própria, mantida pela Secretaria.</p>
        </div>
        <div className={`${styles.shell} ${styles.fieldsGrid}`}>
          {academias.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <div className={styles.fieldSymbol} aria-hidden="true"><i /><i /><i /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className={`${styles.shell} ${styles.fieldsNoteBottom}`}>E as 21 sociedades regionais — de Norte a Sul — no <a href="#encontre">Mapa das Regionais</a>.</p>
      </section>

      <section className={styles.medicine} id="titulo">
        <div className={`${styles.shell} ${styles.medicineGrid}`}>
          <div className={styles.chamberVisual}>
            <div className={styles.chamberPhoto}><Image src="/aborl/banner-next.jpg" alt="Projeto NEXT — formação do jovem otorrino" fill sizes="(max-width: 900px) 100vw, 42vw" /></div>
            <div className={styles.pressureCard}><span>112</span><p>preceptorias e<br />fellowships credenciados</p></div>
          </div>
          <div className={styles.medicineCopy}>
            <p className={styles.sectionLabel}>Residência e Título de Especialista</p>
            <h2>O caminho da formação, do início ao título.</h2>
            <p>A ABORL-CCF credencia os serviços de formação, organiza os exames de suficiência e acompanha o médico da residência ao título de especialista e às áreas de atuação.</p>
            <div className={styles.process}>
              <article><span>01</span><div><strong>Serviços credenciados</strong><small>100 preceptorias e 12 fellowships em todo o país.</small></div></article>
              <article><span>02</span><div><strong>Exame de suficiência</strong><small>Editais do Título de Especialista e das áreas de atuação.</small></div></article>
              <article><span>03</span><div><strong>Jovem ORL</strong><small>Acolhimento e formação de quem está começando.</small></div></article>
            </div>
            <a className={styles.primaryButton} href={`${official}/residencia-e-titulo-de-especialista/`} target="_blank" rel="noreferrer">Conheça o caminho <Arrow /></a>
          </div>
        </div>
      </section>

      <section className={styles.emc} id="emc">
        <div className={`${styles.shell} ${styles.sectionHeading}`}>
          <div><p className={`${styles.sectionLabel} ${styles.lightLabel}`}>Educação médica continuada</p><h2>Conteúdo científico o ano <em>inteiro.</em></h2></div>
          <a href={`${official}/emc/`} target="_blank" rel="noreferrer">Ver toda a EMC <Arrow /></a>
        </div>
        <div className={`${styles.shell} ${styles.emcGrid}`}>
          {emc.map(([title, text, img]) => (
            <article key={title}>
              <div className={styles.emcVisual}><Image src={`/aborl/${img}`} alt={title} fill sizes="(max-width: 900px) 100vw, 33vw" /></div>
              <div className={styles.emcCopy}><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
        <p className={`${styles.shell} ${styles.medicalNotice}`}>São 164 vídeos e podcasts publicados — ORLTube, ORLCast, videocasts e o Pro-ORL — organizados por tema e por ano no novo portal.</p>
      </section>

      <section className={styles.locator} id="encontre">
        <div className={`${styles.shell} ${styles.locatorGrid}`}>
          <div className={styles.mapCard}>
            <div className={styles.mapHeader}><span>Mapa das regionais</span><strong>Brasil</strong></div>
            <div className={styles.mapShape} aria-hidden="true"><i /><i /><i /><i /><i /><i /><span>21 sociedades regionais</span></div>
          </div>
          <div className={styles.locatorCopy}>
            <p className={styles.sectionLabel}>Encontre um otorrino</p>
            <h2>O especialista certo, perto de você.</h2>
            <p>Consulte o diretório nacional da ABORL-CCF e localize otorrinolaringologistas titulados em qualquer região do Brasil — alimentado pela base real de associados.</p>
            <form action="#encontre">
              <label htmlFor="location">Busque por cidade ou estado</label>
              <div><input id="location" type="search" placeholder="Ex.: São Paulo, SP" /><button type="submit">Buscar <Arrow /></button></div>
            </form>
            <div className={styles.locatorLinks}><a href={`${official}/localize-seu-medico/`} target="_blank" rel="noreferrer">Localize seu médico <Arrow /></a><a href={`${official}/mapa-das-regionais/`} target="_blank" rel="noreferrer">Mapa das regionais <Arrow /></a></div>
          </div>
        </div>
      </section>

      <section className={styles.agenda} id="agenda">
        <div className={`${styles.shell} ${styles.sectionHeading} ${styles.darkHeading}`}>
          <div><p className={styles.sectionLabel}>Eventos</p><h2>Congressos, meetings e <em>cursos itinerantes.</em></h2></div>
          <a href={`${official}/eventos/`} target="_blank" rel="noreferrer">Ver a agenda completa <Arrow /></a>
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
              <a href={`${official}/eventos/`} target="_blank" rel="noreferrer">Ver o evento <Arrow /></a>
            </article>
          ))}
        </div>
        <p className={`${styles.shell} ${styles.agendaNote}`}>São 57 eventos publicados hoje — a agenda é mantida pela própria Secretaria, com página individual por evento e inscrição integrada.</p>
      </section>

      <section className={styles.library} id="biblioteca">
        <div className={`${styles.shell} ${styles.libraryGrid}`}>
          <div className={styles.libraryIntro}>
            <p className={styles.sectionLabel}>Documentos</p>
            <h2>398 documentos, achados em segundos.</h2>
            <p>Editais, diretrizes, pareceres, atas e documentos institucionais reunidos em uma biblioteca com busca e filtros por tipo e por ano — atualizada pela Secretaria, sem depender de fornecedor.</p>
            <a href={`${official}/documentos/`} target="_blank" rel="noreferrer">Ver todos os documentos <Arrow /></a>
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
          <div><p className={styles.sectionLabel}>Atualização e posicionamento</p><h2>Notícias da <em>ABORL-CCF.</em></h2></div>
          <a href={`${official}/noticias/`} target="_blank" rel="noreferrer">Ver todas as notícias <Arrow /></a>
        </div>
        <div className={`${styles.shell} ${styles.newsGrid}`}>
          {news.map(([tag, title, date], index) => (
            <article key={title}>
              <div className={`${styles.newsVisual} ${index === 0 ? styles.noteVisual : ""}`}>
                {index === 0 ? <Image src="/aborl/banner-eleicoes.jpg" alt="Eleições ABORL-CCF 2026" fill sizes="(max-width: 900px) 100vw, 33vw" /> : <><span>ABORL</span><i /><i /><i /></>}
              </div>
              <div className={styles.newsCopy}><p><span>{tag}</span>{date}</p><h3>{title}</h3><a href={`${official}/noticias/`} target="_blank" rel="noreferrer">Ler notícia <Arrow /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.oxi} id="comunicacao">
        <div className={`${styles.shell} ${styles.oxiCard}`}>
          <div className={styles.oxiCopy}>
            <p className={styles.sectionLabel}>Comunicação oficial</p>
            <h2>O associado <em>informado</em>, sem depender de rede social.</h2>
            <p>Comunicados, editais e convocações enviados pela própria Secretaria: template fixo, listas segmentadas — associados, titulados, regionais, diretoria — e relatório de abertura por envio.</p>
          </div>
          <form className={styles.oxiForm} action="#comunicacao">
            <label htmlFor="oxi-email">Receba os comunicados da ABORL-CCF</label>
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
            <h2>Uma especialidade forte começa com o associado em dia.</h2>
            <p>Associe-se à ABORL-CCF e tenha acesso à formação, à representação e aos benefícios de uma rede nacional de especialistas.</p>
            <ul><li><span>✓</span> Carteirinha digital e anuidade por PIX, boleto ou cartão</li><li><span>✓</span> Condições especiais em congressos e cursos</li><li><span>✓</span> Acesso a diretrizes e conteúdos exclusivos</li><li><span>✓</span> Presença no diretório nacional de otorrinos</li><li><span>✓</span> Voto nas eleições e assembleias</li></ul>
            <a className={styles.whiteButton} href="#proposta">Quero me associar <Arrow /></a>
          </div>

          <div className={styles.dashboardWrap}>
          <div className={styles.dashboard}>
            <div className={styles.dashboardTop}><Brand light compact /><span>Olá, Dr. Carlos <i>CA</i></span></div>
            <div className={styles.dashboardBody}>
              <div className={styles.dashboardWelcome}><div><p>Área do associado</p><h3>Bem-vindo à sua ABORL-CCF.</h3></div><span>● Cadastro ativo</span></div>
              <div className={styles.dashboardCards}><article><span>Anuidade 2026</span><strong>Em dia</strong><small>Comprovante disponível</small></article><article><span>Título de Especialista</span><strong>Titulado</strong><small>Certificado disponível</small></article></div>
              <div className={styles.dashboardMenu}><a href={memberArea}><span>01</span>Carteirinha digital<Arrow /></a><a href={memberArea}><span>02</span>Certificados e eventos<Arrow /></a><a href={memberArea}><span>03</span>Documentos exclusivos<Arrow /></a><a href={memberArea}><span>04</span>Atualizar perfil profissional<Arrow /></a></div>
            </div>
          </div>
          <p className={styles.dashboardCaption}>Área do associado nativa — plataforma Softaliza com a identidade da ABORL-CCF, no mesmo lugar do portal.</p>
          </div>
        </div>
      </section>

      <section className={styles.faq} id="duvidas">
        <div className={`${styles.shell} ${styles.faqGrid}`}>
          <div><p className={styles.sectionLabel}>Sou paciente</p><h2>Informação clara para quem procura um otorrino.</h2><p>A ABORL-CCF ajuda o paciente a entender a especialidade, quando procurar o especialista e como encontrar um profissional titulado.</p></div>
          <div className={styles.faqList}>
            <details open><summary>O que trata o otorrinolaringologista?<span>+</span></summary><p>Doenças do ouvido, nariz, seios da face, garganta, laringe e estruturas do pescoço — da rinite e da sinusite à perda auditiva, ronco, voz e cirurgias cérvico-faciais.</p></details>
            <details><summary>Como sei se o médico é titulado pela ABORL-CCF?<span>+</span></summary><p>O diretório nacional lista os associados titulados. A titulação é obtida por exame de suficiência, conforme os editais publicados na área de documentos.</p></details>
            <details><summary>Quando devo procurar um otorrino?<span>+</span></summary><p>Sintomas persistentes no nariz, ouvido ou garganta — obstrução nasal, dor de ouvido, rouquidão por mais de duas semanas, ronco e alterações da audição — merecem avaliação do especialista.</p></details>
            <details><summary>A ABORL-CCF indica tratamentos?<span>+</span></summary><p>A ABORL-CCF publica diretrizes e consensos que orientam a conduta médica. A indicação é sempre do profissional que avalia o caso.</p></details>
            <a href={`${official}/`} target="_blank" rel="noreferrer">Ver o conteúdo para pacientes <Arrow /></a>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={`${styles.shell} ${styles.contactGrid}`}>
          <div><p className={`${styles.sectionLabel} ${styles.lightLabel}`}>Fale com a ABORL-CCF</p><h2>Ciência e representação para a especialidade.</h2></div>
          <div><a href="tel:+551150537500">(11) 5053-7500 <Arrow /></a><a href="https://wa.me/5511952661614" target="_blank" rel="noreferrer">WhatsApp (11) 95266-1614 <Arrow /></a><a className={styles.contactButton} href={`${official}/contato/`} target="_blank" rel="noreferrer">Enviar uma mensagem</a></div>
        </div>
      </section>

      <section className={styles.proposal} id="proposta">
        <div className={`${styles.shell} ${styles.proposalGrid}`}>
          <div><span>Proposta Softaliza</span><h2>Um portal à altura da ABORL-CCF.</h2></div>
          <div>
            <p>Esta demonstração é o <strong>novo portal institucional da ABORL-CCF</strong>: conteúdo publicado pela própria Secretaria, com os 1.548 itens do portal atual migrados — documentos, vídeos, preceptorias, pareceres e regionais.</p>
            <p>Ele é entregue como <strong>solução completa</strong>, junto com a plataforma Softaliza: área do associado, carteirinha digital, anuidade por PIX, boleto ou cartão, votações online, cursos e eventos — nos planos <strong>Avançado</strong> ou <strong>Premium</strong>.</p>
            <ul className={styles.proposalList}>
              <li>Sem multa, sem fidelidade e sem bloqueio técnico</li>
              <li>Domínio, código, banco e listas em nome da ABORL-CCF</li>
              <li>Exportação integral dos dados a qualquer momento</li>
            </ul>
            <a href="https://crm.softaliza.com.br/proposta-aborl" target="_blank" rel="noreferrer">Ver a proposta comercial <Arrow /></a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.shell} ${styles.footerGrid}`}>
          <div><Brand light /><p>Av. Indianópolis, 1287 — Planalto Paulista · São Paulo/SP · CEP 04063-002</p></div>
          <div><h2>Institucional</h2><a href="#sociedade">A ABORL-CCF</a><a href="#academias">Academias e Sociedades</a><a href={`${official}/institucional/`}>Documentos</a><a href="#noticias">Notícias</a></div>
          <div><h2>Formação</h2><a href="#titulo">Residência e Título</a><a href="#emc">EMC</a><a href="#agenda">Eventos</a><a href="#biblioteca">Documentos</a></div>
          <div><h2>Associados</h2><a href={memberArea}>Área do associado</a><a href={memberArea}>Associe-se</a><a href="#encontre">Encontre um otorrino</a><a href="#duvidas">Sou paciente</a></div>
        </div>
        <div className={`${styles.shell} ${styles.footerBottom}`}><p>© 2026 Associação Brasileira de Otorrinolaringologia e Cirurgia Cérvico-Facial. Proposta demonstrativa.</p><span>Uma experiência Softaliza</span></div>
      </footer>
    </main>
  );
}
