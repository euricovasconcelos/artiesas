/* ============================================================================
   ARTIESAS · FICHEIRO DE DADOS DO PORTAL
   Temporada 2026–2027 · dados do Programa de Parceiros (versão revista)
   ============================================================================

   ESTE É O ÚNICO FICHEIRO QUE PRECISA DE EDITAR PARA ATUALIZAR O SITE.
   Não precisa de mexer no "index.html" nem saber programar.

   COMO EDITAR (regras simples):
   -----------------------------------------------------------------------------
   1. Cada registo (uma atleta, um patrocinador, uma linha de tabela...) está
      entre chavetas { } e separado do seguinte por uma vírgula.
   2. O texto vai sempre entre aspas:  nome: "Maria Silva"
   3. NÃO apague as vírgulas nem as aspas. Só troque o texto lá dentro.
   4. Para ADICIONAR um registo, copie um bloco { ... } inteiro, cole a seguir
      (com uma vírgula a separar) e mude os valores.
   5. Para REMOVER um registo, apague o bloco { ... } inteiro (e a vírgula).
   6. FOTOS/LOGÓTIPOS: coloque o ficheiro na pasta "imagens/" ao lado deste
      ficheiro e escreva o caminho, ex.:  foto: "imagens/maria.jpg"
      Se deixar em branco ("") aparece um espaço reservado elegante.
   7. Depois de guardar este ficheiro, basta atualizar a página no navegador.

   O QUE MUDA COM MAIS FREQUÊNCIA (comece por aqui):
      atletas · treinadores · patrocinadores · competicoes · orcamento.angariado
   O QUE SÓ MUDA QUANDO O PROGRAMA FOR REVISTO:
      niveis · contrapartidas · pacotes · orcamento.itens · fiscal · regras

   Acentos e cedilhas podem ser usados à vontade.
============================================================================ */

const DADOS = {

  /* ==========================================================================
     1) IMAGENS DO SITE (logótipos e ilustração)
        logo        -> logótipo ARTIESAS versão CLARA (para fundos escuros:
                       destaque inicial e rodapé)
        logoCor     -> logótipo ARTIESAS versão a CORES (fundos claros)
        simbolo     -> apenas a figura amarela (usada no topo do site)
        ilustracao  -> desenho da equipa no destaque inicial
        logoAesas   -> logótipo do Agrupamento de Escolas Alberto Sampaio
        logoArtigym -> logótipo da ArtiGym
  ========================================================================== */
  imagens: {
    logo:        "imagens/logo-artiesas.png",
    logoCor:     "imagens/logo-artiesas-cor.png",
    simbolo:     "imagens/simbolo-artiesas.png",
    ilustracao:  "imagens/ilustracao-equipa.png",
    logoAesas:   "imagens/logo-aesas.png",
    logoArtigym: "imagens/logo-artigym.png",
  },

  /* ==========================================================================
     2) ARQUIVOS PARA DOWNLOAD
        programa      -> PDF do programa de parceiros (botão "Descarregar")
        programaInfo  -> texto pequeno por baixo do botão
  ========================================================================== */
  arquivos: {
    programa:     "arquivos/ARTIESAS-Programa-de-Parceiros.pdf",
    programaInfo: "PDF · 12 páginas · Temporada 2026–2027",
  },

  /* ==========================================================================
     3) DESTAQUE INICIAL (topo do site)
        badge  -> a etiqueta pequena acima do título
        lead   -> o parágrafo de apresentação
        stats  -> os 4 números na barra do topo
  ========================================================================== */
  destaque: {
    badge: "★ Época 2026/2027 · Rumo à World Gymnaestrada 2027",
    lead:  "O ARTIESAS é o grupo de Ginástica de Braga nascido da união entre o desporto escolar público (AESAS) e a formação privada (ArtiGym). São 440 atletas em formação e 43 apuradas para representar Portugal na World Gymnaestrada 2027, em Lisboa.",
    stats: [
      { valor: "43",   label: "atletas na World Gymnaestrada 2027" },
      { valor: "Ouro", label: "Gym for Life Portugal 2026" },
      { valor: "440",  label: "atletas em formação" },
      { valor: "2012", label: "ano do protocolo AESAS + ArtiGym" },
    ],
  },

  /* ==========================================================================
     3b) TEXTOS DE APRESENTAÇÃO QUE CITAM NÚMEROS
         Ficam aqui (e não no index.html) para que, quando os números mudarem,
         só haja um sítio a corrigir.
  ========================================================================== */
  textos: {
    equipaIntro:  "São 16 treinadores e elementos de staff técnico que acompanham as atletas no dia a dia, do aquecimento ao palco.",
    atletasIntro: "São 440 atletas em formação, das quais 43 apuradas para a World Gymnaestrada 2027 — cada uma com o seu percurso, a sua função no grupo e a data em que se juntou à equipa.",
  },

  /* ==========================================================================
     4) A NOSSA TRAJETÓRIA (linha do tempo)
        Campos: periodo, texto
  ========================================================================== */
  trajetoria: [
    { periodo: "2012",      texto: "Constituição da ArtiGym e assinatura do protocolo entre a AESAS e a ArtiGym." },
    { periodo: "2014–2019", texto: "Primeiras participações em competições locais e regionais; afirmação como referência emergente da modalidade em Braga." },
    { periodo: "2022–2024", texto: "Conquistas regionais e afirmação como referência da modalidade a nível nacional. Presença consistente na Festa Nacional da Ginástica." },
    { periodo: "2024–2026", texto: "1.ª participação no World Gym for Life Challenge 2025, com mais de 3.000 atletas. Menção Ouro no Gym for Life Portugal 2026 e qualificação para a Seleção Nacional." },
    { periodo: "2026–2027", texto: "1.ª participação na World Gymnaestrada 2027, que reúne mais de 20.000 atletas dos 5 continentes." },
  ],

  /* ==========================================================================
     5) PRÉMIOS EM DESTAQUE (4 cartões na secção "Prémios")
        Campos: titulo, descricao, destaque (true = cartão realçado; use só num)
  ========================================================================== */
  premios: [
    { titulo: "Menção Ouro",       descricao: "Gym for Life Portugal 2026, em Odivelas — o melhor resultado nacional do projeto.", destaque: true  },
    { titulo: "Seleção Nacional",  descricao: "Qualificação para representar Portugal na competição mundial.",                     destaque: false },
    { titulo: "43 atletas",        descricao: "Apuradas para a World Gymnaestrada 2027, em Lisboa.",                               destaque: false },
    { titulo: "4 ouros seguidos",  descricao: "Gym for Life Territorial de 2023 a 2026 (Feira, Maia, Caminha e Matosinhos).",      destaque: false },
  ],

  /* ==========================================================================
     6) PALMARÉS COMPLETO (conquistas em números)
        Cada grupo tem: categoria + lista de linhas { evento, resultado }
        Use resultado: "" quando for apenas participação.
        realce: true -> a linha aparece destacada (use para o Ouro)
  ========================================================================== */
  palmares: [
    {
      categoria: "Gym for Life Portugal",
      nota: "Concurso nacional de Ginástica para Todos",
      linhas: [
        { evento: "Odivelas 2026",  resultado: "Ouro",   realce: true },
        { evento: "Gondomar 2025",  resultado: "Prata"  },
        { evento: "Odivelas 2024",  resultado: "Prata"  },
        { evento: "Seixal 2023",    resultado: "Prata"  },
        { evento: "Bombarral 2022", resultado: "Bronze" },
        { evento: "Odivelas 2019",  resultado: "Bronze" },
        { evento: "Odivelas 2018",  resultado: "Bronze" },
        { evento: "Odivelas 2017",  resultado: "Bronze" },
        { evento: "Elvas 2016",     resultado: "Bronze" },
      ],
    },
    {
      categoria: "Festa Nacional da Ginástica",
      nota: "Presenças na maior celebração nacional da modalidade",
      linhas: [
        { evento: "Espinho 2026",                              resultado: "" },
        { evento: "World Gym for Life Challenge · Lisboa 2025", resultado: "Internacional", realce: true },
        { evento: "Guimarães 2024",                            resultado: "" },
        { evento: "Viana do Castelo 2023",                     resultado: "" },
        { evento: "Portimão 2019",                             resultado: "" },
        { evento: "Braga 2018",                                resultado: "" },
        { evento: "Faro 2017",                                 resultado: "" },
        { evento: "Torres Novas 2016",                         resultado: "" },
      ],
    },
    {
      categoria: "Pódios locais e regionais",
      nota: "Gym for Life Territorial",
      linhas: [
        { evento: "Matosinhos 2026",            resultado: "Ouro", realce: true },
        { evento: "Caminha 2025",               resultado: "Ouro", realce: true },
        { evento: "Maia 2024",                  resultado: "Ouro", realce: true },
        { evento: "Santa Maria da Feira 2023",  resultado: "Ouro", realce: true },
        { evento: "Caminha 2022",               resultado: "Prata" },
        { evento: "Caminha 2019",               resultado: "Prata" },
        { evento: "Braga 2018",                 resultado: "Prata" },
        { evento: "Maia 2017",                  resultado: "Prata" },
        { evento: "Porto 2015",                 resultado: "Prata" },
      ],
    },
  ],

  /* Nota explicativa mostrada no fim da secção de prémios */
  palmaresNota: "O Gym for Life é um concurso nacional de Ginástica para Todos em que os grupos concorrem por menções Ouro, Prata ou Bronze; os grupos com menção Ouro disputam ainda a menção Diamante, atribuída a um único grupo. Uma menção Ouro é, por isso, um resultado nacional de mérito assinalável.",

  /* ==========================================================================
     7) O PROJETO EM NÚMEROS
        Campos: indicador, atual, meta ("" quando não se aplica), nota
        realce: true        -> linha destacada a amarelo
        entreColunas: true  -> o valor não pertence nem ao "atual" nem à "meta";
                               aparece centrado ENTRE as duas colunas
                               (útil para números que são um total, não uma meta)
        rotulo: "..."       -> legenda pequena por baixo desse valor centrado
  ========================================================================== */
  numeros: [
    { indicador: "Atletas em formação",                                 atual: "440",   meta: "470" },
    { indicador: "Treinadores / staff técnico",                         atual: "16",    meta: "20"  },
    { indicador: "Competições, apresentações e atividades por época",   atual: "35",    meta: "35"  },
    { indicador: "Medalhas e prémios (locais, regionais e nacionais)",  atual: "18",    meta: "21"  },
    { indicador: "Seguidores no Instagram e TikTok",                    atual: "~2.500", meta: "3.500" },
    { indicador: "Atletas qualificadas para a World Gymnaestrada 2027", atual: "43",     meta: "", nota: "foco deste projeto", realce: true, entreColunas: true },
    { indicador: "Famílias envolvidas",                                 atual: "+2.000", meta: "", nota: "com impacto positivo" },
  ],

  /* ==========================================================================
     8) PORQUÊ APOIAR — lista de razões
  ========================================================================== */
  motivos: [
    "Formação de jovens atletas e educação através do desporto",
    "Igualdade de oportunidades e inclusão social",
    "Promoção da saúde e de estilos de vida ativos",
    "Desenvolvimento da comunidade local de Braga",
    "Representação de Braga em competições nacionais e internacionais",
    "Associação a valores de disciplina, excelência e superação",
    "Reforço do compromisso com os princípios ESG, na sua dimensão Social",
  ],

  /* ==========================================================================
     9) ONDE A SUA MARCA APARECE — os 5 canais de visibilidade
        Campos: canal, oferece, tipo, alto (true = canal de alto valor)
  ========================================================================== */
  canais: [
    { canal: "Camisolas de competição",    oferece: "Marca aplicada no equipamento das atletas",        tipo: "Permanente · alto valor", alto: true },
    { canal: "Portal web da escola",       oferece: "Logótipo e/ou página dedicada de parceiros",       tipo: "Permanente" },
    { canal: "Instagram / TikTok",         oferece: "Publicações, stories, reels e menções",            tipo: "Recorrente" },
    { canal: "Imprensa e entrevistas",     oferece: "Reportagens em jornais e media regionais",         tipo: "Pontual / espontânea" },
    { canal: "Faixas e painéis em eventos", oferece: "Presença física em competições, saraus e galas",  tipo: "Por evento" },
  ],
  canaisNota: "A camisola é o ativo mais valioso do clube: acompanha a atleta em todas as competições, aparece em fotografias, reportagens e nas redes sociais. Por isso, o espaço na camisola é reservado aos níveis superiores.",

  /* ==========================================================================
     10) NÍVEIS ANUAIS DE PARCERIA (cartões)
         Campos: chave (diamante|ouro|prata|bronze), nome, valor, vagas, itens
  ========================================================================== */
  niveis: [
    { chave: "diamante", nome: "Diamante", valor: "5.000 €", vagas: "1 exclusivo", itens: [
      "Destaque principal na camisola",
      "Destaque permanente no portal e nas redes",
      "Banner principal em eventos + imprensa",
      "Selo \"Patrocinador Oficial\"",
      "5 convites VIP · relatório personalizado",
      "Exclusividade setorial (negociável)",
      "Apresentação num evento da empresa",
    ]},
    { chave: "ouro", nome: "Ouro", valor: "2.500 €", vagas: "até 3", itens: [
      "Marca na camisola de competição",
      "Destaque no portal web",
      "Publicações periódicas nas redes",
      "Faixa em eventos",
      "Selo \"Patrocinador Oficial\"",
      "3 convites VIP · relatório anual",
    ]},
    { chave: "prata", nome: "Prata", valor: "1.000 €", vagas: "até 6", itens: [
      "Marca secundária na camisola",
      "Logótipo no portal web",
      "Publicação + menções nas redes",
      "Painel coletivo em eventos",
      "2 convites VIP · relatório coletivo",
      "Certificado de parceiro",
    ]},
    { chave: "bronze", nome: "Bronze", valor: "350 €", vagas: "ilimitado", itens: [
      "Logótipo no portal web",
      "Painel coletivo em eventos",
      "Publicação anual nas redes",
      "2 convites VIP · relatório coletivo",
      "Certificado de parceiro",
    ]},
  ],

  /* ==========================================================================
     11) TABELA COMPARATIVA DE CONTRAPARTIDAS
         Cada linha: { nome, diamante, ouro, prata, bronze }
         Use "—" quando a contrapartida não se aplica.
  ========================================================================== */
  contrapartidas: [
    { nome: "Vagas disponíveis",                 diamante: "1 (exclusivo)",          ouro: "3",                      prata: "6",                    bronze: "Ilimitado" },
    { nome: "Marca na camisola de competição",   diamante: "Destaque principal",     ouro: "Sim",                    prata: "Secundária",           bronze: "—" },
    { nome: "Página / logótipo no portal web",   diamante: "Destaque permanente",    ouro: "Destaque",               prata: "Logótipo",             bronze: "Logótipo" },
    { nome: "Instagram / TikTok",                diamante: "Destaque",               ouro: "Publicações periódicas", prata: "Publicação + menções", bronze: "Publicação anual" },
    { nome: "Faixas e painéis em eventos",       diamante: "Banner principal",       ouro: "Faixa",                  prata: "Painel coletivo",      bronze: "Painel coletivo" },
    { nome: "Entrevistas / imprensa",            diamante: "Referência institucional", ouro: "—",                    prata: "—",                    bronze: "—" },
    { nome: "Selo \"Patrocinador Oficial\"",     diamante: "Sim",                    ouro: "Sim",                    prata: "—",                    bronze: "—" },
    { nome: "Convites VIP para eventos",         diamante: "5",                      ouro: "3",                      prata: "2",                    bronze: "2" },
    { nome: "Certificado de parceiro",           diamante: "Sim",                    ouro: "Sim",                    prata: "Sim",                  bronze: "Sim" },
    { nome: "Relatório anual de impacto",        diamante: "Personalizado",          ouro: "Sim",                    prata: "Coletivo",             bronze: "Coletivo" },
    { nome: "Exclusividade setorial",            diamante: "Sim (negociável)",       ouro: "—",                      prata: "—",                    bronze: "—" },
    { nome: "Apresentação em evento da empresa", diamante: "Sim",                    ouro: "—",                      prata: "—",                    bronze: "—" },
  ],

  /* ==========================================================================
     12) PACOTES POR EVENTO — World Gymnaestrada Lisboa 2027
         Campos: nome, valor, alternativa (opcional), contrapartida
  ========================================================================== */
  pacotes: [
    { nome: "Patrono do Mundial", valor: "1.500 €", contrapartida: "Marca em destaque no equipamento e na faixa de viagem + campanha dedicada nas redes + agradecimento na imprensa.", destaque: true },
    { nome: "Apoio Viagem",       valor: "750 €",   alternativa: "ou autocarro para transporte", contrapartida: "Marca associada à deslocação, publicação dedicada e menção no relatório do evento." },
    { nome: "Apoio Equipamento",  valor: "400 €",   contrapartida: "Marca aplicada no material / fato de competição do Mundial + publicação." },
    { nome: "Amigo do Mundial",   valor: "150 €",   contrapartida: "Nome ou logótipo no painel de apoiantes do evento e publicação de agradecimento." },
  ],
  pacotesNota: "Estes pacotes podem ser combinados com um nível anual ou contratados isoladamente. Uma empresa pode, por exemplo, ser Parceiro Prata anual e ainda Patrono do Mundial no ano de qualificação.",

  /* ==========================================================================
     13) A CONTA QUE QUEREMOS FECHAR (orçamento do Mundial)
         angariado -> valor já assegurado, em euros, só o número (ex.: 4200)
                      Atualize este número à medida que entram apoios.
         itens     -> { despesa, valor (número em euros) }
  ========================================================================== */
  orcamento: {
    titulo:    "World Gymnaestrada Lisboa 2027",
    angariado: 0,
    itens: [
      { despesa: "Deslocação (autocarro / transporte)", valor: 2500  },
      { despesa: "Alojamento (atletas + staff)",        valor: 19000 },
      { despesa: "Inscrições e taxas de competição",    valor: 14000 },
      { despesa: "Equipamentos e fatos de competição",  valor: 3500  },
      { despesa: "Alimentação em prova",                valor: 18500 },
    ],
  },

  /* ==========================================================================
     14) VANTAGEM FISCAL — dois regimes
  ========================================================================== */
  fiscal: [
    { titulo: "Patrocínio",
      subtitulo: "Relação comercial com contrapartidas",
      texto: "A empresa investe e recebe contrapartidas de visibilidade — a marca na camisola, no portal, nas redes e nos eventos, conforme o nível escolhido. Para efeitos fiscais, é habitualmente tratado como gasto de marketing/publicidade da empresa, dedutível nos termos gerais do IRC." },
    { titulo: "Mecenato desportivo",
      subtitulo: "Donativo documentado pela escola pública",
      texto: "Sendo a AESAS um agrupamento de escolas público, o donativo pode ser documentado por esta entidade, permitindo deduzir o apoio ao abrigo do Estatuto dos Benefícios Fiscais. Em IRC pode ainda beneficiar de majoração do valor considerado para efeitos fiscais, dentro dos limites legais aplicáveis.",
      realce: true },
  ],
  fiscalIrs: {
    titulo: "Artigo 63.º do EBF — deduções à coleta do IRS (donativos de pessoas singulares)",
    alineas: [
      "25% das importâncias atribuídas, nos casos em que não estejam sujeitas a qualquer limitação;",
      "25% das importâncias atribuídas, até ao limite de 15% da coleta, nos restantes casos;",
      "As deduções só são efetuadas caso não tenham sido contabilizadas como custos. Certos donativos (p. ex. a instituições religiosas) são considerados em 130% do seu quantitativo, nos termos e limites das alíneas anteriores.",
    ],
    nota: "Na prática, um donativo pode custar à empresa ou ao particular significativamente menos do que o valor nominal, depois do efeito fiscal — e o apoio à ARTIESAS continua a garantir retorno de imagem pelos mesmos canais de visibilidade. Informação de caráter geral; não substitui aconselhamento fiscal.",
  },

  /* ==========================================================================
     15) COMPROMISSO COM A TRANSPARÊNCIA — conteúdo do relatório de impacto
  ========================================================================== */
  transparencia: [
    "Atividades e eventos realizados",
    "Resultados desportivos e competições disputadas",
    "Fotografias institucionais e da marca em ação",
    "Indicadores de comunicação e alcance nas redes sociais",
    "Aplicação dos recursos investidos",
  ],
  transparenciaNota: "A AESAS e a ArtiGym comprometem-se a utilizar os recursos exclusivamente no desenvolvimento das atividades desportivas previstas no projeto ARTIESAS.",

  /* ==========================================================================
     16) REGRAS GERAIS
  ========================================================================== */
  regras: [
    { titulo: "Vigência e renovação",  texto: "Os contratos anuais têm a duração de 12 meses e podem ser renovados por manifestação de interesse de ambas as partes. Os pacotes por evento vigoram até à realização e reporte do evento." },
    { titulo: "Utilização das marcas", texto: "Os logótipos são aplicados de acordo com o manual de identidade visual fornecido por cada parceiro. O clube não usa a marca do parceiro fora dos contextos acordados." },
    { titulo: "Exclusividade",         texto: "O nível Diamante pode beneficiar de exclusividade setorial mediante negociação (por exemplo, um único patrocinador do setor bancário ou de retalho)." },
    { titulo: "Como tornar-se parceiro", texto: "A empresa contacta a representante dos pais, confirma-se a disponibilidade do nível pretendido e celebra-se um protocolo simples com direitos e deveres de ambas as partes." },
  ],


/* ==========================================================================
     17) EQUIPA TÉCNICA — secção "Equipa técnica"
         Campos: nome, funcao, desde, foto
         São 16 treinadores/staff; acrescente os blocos que faltam.
  ========================================================================== */
  treinadores: [
    { nome: "Prof.ª. Maria João Ferreira",       funcao: "Treinadora · ARTIGYM",        desde: "2012", foto: "imagens/inst1.jpg" },
    { nome: "Prof.ª Ana Paula Lima",   funcao: "Desporto Escolar · AESAS",         desde: "2012", foto: "imagens/inst2.jpg"  },
    { nome: "Prof. Rui Martins",   funcao: "Direção Técnica · ARTIGYM",         desde: "2012", foto: "imagens/inst3.jpg"  },
  ],

  /* ==========================================================================
     18) ATLETAS — secção "As atletas do ARTIESAS"
         Campos: nome, atuacao, desde, foto
         Sugestão: comece pelas 43 apuradas para a World Gymnaestrada 2027.
  ========================================================================== */
  atletas: [
    { nome: "Ana Liz Vasconcelos", atuacao: "ginasta - base", desde: "2025", foto: "imagens/img0.jpg" },
    { nome: "Diego Silva", atuacao: "ginasta - base", desde: "2026", foto: "imagens/img1.jpg" },
    { nome: "Bruna Camelo",   atuacao: "ginasta - base", desde: "2026", foto: "imagens/img2.jpg" },
    { nome: "Matilde Nunes",    atuacao: "ginasta - base", desde: "2025", foto: "imagens/img3.jpg" },
    { nome: "Mafalda Cunha",    atuacao: "ginasta - base",    desde: "2024", foto: "imagens/img4.jpg" },
    { nome: "Francisca Morais",     atuacao: "ginasta - volante",    desde: "2024", foto: "imagens/img5.jpg" },
    { nome: "Camila Salgueiro",  atuacao: "ginasta - base",    desde: "2026", foto: "imagens/img6.jpg" },
    { nome: "Margarida coimbra",  atuacao: "ginasta - base",    desde: "2024", foto: "imagens/img7.jpg" },
    { nome: "Matilde Cunha",  atuacao: "ginasta - volante",    desde: "2023", foto: "imagens/img8.jpg" },
    { nome: "Leonor Ferreira",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img9.jpg" },
    { nome: "Inês Veloso",  atuacao: "ginasta - volante",    desde: "2023", foto: "imagens/img10.jpg" },
    { nome: "Mariana Arantes",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img11.jpg" },
    { nome: "Frederica Carvalho",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img12.jpg" },
    { nome: "Beatriz Fernandes",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img13.jpg" },
    { nome: "Margarida Sousa",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img14.jpg" },
    { nome: "Ainaf Oliveira",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img15.jpg" },
    { nome: "Isabel Sousa (Max)",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img16.jpg" },
    { nome: "Clara Barros",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img17.jpg" },
    { nome: "Maria Inês",  atuacao: "ginasta - base",    desde: "2022", foto: "imagens/img18.jpg" },
    { nome: "Maria Pereira",  atuacao: "ginasta - volante",    desde: "2024", foto: "imagens/img19.jpg" },
    { nome: "Yasmin",  atuacao: "ginasta - volante",    desde: "2023", foto: "imagens/img20.jpg" },
    { nome: "Ires Pereira",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img21.jpg" },
    { nome: "Maria Inês",  atuacao: "ginasta - volante",    desde: "2024", foto: "imagens/img22.jpg" },
    { nome: "Beatriz Costa",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img23.jpg" },
    { nome: "Mariana Gomes",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img24.jpg" },
    { nome: "Lara Mota",  atuacao: "ginasta - volante",    desde: "2023", foto: "imagens/img25.jpg" },
    { nome: "Yadi Carvalho",  atuacao: "ginasta - base",    desde: "2025", foto: "imagens/img26.jpg" },
    { nome: "Mariana Vieira",  atuacao: "ginasta - base",    desde: "2026", foto: "imagens/img27.jpg" },
    { nome: "Inês Xavier",  atuacao: "ginasta - volante",    desde: "2026", foto: "imagens/img28.jpg" },
    { nome: "Maria Luisa",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img29.jpg" },
    { nome: "Matilde Faria",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img30.jpg" },
    { nome: "Bruna Ferreira",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img31.jpg" },
    { nome: "Lara Cortizas",  atuacao: "ginasta - base",    desde: "2025", foto: "imagens/img32.jpg" },
    { nome: "Caroline Peixoto",  atuacao: "ginasta - volante",    desde: "2025", foto: "imagens/img33.jpg" },
    { nome: "Matilde Lima",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img34.jpg" },
    { nome: "Leonor Alves",  atuacao: "ginasta - base",    desde: "2023", foto: "imagens/img35.jpg" },
    { nome: "Matilde Brito",  atuacao: "ginasta - base",    desde: "2025", foto: "imagens/img36.jpg" },
    { nome: "Maria Cecília",  atuacao: "ginasta - volante",    desde: "2023", foto: "imagens/img37.jpg" },
    { nome: "Maria Vicente",  atuacao: "ginasta - base",    desde: "2026", foto: "imagens/img38.jpg" },
    { nome: "Camila Peixoto",  atuacao: "ginasta - volante",    desde: "2026", foto: "imagens/img39.jpg" },
      ],



  /* ==========================================================================
     19) COMPETIÇÕES E APRESENTAÇÕES
         Campos: titulo, data, local, descricao, tag, estado ("realizada"|"futura"),
                 foto (opcional)
         O portal separa automaticamente em "Realizadas" e "Próximas".
         foto: caminho para uma imagem do evento, ex.: "imagens/gala-2026.jpg".
               Se deixar em branco (""), aparece um espaço reservado elegante,
               tal como acontece com as fotos de treinadores e atletas.
  ========================================================================== */
  competicoes: [
    { titulo: "Gym for Life Portugal 2026",        data: "2026", local: "Odivelas",    descricao: "Menção Ouro no concurso nacional de Ginástica para Todos e qualificação para a Seleção Nacional.", tag: "Competição",    estado: "realizada", foto: "imagens/gymforlifeportual.jpeg" },
    { titulo: "Gym for Life Territorial 2026",     data: "2026", local: "Matosinhos",  descricao: "Ouro na fase territorial — o quarto ouro consecutivo do grupo.",                                  tag: "Competição",    estado: "realizada", foto: "imagens/gymforlifeTerritorial2026.png" },
    { titulo: "Festa Nacional da Ginástica 2026",  data: "2026", local: "Espinho",     descricao: "Presença na maior celebração nacional da modalidade.",                                             tag: "Gala",          estado: "realizada", foto: "imagens/festanacionaldeginastica.jpg" },
    { titulo: "World Gym for Life Challenge 2025", data: "2025", local: "Lisboa",      descricao: "1.ª participação internacional do projeto, num evento com mais de 3.000 atletas.",                 tag: "Internacional", estado: "realizada", foto: "imagens/Gymforlifelifechalenge.jpg" },
    { titulo: "Festival ArtiGym",                  data: "4 de julho de 2026", local: "Forum Braga", descricao: "Apresentação anual do grupo perante a comunidade.",                                   tag: "Festival",      estado: "realizada", foto: "imagens/sarauesas.jpg" },
    { titulo: "World Gymnaestrada 2027",           data: "2027", local: "Lisboa",      descricao: "1.ª participação do ARTIESAS, com 43 atletas, num evento que reúne mais de 20.000 participantes dos 5 continentes.", tag: "Internacional", estado: "futura", foto: "" },
    { titulo: "Apresentações e saraus da época",    data: "Época 2026/2027", local: "Braga", descricao: "Competições, saraus e galas ao longo da temporada — datas a anunciar.",                       tag: "Agenda",        estado: "futura", foto: "" },
  ],

  /* ==========================================================================
     20) PATROCINADORES ATUAIS — secção "Os nossos parceiros" (árvore)
         "diamante" no topo, depois "ouro", "prata" e "bronze".
         Se um nível ficar vazio, aparece "Vaga disponível" automaticamente.
         Campos: nome, nivel, logo, site (opcional)
  ========================================================================== */
  patrocinadores: [
    // Exemplos (apague ou substitua pelos reais):
    // { nome: "Empresa A", nivel: "diamante", logo: "imagens/empresaA.png", site: "https://exemplo.pt" },
    // { nome: "Empresa B", nivel: "ouro",     logo: "imagens/empresaB.png", site: "" },
  ],

  /* ==========================================================================
     21) CONTACTOS E REDES SOCIAIS
  ========================================================================== */
  contactos: [
    { org: "ArtiGym · Escola de Ginástica de Braga", quem: "Prof. Rui Martins",     email: "artigym@artigym.com" },
    { org: "Desporto Escolar · AESAS",               quem: "Prof.ª Ana Paula Lima", email: "cfdesas@gmail.com" },
    { org: "Associação de Pais",                     quem: "Sra. Catarina Antunes", email: "aesas2027@gmail.com" },
  ],
  redes: {
    instagram: "https://www.instagram.com/artiesas.ginastica/",
    tiktok:    "https://www.tiktok.com/@artiesas.ginastica",
    utilizador: "@artiesas.ginastica",
  },

};
