"use client";

import { useEffect, useMemo, useState } from "react";

const navigation = [
  ["A associação", "#associacao"],
  ["Agenda", "#agenda"],
  ["Notícias", "#noticias"],
  ["Benefícios", "#beneficios"],
  ["Transparência", "#transparencia"],
];

const searchItems = [
  { type: "Evento", title: "Congresso NEXO 2026", href: "#agenda" },
  { type: "Documento", title: "Relatório anual de impacto", href: "#transparencia" },
  { type: "Notícia", title: "Agenda regulatória do segundo semestre", href: "#noticias" },
  { type: "Benefício", title: "Hub de conexões e negócios", href: "#beneficios" },
  { type: "Serviço", title: "Diretório nacional de associados", href: "#diretorio" },
];

const benefits = [
  {
    number: "01",
    title: "Defesa e representação profissional",
    text: "Atuação permanente junto a entidades de classe, poder público e fóruns de decisão da especialidade.",
  },
  {
    number: "02",
    title: "Educação científica continuada",
    text: "Cursos, diretrizes, congressos e atualização permanente para diferentes momentos da carreira.",
  },
  {
    number: "03",
    title: "Publicações e acervo científico",
    text: "Revistas, artigos, documentos históricos e conteúdos de referência reunidos em um só lugar.",
  },
  {
    number: "04",
    title: "Certificação e reconhecimento",
    text: "Processos, títulos e iniciativas que valorizam a qualificação e a excelência profissional.",
  },
];

const news = [
  {
    tag: "Relações institucionais",
    date: "12 JUL 2026",
    title: "NEXO apresenta prioridades do setor em audiência no Congresso Nacional",
    text: "Entidade reforça propostas para inovação, segurança jurídica e desenvolvimento sustentável.",
    tone: "cobalt",
  },
  {
    tag: "Inteligência setorial",
    date: "08 JUL 2026",
    title: "Novo panorama reúne os principais indicadores do primeiro semestre",
    text: "Painel exclusivo para associados consolida dados, tendências e projeções para 2027.",
    tone: "lime",
  },
  {
    tag: "Comunidade",
    date: "02 JUL 2026",
    title: "Programa de lideranças seleciona 40 profissionais de todo o Brasil",
    text: "Jornada conecta novas vozes a executivos e especialistas reconhecidos no mercado.",
    tone: "coral",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand ${light ? "brand-light" : ""}`}>
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span className="brand-word">nexo</span>
      <span className="brand-descriptor">Sociedade<br />Brasileira</span>
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    if (!normalized) return searchItems;
    return searchItems.filter((item) =>
      `${item.type} ${item.title}`.toLocaleLowerCase("pt-BR").includes(normalized),
    );
  }, [query]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="demo-bar">
        <div className="shell demo-inner">
          <p><span>Portal demonstrativo</span> Uma experiência digital criada para grandes associações.</p>
          <a href="#personalizar">Personalize para sua entidade <Arrow /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-main">
          <a href="#inicio" aria-label="NEXO — página inicial"><Brand /></a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>

          <div className="header-actions">
            <button className="icon-button" type="button" onClick={() => setSearchOpen(true)} aria-label="Abrir busca">
              <span className="search-icon" aria-hidden="true" />
            </button>
            <a className="member-link" href="#area-associado">Área do associado</a>
            <a className="button button-dark button-compact" href="#associe-se">Associe-se <Arrow /></a>
          </div>

          <button
            className={`menu-button ${menuOpen ? "is-open" : ""}`}
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <i /><i />
          </button>
        </div>

        <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
          <nav className="shell" aria-label="Navegação móvel">
            {navigation.map(([label, href], index) => (
              <a key={label} href={href} onClick={closeMenu}><span>0{index + 1}</span>{label}<Arrow /></a>
            ))}
            <a href="#area-associado" onClick={closeMenu}><span>06</span>Área do associado<Arrow /></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Uma voz que representa. Uma rede que transforma.</p>
            <h1>Conhecimento, excelência e compromisso <em>com a sociedade.</em></h1>
            <p className="hero-lead">Reunimos especialistas, preservamos nossa história e promovemos o avanço científico e profissional em todo o Brasil.</p>
            <div className="hero-actions">
              <a className="button button-cobalt" href="#associe-se">Faça parte da NEXO <Arrow /></a>
              <a className="text-button" href="#associacao"><span className="play-dot">▶</span> Conheça nossa atuação</a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true"><i>AM</i><i>LS</i><i>RC</i><i>+</i></div>
              <p><strong>Mais de 4.800 associados</strong><br />conectados por ciência, ética e propósito.</p>
            </div>
          </div>

          <aside className="hero-feature">
            <div className="feature-topline"><span>Em destaque</span><span>27—29 AGO</span></div>
            <div className="feature-visual" aria-hidden="true">
              <span className="feature-year">26</span>
              <span className="feature-ring ring-one" />
              <span className="feature-ring ring-two" />
              <span className="feature-node node-one" />
              <span className="feature-node node-two" />
            </div>
            <div className="feature-content">
              <p>Congresso NEXO 2026</p>
              <h2>Tradição e ciência em diálogo.</h2>
              <div><span>Brasília · Centro Internacional</span><a href="#agenda" aria-label="Ver detalhes do Congresso NEXO 2026"><Arrow diagonal /></a></div>
            </div>
          </aside>
        </div>

        <div className="shell hero-stats">
          <div><strong>28</strong><span>anos de<br />atuação nacional</span></div>
          <div><strong>4,8k</strong><span>associados<br />ativos</span></div>
          <div><strong>26</strong><span>estados<br />representados</span></div>
          <div><strong>180+</strong><span>ações de impacto<br />por ano</span></div>
        </div>
      </section>

      <section className="quick-section" aria-label="Acessos rápidos">
        <div className="shell quick-grid">
          <a href="#agenda" className="quick-card"><span className="quick-icon">17</span><div><p>Agenda de eventos</p><small>Encontros, fóruns e congressos</small></div><Arrow diagonal /></a>
          <a href="#transparencia" className="quick-card"><span className="quick-icon document-icon">≡</span><div><p>Publicações científicas</p><small>Revistas, diretrizes e acervo</small></div><Arrow diagonal /></a>
          <a href="#beneficios" className="quick-card"><span className="quick-icon">★</span><div><p>Educação continuada</p><small>Cursos, títulos e certificações</small></div><Arrow diagonal /></a>
          <a href="#diretorio" className="quick-card"><span className="quick-icon people-icon">•••</span><div><p>Encontre um associado</p><small>Diretório nacional NEXO</small></div><Arrow diagonal /></a>
        </div>
      </section>

      <section className="statement-section" id="associacao">
        <div className="shell statement-grid">
          <div>
            <p className="section-label">Nossa razão de existir</p>
            <h2>Uma trajetória dedicada à ciência, à memória e <em>à excelência.</em></h2>
          </div>
          <div className="statement-copy">
            <p>Há quase três décadas, a NEXO congrega profissionais comprometidos com o desenvolvimento científico, técnico, cultural e social de sua área de atuação.</p>
            <p>Promovemos ensino, pesquisa, intercâmbio profissional e preservação da memória, com uma presença institucional respeitada no Brasil e no exterior.</p>
            <a className="underlined-link" href="#impacto">Conheça nossa história <Arrow /></a>
          </div>
        </div>

        <div className="shell impact-grid" id="impacto">
          <article className="impact-card impact-main">
            <p>Presença institucional</p>
            <h3>Uma sociedade científica com alcance nacional.</h3>
            <div className="impact-map" aria-hidden="true">
              <span className="map-word">BRASIL</span><i className="pulse p1" /><i className="pulse p2" /><i className="pulse p3" /><i className="pulse p4" /><i className="pulse p5" />
            </div>
            <a href="#noticias">Acompanhe nossa atuação <Arrow /></a>
          </article>
          <article className="impact-card impact-small cobalt-card">
            <span>42</span><p>diretrizes e contribuições técnicas publicadas no último ano.</p>
          </article>
          <article className="impact-card impact-small lime-card">
            <span>76%</span><p>dos associados participaram de atividades científicas em 2025.</p>
          </article>
        </div>
      </section>

      <section className="agenda-section" id="agenda">
        <div className="shell">
          <div className="section-heading">
            <div><p className="section-label light-label">Agenda científica</p><h2>Encontros que preservam a história e <em>fazem avançar a ciência.</em></h2></div>
            <a className="button button-light" href="#todos-eventos">Ver agenda completa <Arrow /></a>
          </div>

          <div className="agenda-list" id="todos-eventos">
            <article className="agenda-featured">
              <div className="agenda-date"><strong>27—29</strong><span>AGO<br />2026</span></div>
                <div className="agenda-info"><p>Congresso científico nacional · Presencial</p><h3>Congresso NEXO 2026</h3><small>Centro Internacional de Convenções · Brasília, DF</small></div>
              <div className="agenda-badge"><span>Inscrições<br />abertas</span><a href="#associe-se" aria-label="Inscreva-se no Congresso NEXO 2026"><Arrow diagonal /></a></div>
            </article>
            <div className="agenda-row">
              <article><div className="mini-date"><strong>12</strong><span>SET</span></div><div><p>Educação continuada · Online</p><h3>Atualização científica e prática profissional</h3></div><a href="#associe-se" aria-label="Ver evento Atualização científica e prática profissional"><Arrow /></a></article>
              <article><div className="mini-date"><strong>03</strong><span>OUT</span></div><div><p>Encontro regional · Recife</p><h3>Memória, formação e futuro da especialidade</h3></div><a href="#associe-se" aria-label="Ver evento Memória, formação e futuro da especialidade"><Arrow /></a></article>
            </div>
          </div>
        </div>
      </section>

      <section className="news-section" id="noticias">
        <div className="shell">
          <div className="section-heading dark-heading">
            <div><p className="section-label">A NEXO em movimento</p><h2>Informação para<br /><em>quem lidera.</em></h2></div>
            <a className="underlined-link" href="#todas-noticias">Ver todas as notícias <Arrow /></a>
          </div>
          <div className="news-grid" id="todas-noticias">
            {news.map((item) => (
              <article className="news-card" key={item.title}>
                <div className={`news-visual ${item.tone}`}><span>{item.tag}</span><i /><i /><i /></div>
                <div className="news-copy"><p>{item.date}</p><h3>{item.title}</h3><small>{item.text}</small><a href="#personalizar" aria-label={`Ler notícia: ${item.title}`}>Ler notícia <Arrow /></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section" id="beneficios">
        <div className="shell benefits-grid">
          <div className="benefits-intro">
            <p className="section-label">Valor para o associado</p>
            <h2>Valor que acompanha toda a carreira.</h2>
            <p>Uma experiência completa para apoiar a formação, a prática profissional e a participação na vida da sociedade.</p>
            <a className="button button-dark" href="#associe-se">Conheça todas as vantagens <Arrow /></a>
          </div>
          <div className="benefit-list">
            {benefits.map((benefit) => (
              <article key={benefit.number}><span>{benefit.number}</span><div><h3>{benefit.title}</h3><p>{benefit.text}</p></div><Arrow diagonal /></article>
            ))}
          </div>
        </div>
      </section>

      <section className="member-section" id="area-associado">
        <div className="shell member-grid">
          <div className="member-copy">
            <p className="section-label light-label">Área do associado</p>
            <h2>Tudo o que importa.<br /><em>Em um só lugar.</em></h2>
            <p>Uma experiência simples e personalizada para acessar anuidades, eventos, certificados, publicações e serviços exclusivos.</p>
            <ul><li><span>✓</span> Carteirinha digital e situação associativa</li><li><span>✓</span> Revistas, diretrizes e conteúdos exclusivos</li><li><span>✓</span> Inscrições, certificados e anuidades</li></ul>
            <a className="button button-lime" href="#painel-demo">Explorar área do associado <Arrow /></a>
          </div>

          <div className="dashboard" id="painel-demo">
            <div className="dashboard-top"><Brand light /><span>Olá, Mariana <i>MS</i></span></div>
            <div className="dashboard-body">
              <div className="dashboard-sidebar" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              <div className="dashboard-content">
                <div className="dash-welcome"><div><p>Bom dia, Mariana</p><h3>Sua NEXO, do seu jeito.</h3></div><span className="status-dot">● Associação ativa</span></div>
                <div className="dash-cards"><div><p>Próximo evento</p><strong>Congresso NEXO</strong><small>27 AGO · Brasília</small></div><div className="highlight-card"><p>Seu plano</p><strong>Associado Pleno</strong><small>Válido até dez/2026</small></div></div>
                <div className="dash-bottom"><div><span>18</span><p>Publicações<br /><small>disponíveis</small></p></div><div><span>04</span><p>Certificados<br /><small>emitidos</small></p></div><div><span>12</span><p>Atividades<br /><small>concluídas</small></p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="directory-section" id="diretorio">
        <div className="shell directory-grid">
          <div><p className="section-label">Rede NEXO</p><h2>Encontre especialistas e organizações em todo o Brasil.</h2></div>
          <form className="directory-search" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="directory-term">Busque por nome, especialidade ou estado</label>
            <div><input id="directory-term" type="search" placeholder="Ex.: inovação, São Paulo..." /><button type="submit">Buscar <Arrow /></button></div>
            <p><span>4.800+</span> perfis verificados na rede nacional</p>
          </form>
        </div>
      </section>

      <section className="governance-section" id="transparencia">
        <div className="shell governance-grid">
          <div><p className="section-label">Governança e transparência</p><h2>Confiança se constrói com clareza.</h2><p>Acesso simples aos documentos que orientam a atuação e a gestão da entidade.</p></div>
          <div className="document-list">
            <a href="#personalizar"><span>PDF</span><div><p>Relatório anual de impacto</p><small>Exercício 2025 · 4,8 MB</small></div><Arrow diagonal /></a>
            <a href="#personalizar"><span>PDF</span><div><p>Estatuto social consolidado</p><small>Atualizado em mar/2026 · 1,2 MB</small></div><Arrow diagonal /></a>
            <a href="#personalizar"><span>PDF</span><div><p>Demonstrações financeiras</p><small>Exercício 2025 · 2,1 MB</small></div><Arrow diagonal /></a>
          </div>
        </div>
      </section>

      <section className="join-section" id="associe-se">
        <div className="join-orbit" aria-hidden="true"><i /><i /></div>
        <div className="shell join-inner">
          <p className="section-label light-label">Faça parte</p>
          <h2>O próximo passo do setor<br />começa <em>com você.</em></h2>
          <p>Junte-se a milhares de profissionais e organizações que já estão construindo novas possibilidades.</p>
          <div><a className="button button-lime" href="mailto:comercial@softaliza.com.br?subject=Quero%20um%20portal%20para%20minha%20associação">Quero me associar <Arrow /></a><a className="join-contact" href="#personalizar">Fale com nossa equipe</a></div>
        </div>
      </section>

      <section className="customize-section" id="personalizar">
        <div className="shell customize-inner">
          <div><span>Demonstração Softaliza</span><h2>Imagine tudo isso com a marca da sua associação.</h2></div>
          <div><p>Este portal é um modelo. Cores, conteúdos, serviços e integrações podem ser personalizados para a realidade da sua entidade.</p><a className="button button-cobalt" href="mailto:comercial@softaliza.com.br?subject=Quero%20personalizar%20o%20portal%20da%20minha%20associação">Solicitar uma apresentação <Arrow /></a></div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-grid">
          <div className="footer-brand"><Brand light /><p>Representação, conhecimento e conexão para transformar um setor inteiro.</p><div className="social-links"><a href="#personalizar" aria-label="LinkedIn">in</a><a href="#personalizar" aria-label="Instagram">ig</a><a href="#personalizar" aria-label="YouTube">yt</a></div></div>
          <div><h2>Institucional</h2><a href="#associacao">A NEXO</a><a href="#impacto">Nossa atuação</a><a href="#transparencia">Governança</a><a href="#noticias">Imprensa</a></div>
          <div><h2>Para associados</h2><a href="#beneficios">Benefícios</a><a href="#agenda">Eventos</a><a href="#diretorio">Diretório</a><a href="#area-associado">Área do associado</a></div>
          <div><h2>Contato</h2><a href="mailto:contato@nexo.org.br">contato@nexo.org.br</a><a href="tel:+556130001800">+55 61 3000-1800</a><p>Brasília · São Paulo<br />Atuação nacional</p></div>
        </div>
        <div className="shell footer-bottom"><p>© 2026 NEXO Associação Nacional. Portal demonstrativo.</p><div><a href="#personalizar">Privacidade</a><a href="#personalizar">Termos de uso</a><span>Uma experiência Softaliza</span></div></div>
      </footer>

      {searchOpen && (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-labelledby="search-title" onMouseDown={(event) => { if (event.currentTarget === event.target) setSearchOpen(false); }}>
          <div className="search-panel">
            <div className="search-heading"><div><p>Busca no portal</p><h2 id="search-title">O que você procura?</h2></div><button type="button" onClick={() => setSearchOpen(false)} aria-label="Fechar busca">×</button></div>
            <label htmlFor="site-search">Digite um termo</label>
            <div className="search-input"><span className="search-icon" aria-hidden="true" /><input id="site-search" autoFocus type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Eventos, documentos, notícias..." /></div>
            <div className="search-results">
              {results.length ? results.map((item) => <a key={item.title} href={item.href} onClick={() => setSearchOpen(false)}><span>{item.type}</span><p>{item.title}</p><Arrow /></a>) : <p className="empty-search">Nenhum conteúdo encontrado. Tente outro termo.</p>}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
