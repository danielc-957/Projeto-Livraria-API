"use strict";

/*
|--------------------------------------------------------------------------
| LivroSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Livro = use("App/Models/Livro");

class LivroSeeder {
  async run() {
    await Livro.createMany([
      {
        nome: "O Retorno do Jovem Príncipe",
        ano_lancamento: 2011,
        edicao: "1ª",
        isbn: "978-85-390-0312-9",
        numero_paginas: 109,
        sinopse:
          "Ao viajar sozinho no vazio da Patagônia, um homem encontra um adolescente desacordado e o socorre. Quando o rapaz acorda, o homem percebe que não se trata de um jovem qualquer, mas de um famoso príncipe que cresceu e resolveu revisitar o planeta Terra.",
        cod_barras: "80314122991400",
        valor: 16.26,
        editora_id: 1,
      },
      {
        nome: "São Bernardo ",
        ano_lancamento: 1997,
        edicao: "67ª",
        isbn: "85-01-00905-9",
        numero_paginas: 224,
        sinopse:
          "O livro conta a história de Paulo Honório, um homem simples, que movido por uma ambição sem limites, acaba transformando-se em um grande fazendeiro do sertão de Alagoas e casa-se com Madalena para conseguir um herdeiro. Incapaz de entender a forma humanitária pela qual a mulher vê o mundo, ele tenta anulá-la com seu autoritarismo. Com este personagem, Graciliano Ramos traça o perfil da vida e do caráter de um homem rude e egoísta, do jogo de poder e do vazio da solidão, onde não há espaço nem para a amizade, nem para o amor.",
        cod_barras: "13476414767050",
        valor: 40.32,
        editora_id: 2,
      },
      {
        nome: "Dom Casmurro",
        ano_lancamento: 2015,
        edicao: "1ª",
        isbn: "978-85-67097-09-1",
        numero_paginas: 223,
        sinopse:
          "Dom Casmurro conta a história de Bento Santiago (Bentinho), apelidado de Dom Casmurro por ser calado e introvertido. Na adolescência, apaixona-se por Capítu, abandonando o seminário e, com ele, os desígnios traçados por sua mãe, Dona Glória, para que se tornasse padre.",
        cod_barras: "27514894401888",
        valor: 19.9,
        editora_id: 3,
      },
      {
        nome: "O Dom Quixote Ecológico",
        ano_lancamento: 2010,
        edicao: "3ª",
        isbn: "978-85-329-0675-5",
        numero_paginas: 115,
        sinopse:
          "A destruição da natureza coloca em risco a vida na Terra. Revoltado com essa situação, o professor Altivo Lourenço decide fazer algo. Ele se transforma no Dom Quixote Ecológico e trava uma cruzada solitária, contra o consumismo e a poluição ambiental.",
        cod_barras: "50024604691045",
        valor: 35.45,
        editora_id: 4,
      },
      {
        nome: "A Cabana",
        ano_lancamento: 2008,
        edicao: "1ª",
        isbn: "978-85-99296-36-3",
        numero_paginas: 240,
        sinopse:
          "Um homem vive atormentado após perder a sua filha mais nova, cujo corpo nunca foi encontrado, mas sinais de que ela teria sido violentada e assassinada são encontrados em uma cabana nas montanhas. Anos depois da tragédia, ele recebe um chamado misterioso para retornar a esse local, onde ele vai receber uma lição de vida.",
        cod_barras: "18602368880999",
        valor: 24.89,
        editora_id: 5,
      },
      {
        nome: "Nó na Garganta",
        ano_lancamento: 1988,
        edicao: "20ª",
        isbn: "85-7056-141-5",
        numero_paginas: 73,
        sinopse:
          "Tânia tem 10 anos. Seus pais decidiram trocar a vida pobre e difícil da cidade grande por uma nova oportunidade no litoral, e ser caseiros na casa de dona Matilde. No novo ambiente, Tânia aprende e inventa novas brincadeiras, faz novos amigos e sofre muito preconceito pelo fato de ser negra. Ao mesmo tempo, vai nascendo dentro dela uma consciência até então desconhecida, uma vontade de mostrar às pessoas sua verdadeira personalidade.",
        cod_barras: "25665170248684",
        valor: 48.24,
        editora_id: 6,
      },
      {
        nome: "Férias!",
        ano_lancamento: 2010,
        edicao: "3ª",
        isbn: "978-85-7799-260-7",
        numero_paginas: 545,
        sinopse:
          "Após perder o emprego em Nova York, ser deixada pelo namorado Luke Costello e quase morrer de overdose, Rachel Walsh (irmã de Claire, de Melancia) é obrigada pelo pai a se internar em uma clínica para dependentes químicos na Irlanda. Pensando que iria para um spa curtir férias, Rachel se revolta quando descobre que está internada em um centro de reabilitação, e se recusa a admitir que tem sérios problemas. Ela precisará atravessar uma intensa jornada até reconhecer seus erros e reconquistar as pessoas que mais ama.",
        cod_barras: "29616275882936",
        valor: 16.74,
        editora_id: 7,
      },
      {
        nome: "As Aventuras de Alice no País das Maravilhas",
        ano_lancamento: 2019,
        edicao: "1ª",
        isbn: "978-85-8442-447-4",
        numero_paginas: 144,
        sinopse:
          "O livro conta a história de Alice, uma menina curiosa que segue um Coelho Branco de colete e relógio, mergulhando sem pensar na sua toca. A protagonista é projetada para um novo mundo, repleto de animais e objetos antropomórficos, que falam e se comportam como seres humanos.",
        cod_barras: "70782467444312",
        valor: 17.45,
        editora_id: 8,
      },
      {
        nome: "O Teorema Katherine",
        ano_lancamento: 2013,
        edicao: "1ª",
        isbn: "978-85-8057-315-2",
        numero_paginas: 304,
        sinopse:
          "Colin é um menino prodígio que sente a pressão de seu talento. Mas, no amor ele já levou o fora de 19 Katherines. ... O teorema de Katherine é uma viagem alucinante. O personagem Colin, garoto superdotado, vive enrolado com suas 19 namoradas - claro, uma de cada vez- mas todas com o mesmo nome: Katherine.",
        cod_barras: "43636151025306",
        valor: 27.1,
        editora_id: 9,
      },
      {
        nome: "A Bolsa Amarela",
        ano_lancamento: 2014,
        edicao: "35ª",
        isbn: "85-89020-03-7",
        numero_paginas: 140,
        sinopse:
          "A Bolsa Amarela é a história de uma menina que entra em conflito consigo mesma e com a família ao reprimir três grandes vontades (que ela esconde numa bolsa amarela ) – a vontade de crescer, a de ser garoto e a de se tornar escritora.",
        cod_barras: "40231937050614",
        valor: 22,
        editora_id: 10,
      },
      {
        nome: "O Gênio do Crime",
        ano_lancamento: 2009,
        edicao: "60ª",
        isbn: "978-85-260-1047-6",
        numero_paginas: 142,
        sinopse:
          "Este é o livro que inaugurou a turma do gordo. Seu Tomé é um homem bom, proprietário de uma fábrica de figurinhas de futebol. Existem as fáceis e as difíceis, fabricadas em menor quantidade. Quem enche o álbum ganha prêmios realmente bons. Mas surge uma fábrica clandestina que fabrica as figurinhas difíceis e as vende livremente. O número de álbuns cheios aumenta e seu Tomé não tem mais capacidade de dar todos os prêmios.",
        cod_barras: "34354624199146",
        valor: 29.9,
        editora_id: 11,
      },
      {
        nome: "E Agora, Filha?",
        ano_lancamento: 2003,
        edicao: "1ª",
        isbn: "85-16-03639-1",
        numero_paginas: 128,
        sinopse:
          "E agora, filha?' é uma história de mulheres e de suas relações com a vida. Jana, uma jovem mulher que foi mãe aos quinze anos, sofre com a adolescência da própria filha, Gabriela. Seu grande medo é que a garota passe pelos mesmos problemas que ela enfrentou - a gravidez precoce; o abandono do namorado, pai da criança; a interrupção dos sonhos de juventude, que, no caso dela, era ser bailarina. Apesar de tudo, consegue refazer sua vida afetiva, quando conhece Ângelo. Ao final, consegue ainda reavivar sua paixão pela dança. Gabi, jovem decidida, enfrenta a mãe, pois tem seus próprios planos fazendo de tudo para concretizá-los, inclusive, indispor-se com Jana, em determinado momento do enredo. Mora durante algum tempo com a avó e outro com seu pai e família.",
        cod_barras: "57048292981114",
        valor: 34.2,
        editora_id: 12,
      },
      {
        nome: "O Menino do Dedo Verde",
        ano_lancamento: 2011,
        edicao: "92ª",
        isbn: "978-85-03-00137-3",
        numero_paginas: 110,
        sinopse:
          "Um clássico da literatura para crianças e jovens em todo o mundo. Era uma vez Tistu...Um menino diferente de todo mundo. Com uma vidinha inteiramente sua, o pequeno de olhos azuis e cabelos loiros, deixava impressões digitais que suscitavam o reverdecimento e a alegria. As proezas de seu dedo verde eram originais e um segredo entre ele e o velho jardineiro, Bigode, para quem seu polegar era invisível e seu talento, oculto, um dom do céu. Até o final surpreendente e singelo.",
        cod_barras: "91794997421957",
        valor: 26.9,
        editora_id: 13,
      },
      {
        nome: "Prova de Fogo",
        ano_lancamento: 2011,
        edicao: "6ª",
        isbn: "978-85-08-14782-3",
        numero_paginas: 96,
        sinopse:
          "Gil era um rapaz a quem ninguém prestava atenção. Não era destaque nem na escola, nem nos estudos, nem nos esportes. Mas, quando chegou a hora H, quando ele teve de enfrentar uma verdadeira prova de fogo, quando um perigo de morte rondava Pris, a querida menina causadora das palpitações do coração de Gil, e quando uma sinistra quadrilha sequestra o lindo bebê de quem Pris tomava conta, o rapaz se mostrou um herói especial, brilhante e corajoso como um verdadeiro Sherlock Holmes! Esta é uma aventura cheia de mistério e suspense, que vai fazer você roer as unhas! Mas também vai fazer você rolar de rir no final!",
        cod_barras: "28681785712998",
        valor: 39.43,
        editora_id: 14,
      },
      {
        nome: "Paris para Um",
        ano_lancamento: 2017,
        edicao: "1ª",
        isbn: "978-85-805-7972-7",
        numero_paginas: 240,
        sinopse:
          "No conto que dá título ao livro, a jovem Nell planeja um final de semana romântico em Paris com o namorado e fica sabendo, já na estação, que ele desistiu de acompanhá-la. Sozinha em um país estrangeiro, Nell descobre uma nova versão de si mesma, independente e corajosa. Outros contos incluem um assalto a uma joalheria com uma reviravolta amorosa, a história de uma mulher que passa um dia inteiro com os sapatos de outra pessoa e um shopping lotado de pessoas fazendo compras de Natal que vai revelar a uma esposa estressada o que de fato importa na vida. E em “Lua de mel em Paris”, que fecha a coletânea, Jojo Moyes brinda os leitores com um reencontro com as personagens do best-seller A garota que você deixou para trás, Liv e Sophie, que, separadas por algumas décadas, acreditam que o casamento é apenas o início de suas histórias de amor.",
        cod_barras: "83852753007322",
        valor: 28.9,
        editora_id: 9,
      },
      {
        nome: "Deixei meu Coração em Modo Avião",
        ano_lancamento: 2020,
        edicao: "1ª",
        isbn: "978-85-9581-101-0",
        numero_paginas: 272,
        sinopse:
          "Com crônicas que abordam os amores e as dores da vida real, Fabíola reflete sobre a importância de levarmos uma vida mais leve, de não se cobrar perfeição, de descansar entre momentos apressados, ser gentil com os outros e consigo mesmo. “Deixei meu coração em modo avião. Hoje não quero criar expectativas, controlar o que não posso, me culpar por aquilo que não depende só de mim.” Através do olhar doce e observador, Fabíola reflete sobre como podemos aprender a esperar o momento de agir, da dor amenizar, da ferida sarar e da saudade deixar de doer. Este livro fala ao coração de uma forma única e especial e faz um convite, deixar o coração se acalmar e esperar que a vida te surpreenda.",
        cod_barras: "79721484793098",
        valor: 23.8,
        editora_id: 15,
      },
      {
        nome: "Chuta que é Carma!",
        ano_lancamento: 2016,
        edicao: "1ª",
        isbn: "978-85-8246-344-4",
        numero_paginas: 254,
        sinopse:
          "Clara acaba de terminar um namoro longo. Só isso já seria motivo para ela estar bem chateada, mas, para completar o drama, o cretino fez questão de levar embora todos os móveis do apartamento dela. Arrasada e certa de que não nasceu para ser feliz, Clara convida sua melhor amiga para uma viagem espiritual ao Peru. Em meio a rituais de meditação, trilhas místicas e comprinhas (já que ninguém é de ferro), ela reencontra um amor do passado que só lhe trouxe dor de cabeça. Em 'Chuta que É Carma!', você vai descobrir o que os deuses reservaram para o destino de Clara - e se convencer de que ignorar o futuro pode ser bem divertido.",
        cod_barras: "55081552145155",
        valor: 32.23,
        editora_id: 16,
      },
      {
        nome: "Agora e Para Sempre, Lara Jean",
        ano_lancamento: 2017,
        edicao: "1ª",
        isbn: "978-85-510-0198-1",
        numero_paginas: 304,
        sinopse:
          "Na surpreendente e emocionante conclusão da série, o último ano de Lara Jean no colégio não podia estar melhor: ela está apaixonadíssima pelo namorado, Peter; seu pai vai se casar em breve com a vizinha, a sra. Rothschild; e sua irmã mais velha, Margot, vai passar o verão em casa. Mas, por mais que esteja se divertindo muito — organizando o casamento do pai e fazendo planos para os passeios de turma e para o baile de formatura —, Lara Jean não pode ignorar as grandes decisões que precisa tomar, e a principal delas envolve a universidade na qual vai estudar. A menina viu Margot passar pelos mesmos questionamentos, e agora é ela quem precisa decidir se vai deixar sua família — e, quem sabe, o amor de sua vida — para trás.",
        cod_barras: "09782992076672",
        valor: 19.84,
        editora_id: 9,
      },
      {
        nome: "O Tronco do Ipê",
        ano_lancamento: 2013,
        edicao: "3ª",
        isbn: "978-85-723-2991-0",
        numero_paginas: 144,
        sinopse:
          "O mais estranho era que as palavras saiam das entranhas da terra e rompiam do mesmo chão que eu pisava”. A sucessão da fazenda Nossa Senhora do Boqueirão encerra um segredo guardado zelosamente por Pai Benedito. Da sua revelação depende o futuro de Mário e Alice, ambos descendentes das duas últimas famílias de proprietários da fazenda. O tronco do ipê (1871), de José de Alencar, recupera a dinâmica social, os costumes e os festejos de uma próspera fazenda fluminense no período que antecede a Abolição e a Proclamação da República.",
        cod_barras: "98628433134866",
        valor: 20.52,
        editora_id: 17,
      },
      {
        nome: "O Rei das Palavras",
        ano_lancamento: 1991,
        edicao: "1ª",
        isbn: "85-209-0259-6",
        numero_paginas: 70,
        sinopse:
          "Esta edição conta a história de Cabeção, um menino muito inteligente, o gênio da turma, mas que tem dificuldades para se relacionar com os colegas. Estudando as classes gramaticais, percebe que as palavras também enfrentam dificuldades. É o que acontece, por exemplo, quando os adjetivos revelam os defeitos dos substantivos, os verbos agitam demais, ou os advérbios se intrometem onde não devem. Cabeção descobre no mundo das palavras a forma de dar a volta por cima, fazendo amigos e conquistando o carinho de todos.",
        cod_barras: "08146102212667",
        valor: 33.24,
        editora_id: 18,
      },
      {
        nome: "De Volta aos Quinze",
        ano_lancamento: 2015,
        edicao: "4ª",
        isbn: "978-85-8235-079-9",
        numero_paginas: 222,
        sinopse:
          "Anita tem 30 anos, e sua vida é muito diferente do que ela sonhou para si. Um dia, ao reencontrar seu primeiro blog, escrito quando tinha 15 anos, algo inusitado acontece, e tudo ao seu redor se transforma de repente. Com cabeça de adulto e corpo de adolescente, ela se vê novamente vivendo as aventuras de uma das épocas mais intensas da vida de qualquer pessoa: o ensino médio. Ao procurar modificar acontecimentos, ela começa a perceber que as consequências de suas atitudes nem sempre são como ela imagina, o que pode ser bem complicado. Em meio a amores impossíveis, amizades desfeitas e atritos familiares, Anita tentará escrever seu próprio final feliz em uma página misteriosa na internet.	",
        cod_barras: "03473494826871",
        valor: 31.62,
        editora_id: 19,
      },
      {
        nome: "Não se enrola não",
        ano_lancamento: 2016,
        edicao: "1ª",
        isbn: "978-85-510-0086-1",
        numero_paginas: 223,
        sinopse:
          "A vida de Isabela dá uma completa reviravolta depois do sucesso de seu blog, Garota em Preto e Branco. Decidida a perseguir seus sonhos, ela abandona o curso de direito, deixa a casa dos pais, em Juiz de Fora (MG), e se muda para São Paulo tão logo conquista um emprego numa badalada revista on-line. Enquanto se adapta aos novos tempos numa quitinete no Baixo Augusta, Isabela escreve seu primeiro livro. Seria perfeito se no apartamento em frente não morasse o envolvente Pedro Miller e os dois não se embolassem regularmente sob o mesmo lençol. Não, não é namoro. Não, não é apenas amizade. É algo muito mais enrolado, um relacionamento sem um nome definido. Um “isso”, como diz a personagem. Embora não tenha coragem de confessar seus sentimentos, Isabela sabe que está perdidamente apaixonada pelo seu melhor amigo.",
        cod_barras: "17635710637471",
        valor: 18.9,
        editora_id: 9,
      },
      {
        nome: "O Meu Pé de Laranja Lima",
        ano_lancamento: 2019,
        edicao: "1ª",
        isbn: "978-85-06-08689-6",
        numero_paginas: 232,
        sinopse:
          "O protagonista Zezé tem 6 anos e mora num bairro modesto, na zona norte do Rio de Janeiro. O pai está desempregado, e a família passa por dificuldades. O menino vive aprontando, sem jamais se conformar com as limitações que o mundo lhe impõe – viaja com sua imaginação, brinca, explora, descobre, responde aos adultos, mete-se em confusões, causa pequenos desastres. As surras que lhe aplicam seu pai e sua irmã mais velha são seu suplício, a ponto de fazê-lo querer desistir da vida. No entanto, o apego ao mundo que criou felizmente sempre fala mais alto. Só não há remédio para a dor, para a perda. E Zezé muito cedo descobrirá isso.",
        cod_barras: "70353371650713",
        valor: 23.89,
        editora_id: 20,
      },
      {
        nome: "Filhos do Éden- Herdeiros de Atlântida",
        ano_lancamento: 2011,
        edicao: "1ª",
        isbn: "978-85-7686-141-6",
        numero_paginas: 273,
        sinopse:
          "Há uma guerra no céu. O confronto civil entre o arcanjo Miguel e as tropas revolucionárias de seu irmão, Gabriel, devasta as sete camadas do paraíso. Com as legiões divididas, as fortalezas sitiadas, os generais estabeleceram um armistício na terra, uma trégua frágil e delicada, que pode desmoronar a qualquer instante. Enquanto os querubins se enfrentam num embate de sangue e espadas, dois anjos são enviados ao mundo físico com a tarefa de resgatar Kaira, uma capitã dos exércitos rebeldes, desaparecida enquanto investigava uma suposta violação do tratado. A missão revelará as tramas de uma conspiração milenar, um plano que, se concluído, reverterá o equilíbrio de forças no céu e ameaçará toda vida humana na terra.",
        cod_barras: "99176218887892",
        valor: 34.89,
        editora_id: 21,
      },
      {
        nome: "Os Pequenos Homens Livres",
        ano_lancamento: 2010,
        edicao: "1ª",
        isbn: "978-85-7616-338-1",
        numero_paginas: 263,
        sinopse:
          "Ambientado no Discworld, o aguardado relançamento do primeiro volume da série juvenil de Terry Pratchett no Brasil Um perigo oculto, saído de pesadelos, vem trazendo uma ameaça diretamente do outro lado da realidade. Armada com tão somente uma frigideira e seu bom senso, a pequena futura bruxa Tiffany Dolorida deve defender seu lar contra fadas brutais, cavaleiros sem cabeça, cães sobrenaturais e a própria Rainha das Fadas, monarca absoluta de um mundo em que realidade e pesadelo se entrelaçam. Felizmente, ela contará com uma ajuda inesperada- os Nac Mac Feegle da região, também conhecidos como os Pequenos Homens Livres, um clã de homenzinhos azuis ferozes, ladrões de ovelhas, portadores de espadas e donos de uma altura de mais ou menos quinze centímetros. Conseguirão eles salvar as terras quentes e verdejantes de Tiffany?",
        cod_barras: "72239288279138",
        valor: 25,
        editora_id: 22,
      },
      {
        nome: "Scoot Pilgrim- Contra o Mundo",
        ano_lancamento: 2010,
        edicao: "1ª",
        isbn: "978-85-359-1616-4",
        numero_paginas: 368,
        sinopse:
          "Scott Pilgrim está feliz com sua preciosa vidinha. Aos vinte e poucos anos, esse canadense levemente excêntrico divide os dias entre o ócio do desemprego voluntário e os ensaios de sua banda de rock, a improvável Sex Bob-Omb. Sua namorada, uma chinesa de nome Knives Chau, tem dezessete anos, e o relacionamento casto — “Uma vez ela pegou na minha mão”, ele conta — parece cair bem para o momento, digamos, introspectivo que Pilgrim vem vivendo. Afora a preocupação dos amigos quanto às intenções de nosso herói para com uma garota tão nova, tudo vai bem. A rotina de videogames e indolência, no entanto, está prestes a sofrer um abalo sísmico. Só que as coisas nunca são assim, ainda mais para Pilgrim. Namorar Ramona, como ele logo vai descobrir, implica também enfrentar o passado da garota, talvez de maneira mais literal do que o próprio Pilgrim poderia imaginar. Liderada pelo misterioso Gideon, a Liga dos Ex-namorados do Mal de Ramona precisará ser derrotada, caso ele queira continuar saindo com ela. Cada um dos sete ex-namorados desafiará o herói para uma luta, enquanto ele ainda tenta contornar relacionamentos passados, o animadíssimo mun-do do rock’n’roll canadense e a falta de mobília em sua casa.",
        cod_barras: "61340241175738",
        valor: 34.89,
        editora_id: 23,
      },
      {
        nome: "As Crônicas de Nárnia - Volume Único",
        ano_lancamento: 2009,
        edicao: "2ª",
        isbn: "978-85-7827-069-8",
        numero_paginas: 752,
        sinopse:
          "Viagens ao fim do mundo, criaturas fantásticas e batalhas épicas ente o bem e o mal - o que mais um leitor poderia querer de um livro? O livro que tem tudo isso é O leão, a feiticeira e o guarda-roupa, escrito em 1949 por Clive Staples Lewis. Mas Lewis não parou por aí, Seis outros livros vieram depois e, juntos, ficaram conhecidos como As crônicas de Nárnia. Nos últimos cinqüenta anos, As crônicas de Nárnia transcenderam o gênero da fantasia 'para se tornar parte do cânone da literatura clássica. Casa um dos sete livros é uma obra-prima, atraindo o leitor para um mundo em que a magia encontra a realidade, e o resultado é um mundo ficcional que tem fascinado gerações. Esta edição apresenta todas as sete crônicas integralmente, num único volume magnífico. Os livros são apresentados de acordo com a ordem de preferência de Lewis, cada capítulo com uma ilustração do artista original, Pauline Baynes. Enganosamente simples e direta, As crônicas de Nárnia continuam cativando os leitores com aventuras, personagens e fatos que falam a pessoas de todas as idades, mesmo cinqüenta anos após terem sido publicadas pela primeira vez.",
        cod_barras: "95977742076141",
        valor: 29,
        editora_id: 24,
      },
      {
        nome: "Os três Mosqueteiros",
        ano_lancamento: 2012,
        edicao: "1ª",
        isbn: "978-85-7971-412-2",
        numero_paginas: 256,
        sinopse:
          "Aos 18 anos, d’Artagnan parte da Gasconha, sua terra natal, rumo a Paris para se tornar membro da guarda real. Ao chegar, conhece os inseparáveis mosqueteiros, Athos, Porthos e Aramis. Com eles enfrenta grandes perigos e vive inúmeras aventuras a serviço do rei da França, Luis XIII, e da rainha Ana d’Áustria. Considerada uma das obras mais populares de Alexandre Dumas, 'Os três mosqueteiros' mostra a relação de lealdade entre esses cativantes personagens, que encantam leitores há gerações.",
        cod_barras: "66174628702397",
        valor: 31.8,
        editora_id: 25,
      },
      {
        nome: "Turma da Mônica Jovem- Um Convite Inesperado",
        ano_lancamento: 2019,
        edicao: "1ª",
        isbn: "978-85-8286-512-5",
        numero_paginas: 252,
        sinopse:
          "As personagens da Turma da Mônica Jovem estão de volta em quatro histórias inéditas. Cada uma das garotas – Mônica, Magali, Denise e Marina – recebe um convite especial que se transforma em uma aventura inesperada. Mônica visita a maior feira de games e cultura pop do país e acaba entrando em uma competição de seu jogo favorito. Magali vai a uma cartomante e descobre algo que poderá mudar sua vida. Marina faz de tudo para ir ao show mais esperado do ano e se mete em várias confusões. Já Denise é convidada para uma rede social exclusiva e acaba se tornando aquilo que sempre quis ser: uma digital influencer. Prepare-se para acompanhar algumas das personagens mais queridas do país nestes contos sobre o poder da amizade, a efemeridade da fama e a coragem de sermos nós mesmos.",
        cod_barras: "07430215940559",
        valor: 33,
        editora_id: 26,
      },
      {
        nome: "Crônicas 2",
        ano_lancamento: 2011,
        edicao: "20ª",
        isbn: "978-85-08-13064-1",
        numero_paginas: 96,
        sinopse:
          "Coisas engraçadas e estranhas podem acontecer em todos os lugares. Só mesmo um grande cronista para transformar esse pedacinho da vida em uma história interessante. Com Fernando Sabino, Paulo Mendes Campos, Rubem Braga e Carlos Drummond de Andrade você vai acompanhar de perto histórias cotidianas e verá o que o olhar do cronista faz com coisas que passariam despercebidas.",
        cod_barras: "02084502691758",
        valor: 42.99,
        editora_id: 14,
      },
      {
        nome: "Os Miseráveis",
        ano_lancamento: 2001,
        edicao: "1ª",
        isbn: "85-322-4810-1",
        numero_paginas: 128,
        sinopse:
          "Um marco do romance francês do século XIX, Os miseráveis é um livro grandioso. Narrando fatos que se estendem da derrota francesa na Batalha de Waterloo, em 1815, aos levantes antimonarquistas de junho de 1832 em Paris, Victor Hugo transcendeu as barreiras da ficção para criar uma obra que é ao mesmo tempo um drama romântico, uma epopeia, um documento histórico, um ensaio filosófico, um tratado sobre ética e um estudo sobre literatura e linguagem. Nada disso seria possível sem o fascínio exercido pelas reviravoltas de seu enredo e pelo carisma de seus personagens. Como o criminoso Jean Valjean e sua jornada desesperada em busca de redenção. Ou a explorada e prostituída Fantine e sua filha Cosette. Ou ainda o pequeno Gavroche, filho de um lar desajustado que foge de casa para viver nas ruas. Unidos pelo idealismo e pelo gênio narrativo de Victor Hugo, esses excluídos e heróis improváveis fazem de Os miseráveis um grito de liberdade que continua a ecoar até os dias de hoje.",
        cod_barras: "08112116728348",
        valor: 27.9,
        editora_id: 27,
      },
    ]);
  }
}

module.exports = LivroSeeder;
