import type { Metadata } from "next";
import Image from "next/image";
import styles from "./sbmh.module.css";

// O openGraph precisa ser declarado aqui: sem isso a rota herda o do layout
// raiz e o link compartilhado (WhatsApp/e-mail) chega à SBMH anunciando o
// portal modelo genérico, e não a proposta dela.
export const metadata: Metadata = {
  title: "SBMH — Sociedade Brasileira de Medicina Marítima e Hiperbárica",
  description:
    "Proposta visual da Softaliza: MVP do novo portal institucional da Sociedade Brasileira de Medicina Marítima e Hiperbárica.",
  openGraph: {
    title: "SBMH — MVP do novo portal institucional",
    description:
      "Proposta visual preparada pela Softaliza para a Sociedade Brasileira de Medicina Marítima e Hiperbárica.",
    type: "website",
    locale: "pt_BR",
    url: "https://exemplo.softaliza.com.br/sbmh",
    siteName: "Proposta Softaliza — SBMH",
    images: [{ url: "/sbmh/og.png", width: 1200, height: 630, alt: "MVP do novo portal da SBMH — proposta Softaliza" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SBMH — MVP do novo portal institucional",
    description: "Proposta visual preparada pela Softaliza para a SBMH.",
    images: ["/sbmh/og.png"],
  },
};

const official = "https://sbmh.com.br";
// A área do associado da solução proposta é a plataforma Softaliza integrada —
// nesta demonstração, todos os acessos apontam para o mockup da própria página.
const memberArea = "#associado";

const indications = [
  ["01", "Feridas complexas", "Apoio no tratamento de feridas crônicas, complicações cirúrgicas e lesões de difícil cicatrização."],
  ["02", "Infecções graves", "Uso adjuvante em infecções de tecidos moles, osteomielites e outros quadros selecionados."],
  ["03", "Lesões por radiação", "Cuidado complementar em danos tardios causados por radioterapia e comprometimento tecidual."],
  ["04", "Medicina do mergulho", "Atendimento a acidentes de descompressão, embolia gasosa e condições relacionadas ao ambiente subaquático."],
];

const news = [
  ["Nota técnica", "Oxigenoterapia hiperbárica e oxigenoterapia tópica: entenda as diferenças", "12 JUN 2026"],
  ["Institucional", "Assembleia Geral Ordinária 2026 — deliberações aprovadas", "28 MAI 2026"],
  ["Defesa profissional", "SBMH celebra o reconhecimento da área de atuação", "18 DEZ 2025"],
];

// Eventos e documentos reais publicados hoje em sbmh.com.br. A agenda pública
// da SBMH está sem edições futuras — por isso os rótulos de status são os
// verdadeiros, sem inventar datas que a Sociedade não anunciou.
const agenda = [
  {
    tag: "Congresso",
    status: "Edição realizada",
    title: "10º Congresso Brasileiro de Medicina Hiperbárica & 2º Congresso Brasileiro de Medicina Marítima",
    place: "Canela · Rio Grande do Sul",
    date: "16 a 18 de outubro de 2025",
    featured: true,
  },
  {
    tag: "Formação",
    status: "Curso permanente",
    title: "Curso de Medicina Hiperbárica do Rio de Janeiro",
    place: "Rio de Janeiro · RJ",
    date: "Turmas divulgadas pela Secretaria",
  },
  {
    tag: "Formação",
    status: "Curso permanente",
    title: "9º Curso de Oxigenoterapia Hiperbárica OHB Minas Gerais",
    place: "Minas Gerais · MG",
    date: "Turmas divulgadas pela Secretaria",
  },
];

// As três frentes da especialidade — o briefing exige páginas permanentes
// para cada uma (seção 2, "Áreas temáticas").
const fields = [
  ["01", "Medicina Marítima", "Saúde de quem vive e trabalha no mar: aptidão do trabalhador aquaviário, condições de saúde a bordo e a interface entre a medicina e a operação marítima."],
  ["02", "Medicina do Mergulho", "Fisiologia e segurança das atividades subaquáticas: aptidão para o mergulho, prevenção e conduta nos acidentes disbáricos."],
  ["03", "Medicina Hiperbárica", "Oxigenoterapia em câmara hiperbárica: indicações reconhecidas, protocolos de segurança e integração com o cuidado principal do paciente."],
];

const library = [
  ["Diretrizes", "Diretrizes de Utilização da OHB", "Referência técnica para indicação e conduta.", `${official}/sobre/diretrizes-de-utilizacao-da-ohb/`],
  ["Resolução", "Resolução CFM", "Marco regulatório da atuação em medicina hiperbárica.", `${official}/sobre/resolucao-cfm/`],
  ["Institucional", "Estatuto da SBMH", "Norma interna, finalidades e governança da Sociedade.", `${official}/sobre/estatuto-sbmh/`],
  ["Notas técnicas", "Posicionamentos da SBMH", "Manifestações oficiais sobre temas da especialidade.", `${official}/noticias/`],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

// O logo oficial da SBMH vem em branco, para aplicação sobre fundo escuro.
// Em fundo claro (header) é preciso usar a variante navy, senão a marca
// simplesmente não aparece.
function Brand({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <span className={`${styles.brand} ${light ? styles.brandLight : ""} ${compact ? styles.brandCompact : ""}`}>
      <Image
        src={light ? "/sbmh/logo.svg" : "/sbmh/logo-navy.svg"}
        alt="SBMH — Sociedade Brasileira de Medicina Marítima e Hiperbárica"
        width={262}
        height={82}
        priority
      />
    </span>
  );
}

export default function SbmhProposal() {
  return (
    <main className={styles.page}>
      <div className={styles.proposalBar}>
        <div className={styles.shell}>
          <p><span>Proposta visual</span> MVP do novo portal institucional da SBMH</p>
          <a href="#proposta">Desenvolvido pela Softaliza <Arrow /></a>
        </div>
      </div>

      <div className={styles.utilityBar}>
        <div className={styles.shell}>
          <p>Sociedade Brasileira de Medicina Marítima e Hiperbárica</p>
          <div><a href="tel:+5548999995741">(48) 99999-5741</a><span>•</span><a href="mailto:secretariaexecutiva@sbmh.com.br">secretariaexecutiva@sbmh.com.br</a><a className={styles.utilityMember} href={memberArea}>Área do associado</a></div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.shell}>
          <a href="#inicio" aria-label="SBMH — página inicial"><Brand /></a>
          <nav aria-label="Navegação principal">
            <a href="#sociedade">A SBMH</a>
            <a href="#medicina">Medicina Hiperbárica</a>
            <a href="#encontre">Clínicas e Médicos</a>
            <a href="#agenda">Agenda</a>
            <a href="#biblioteca">Biblioteca</a>
            <a href="#noticias">Notícias</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <div className={styles.headerActions}>
            <a className={styles.memberLink} href={memberArea}>Área do associado</a>
            <a className={styles.primaryButton} href={memberArea}>Filie-se à SBMH <Arrow /></a>
          </div>
          <details className={styles.mobileMenu}>
            <summary>Menu</summary>
            <nav><a href="#sociedade">A SBMH</a><a href="#medicina">Medicina Hiperbárica</a><a href="#indicacoes">Indicações</a><a href="#encontre">Clínicas e Médicos</a><a href="#agenda">Agenda</a><a href="#biblioteca">Biblioteca</a><a href="#noticias">Notícias</a><a href="#duvidas">Dúvidas</a><a href={memberArea}>Área do associado</a></nav>
          </details>
        </div>
      </header>

      <section className={styles.hero} id="inicio">
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Ciência · Segurança · Ética</p>
            <h1>Referência nacional em Medicina Marítima e <em>Hiperbárica.</em></h1>
            <p className={styles.heroLead}>Há 43 anos, a SBMH congrega médicos comprometidos com a excelência científica, técnica e ética na medicina subaquática e na oxigenoterapia hiperbárica.</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#medicina">Conheça a especialidade <Arrow /></a>
              <a className={styles.secondaryButton} href="#encontre">Encontre uma clínica ou médico</a>
            </div>
            <div className={styles.heroCredential}>
              <strong>43</strong><span>anos de salvaguarda da ciência<br />e defesa dos associados</span><i /><p>Sociedade médica de atuação nacional</p>
            </div>
          </div>

          <aside className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <Image src="/sbmh/43-anos.png" alt="Médicos, mergulho e tratamento em câmara hiperbárica" fill sizes="(max-width: 900px) 100vw, 48vw" />
            </div>
            <div className={styles.heroBadge}><span>O<sub>2</sub></span><p>Oxigenoterapia<br />Hiperbárica</p></div>
          </aside>
        </div>
      </section>

      <section className={styles.quickAccess} aria-label="Acessos rápidos">
        <div className={`${styles.shell} ${styles.quickGrid}`}>
          <a href="#encontre"><span className={styles.quickIcon}>⌖</span><div><strong>Encontre clínicas e médicos</strong><small>Busca por estado e cidade</small></div><Arrow diagonal /></a>
          <a href="#indicacoes"><span className={styles.quickIcon}>+</span><div><strong>Indicações médicas</strong><small>Quando a OHB é recomendada</small></div><Arrow diagonal /></a>
          <a href={`${official}/sobre/diretrizes-de-utilizacao-da-ohb/`} target="_blank" rel="noreferrer"><span className={styles.quickIcon}>≡</span><div><strong>Diretrizes da OHB</strong><small>Documentos e referências</small></div><Arrow diagonal /></a>
          <a href={memberArea}><span className={styles.quickIcon}>ID</span><div><strong>Área do associado</strong><small>Anuidade, cadastro e benefícios</small></div><Arrow diagonal /></a>
        </div>
      </section>

      <section className={styles.about} id="sociedade">
        <div className={`${styles.shell} ${styles.aboutGrid}`}>
          <div>
            <p className={styles.sectionLabel}>Sobre a SBMH</p>
            <h2>Uma sociedade médica dedicada à <em>excelência da especialidade.</em></h2>
          </div>
          <div className={styles.aboutCopy}>
            <p>A Sociedade Brasileira de Medicina Marítima e Hiperbárica reúne profissionais comprometidos com o desenvolvimento seguro e responsável da medicina subaquática e da oxigenoterapia hiperbárica.</p>
            <p>Atua na atualização científica, na defesa profissional, na orientação da sociedade e no fortalecimento de boas práticas em todo o Brasil.</p>
            <a href={`${official}/sobre/historia-da-sbmh/`} target="_blank" rel="noreferrer">Conheça nossa história <Arrow /></a>
          </div>
        </div>

        <div className={`${styles.shell} ${styles.valuesGrid}`}>
          <article><span>01</span><i className={styles.valueCircle} /><h3>Excelência científica</h3><p>Atualização, diretrizes e educação médica baseadas em evidências.</p></article>
          <article><span>02</span><i className={styles.valueCircle} /><h3>Segurança assistencial</h3><p>Boas práticas para médicos, clínicas e pacientes em todo o país.</p></article>
          <article><span>03</span><i className={styles.valueCircle} /><h3>Defesa profissional</h3><p>Representação qualificada e reconhecimento da área de atuação.</p></article>
          <article><span>04</span><i className={styles.valueCircle} /><h3>Informação responsável</h3><p>Conteúdo claro para apoiar profissionais, pacientes e familiares.</p></article>
        </div>
      </section>

      <section className={styles.fields} id="areas">
        <div className={`${styles.shell} ${styles.sectionHeading} ${styles.darkHeading}`}>
          <div><p className={styles.sectionLabel}>Áreas de atuação</p><h2>Três frentes, uma <em>especialidade.</em></h2></div>
          <p className={styles.fieldsNote}>Cada área ganha página permanente no novo portal, mantida pela própria Secretaria.</p>
        </div>
        <div className={`${styles.shell} ${styles.fieldsGrid}`}>
          {fields.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <div className={styles.fieldSymbol} aria-hidden="true"><i /><i /><i /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.medicine} id="medicina">
        <div className={`${styles.shell} ${styles.medicineGrid}`}>
          <div className={styles.chamberVisual}>
            <div className={styles.chamberPhoto}><Image src="/sbmh/43-anos.png" alt="Paciente em tratamento com oxigenoterapia hiperbárica" fill sizes="(max-width: 900px) 100vw, 42vw" /></div>
            <div className={styles.pressureCard}><span>100%</span><p>oxigênio medicinal<br />em ambiente pressurizado</p></div>
          </div>
          <div className={styles.medicineCopy}>
            <p className={styles.sectionLabel}>Medicina Hiperbárica</p>
            <h2>Oxigênio, pressão e ciência a favor da recuperação.</h2>
            <p>A Oxigenoterapia Hiperbárica é uma terapia adjuvante realizada em ambiente pressurizado, no qual o paciente respira oxigênio medicinal. O tratamento promove alterações físicas, químicas e biológicas que auxiliam processos de cicatrização e recuperação tecidual.</p>
            <div className={styles.process}>
              <article><span>01</span><div><strong>Avaliação médica</strong><small>Indicação individualizada por profissional habilitado.</small></div></article>
              <article><span>02</span><div><strong>Sessão em câmara hiperbárica</strong><small>Tratamento conduzido sob protocolos de segurança.</small></div></article>
              <article><span>03</span><div><strong>Acompanhamento integrado</strong><small>Atuação complementar ao cuidado principal do paciente.</small></div></article>
            </div>
            <a className={styles.primaryButton} href={`${official}/medicina-hiperbarica/o-que-e/`} target="_blank" rel="noreferrer">Entenda como funciona <Arrow /></a>
          </div>
        </div>
      </section>

      <section className={styles.indications} id="indicacoes">
        <div className={`${styles.shell} ${styles.sectionHeading}`}>
          <div><p className={`${styles.sectionLabel} ${styles.lightLabel}`}>Indicações médicas</p><h2>Conhecimento seguro para apoiar a <em>decisão clínica.</em></h2></div>
          <a href={`${official}/indicacoes/`} target="_blank" rel="noreferrer">Ver todas as indicações <Arrow /></a>
        </div>
        <div className={`${styles.shell} ${styles.indicationGrid}`}>
          {indications.map(([number, title, text]) => <article key={number}><span>{number}</span><div className={styles.indicationSymbol}><i /><i /><i /></div><h3>{title}</h3><p>{text}</p><a href={`${official}/indicacoes/`} target="_blank" rel="noreferrer" aria-label={`Saiba mais sobre ${title}`}><Arrow diagonal /></a></article>)}
        </div>
        <p className={`${styles.shell} ${styles.medicalNotice}`}>As informações têm caráter educativo. A indicação do tratamento deve ser realizada por médico, considerando o quadro clínico e os protocolos aplicáveis.</p>
      </section>

      <section className={styles.locator} id="encontre">
        <div className={`${styles.shell} ${styles.locatorGrid}`}>
          <div className={styles.mapCard}>
            <div className={styles.mapHeader}><span>Diretório nacional</span><strong>Brasil</strong></div>
            <div className={styles.mapShape} aria-hidden="true"><i /><i /><i /><i /><i /><i /><span>Clínicas e médicos associados</span></div>
          </div>
          <div className={styles.locatorCopy}>
            <p className={styles.sectionLabel}>Clínicas e Médicos</p>
            <h2>Encontre atendimento especializado perto de você.</h2>
            <p>Consulte o diretório nacional da SBMH e localize clínicas e profissionais associados em diferentes regiões do Brasil.</p>
            <form action="#encontre">
              <label htmlFor="location">Busque por cidade ou estado</label>
              <div><input id="location" type="search" placeholder="Ex.: Florianópolis, SC" /><button type="submit">Buscar <Arrow /></button></div>
            </form>
            <div className={styles.locatorLinks}><a href={`${official}/clinicas/`} target="_blank" rel="noreferrer">Ver clínicas credenciadas <Arrow /></a><a href={`${official}/medicos/`} target="_blank" rel="noreferrer">Buscar médicos associados <Arrow /></a></div>
          </div>
        </div>
      </section>

      <section className={styles.agenda} id="agenda">
        <div className={`${styles.shell} ${styles.sectionHeading} ${styles.darkHeading}`}>
          <div><p className={styles.sectionLabel}>Cursos e eventos</p><h2>Agenda científica e <em>formação continuada.</em></h2></div>
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
        <p className={`${styles.shell} ${styles.agendaNote}`}>A agenda é publicada e mantida pela própria Secretaria, com página individual por evento e inscrição integrada.</p>
      </section>

      <section className={styles.news} id="noticias">
        <div className={`${styles.shell} ${styles.sectionHeading} ${styles.darkHeading}`}>
          <div><p className={styles.sectionLabel}>Atualização e posicionamento</p><h2>Notícias da <em>SBMH.</em></h2></div>
          <a href={`${official}/noticias/`} target="_blank" rel="noreferrer">Ver todas as notícias <Arrow /></a>
        </div>
        <div className={`${styles.shell} ${styles.newsGrid}`}>
          {news.map(([tag, title, date], index) => (
            <article key={title}>
              <div className={`${styles.newsVisual} ${index === 0 ? styles.noteVisual : ""}`}>
                {index === 0 ? <Image src="/sbmh/nota-tecnica.png" alt="Nota técnica da SBMH" fill sizes="(max-width: 900px) 100vw, 33vw" /> : <><span>SBMH</span><i /><i /><i /></>}
              </div>
              <div className={styles.newsCopy}><p><span>{tag}</span>{date}</p><h3>{title}</h3><a href={`${official}/noticias/`} target="_blank" rel="noreferrer">Ler notícia <Arrow /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.library} id="biblioteca">
        <div className={`${styles.shell} ${styles.libraryGrid}`}>
          <div className={styles.libraryIntro}>
            <p className={styles.sectionLabel}>Biblioteca institucional</p>
            <h2>Documentos oficiais, sempre no mesmo lugar.</h2>
            <p>Notas técnicas, resoluções, diretrizes e documentos institucionais reunidos em uma biblioteca pública, com busca e categorias — atualizada pela Secretaria, sem depender de fornecedor.</p>
            <a href={`${official}/sobre/diretrizes-de-utilizacao-da-ohb/`} target="_blank" rel="noreferrer">Ver todos os documentos <Arrow /></a>
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

      <section className={styles.oxi} id="oxigenoticias">
        <div className={`${styles.shell} ${styles.oxiCard}`}>
          <div className={styles.oxiCopy}>
            <p className={styles.sectionLabel}>Newsletter oficial</p>
            <h2><em>Oxigenotícias</em>, direto da Secretaria.</h2>
            <p>A newsletter da SBMH passa a ser produzida e enviada pela própria equipe: template fixo e reutilizável, listas segmentadas — associados, não associados, diretoria — e relatório de abertura por edição.</p>
          </div>
          <form className={styles.oxiForm} action="#oxigenoticias">
            <label htmlFor="oxi-email">Receba as próximas edições</label>
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
            <h2>Uma sociedade forte para uma especialidade cada vez mais reconhecida.</h2>
            <p>Filie-se à SBMH e tenha acesso a uma rede nacional comprometida com ciência, segurança, formação e representação profissional.</p>
            <ul><li><span>✓</span> Carteirinha digital e anuidade por PIX, boleto ou cartão</li><li><span>✓</span> Condições especiais em cursos e eventos</li><li><span>✓</span> Parceria internacional com a UHMS</li><li><span>✓</span> Acesso a diretrizes e conteúdos exclusivos</li><li><span>✓</span> Presença no diretório de médicos e clínicas</li></ul>
            <a className={styles.whiteButton} href="#proposta">Quero me filiar <Arrow /></a>
          </div>

          <div className={styles.dashboardWrap}>
          <div className={styles.dashboard}>
            <div className={styles.dashboardTop}><Brand light compact /><span>Olá, Dr. Marcelo <i>MS</i></span></div>
            <div className={styles.dashboardBody}>
              <div className={styles.dashboardWelcome}><div><p>Área do associado</p><h3>Bem-vindo à sua SBMH.</h3></div><span>● Cadastro ativo</span></div>
              <div className={styles.dashboardCards}><article><span>Anuidade 2026</span><strong>Em dia</strong><small>Comprovante disponível</small></article><article><span>Próxima formação</span><strong>Atualização em OHB</strong><small>Inscrições abertas</small></article></div>
              <div className={styles.dashboardMenu}><a href={memberArea}><span>01</span>Carteirinha digital<Arrow /></a><a href={memberArea}><span>02</span>Certificados e eventos<Arrow /></a><a href={memberArea}><span>03</span>Documentos exclusivos<Arrow /></a><a href={memberArea}><span>04</span>Atualizar perfil profissional<Arrow /></a></div>
            </div>
          </div>
          <p className={styles.dashboardCaption}>Área do associado nativa — plataforma Softaliza com a identidade da SBMH, no mesmo lugar do site.</p>
          </div>
        </div>
      </section>

      <section className={styles.partnership}>
        <div className={`${styles.shell} ${styles.partnershipGrid}`}>
          <div className={styles.uhmsLogo}><Image src="/sbmh/uhms.png" alt="Parceria SBMH e Undersea and Hyperbaric Medical Society" width={240} height={240} /></div>
          <div><p className={styles.sectionLabel}>Conexão internacional</p><h2>Parceria entre a SBMH e a UHMS.</h2><p>Associados da SBMH têm condições especiais para integrar a Undersea and Hyperbaric Medical Society, ampliando o acesso à produção científica e à comunidade internacional da especialidade.</p><a href={`${official}/area-do-associado/desconto-uhms/`} target="_blank" rel="noreferrer">Conheça o benefício <Arrow /></a></div>
        </div>
      </section>

      <section className={styles.faq} id="duvidas">
        <div className={`${styles.shell} ${styles.faqGrid}`}>
          <div><p className={styles.sectionLabel}>Dúvidas frequentes</p><h2>Informação clara para pacientes e familiares.</h2><p>A SBMH ajuda a esclarecer como funciona o tratamento, seus cuidados e suas principais indicações.</p></div>
          <div className={styles.faqList}>
            <details open><summary>Entrar na câmara hiperbárica dói ou traz desconforto?<span>+</span></summary><p>A sensação de pressurização pode ser semelhante à decolagem e ao pouso de um avião nos ouvidos. A equipe orienta manobras simples para controlar o desconforto.</p></details>
            <details><summary>Quantas sessões são necessárias?<span>+</span></summary><p>A quantidade depende da indicação, da condição clínica e da resposta ao tratamento. A definição deve ser feita pelo médico responsável.</p></details>
            <details><summary>O plano de saúde cobre o tratamento?<span>+</span></summary><p>A cobertura depende da indicação e das regras aplicáveis. A clínica e o médico podem orientar a documentação necessária.</p></details>
            <details><summary>Por que a OHB auxilia a cicatrização?<span>+</span></summary><p>O aumento da disponibilidade de oxigênio nos tecidos pode favorecer processos biológicos ligados à recuperação, sempre como parte de um cuidado integrado.</p></details>
            <a href={`${official}/duvidas/`} target="_blank" rel="noreferrer">Ver todas as dúvidas <Arrow /></a>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={`${styles.shell} ${styles.contactGrid}`}>
          <div><p className={`${styles.sectionLabel} ${styles.lightLabel}`}>Fale com a SBMH</p><h2>Ciência e orientação para profissionais e para a sociedade.</h2></div>
          <div><a href="mailto:secretariaexecutiva@sbmh.com.br">secretariaexecutiva@sbmh.com.br <Arrow /></a><a href="tel:+5548999995741">(48) 99999-5741 <Arrow /></a><a className={styles.contactButton} href={`${official}/contato/`} target="_blank" rel="noreferrer">Enviar uma mensagem</a></div>
        </div>
      </section>

      <section className={styles.proposal} id="proposta">
        <div className={`${styles.shell} ${styles.proposalGrid}`}>
          <div><span>Proposta Softaliza</span><h2>Um portal mais claro, confiável e integrado para a SBMH.</h2></div>
          <div>
            <p>Esta demonstração é o <strong>novo site institucional da SBMH</strong>: conteúdo publicado pela própria Secretaria, em CMS de código aberto, hospedado em contas da Sociedade.</p>
            <p>Ele é entregue como <strong>solução completa</strong>, junto com a plataforma Softaliza no lugar do sistema atual: área do associado, carteirinha digital, anuidade por PIX, boleto ou cartão, votações online, cursos e eventos — nos planos <strong>Avançado</strong> ou <strong>Premium</strong>, que soma a submissão e avaliação científica de trabalhos e a Academy para os cursos.</p>
            <ul className={styles.proposalList}>
              <li>Sem multa, sem fidelidade e sem bloqueio técnico</li>
              <li>Domínio, código, banco e listas em nome da SBMH</li>
              <li>Exportação integral dos dados a qualquer momento</li>
            </ul>
            <a href="mailto:comercial@softaliza.com.br?subject=Proposta%20de%20portal%20SBMH">Conversar sobre o projeto <Arrow /></a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.shell} ${styles.footerGrid}`}>
          <div><Brand light /><p>Excelência científica, técnica e ética na Medicina Marítima e Hiperbárica.</p></div>
          <div><h2>Institucional</h2><a href="#sociedade">Sobre a SBMH</a><a href={`${official}/sobre/diretoria-conselhos-e-comissoes/`}>Diretoria e conselhos</a><a href={`${official}/sobre/estatuto-sbmh/`}>Estatuto</a><a href="#noticias">Notícias</a></div>
          <div><h2>Medicina Hiperbárica</h2><a href="#medicina">O que é</a><a href="#indicacoes">Indicações</a><a href="#encontre">Clínicas e médicos</a><a href="#biblioteca">Biblioteca</a><a href="#duvidas">Dúvidas frequentes</a></div>
          <div><h2>Associados</h2><a href={memberArea}>Área do associado</a><a href={memberArea}>Filie-se</a><a href="#agenda">Cursos e eventos</a><a href={`${official}/sobre/diretrizes-de-utilizacao-da-ohb/`}>Diretrizes</a></div>
        </div>
        <div className={`${styles.shell} ${styles.footerBottom}`}><p>© 2026 Sociedade Brasileira de Medicina Marítima e Hiperbárica. Proposta demonstrativa.</p><span>Uma experiência Softaliza</span></div>
      </footer>
    </main>
  );
}
