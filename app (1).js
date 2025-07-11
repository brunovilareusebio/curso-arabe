// Dados do curso de árabe
const courseData = {
    alfabeto: [
        {letra: "ا", nome: "alif", som: "a", posicao: "inicial/medio/final"},
        {letra: "ب", nome: "ba", som: "b", posicao: "conecta ambos lados"},
        {letra: "ت", nome: "ta", som: "t", posicao: "conecta ambos lados"},
        {letra: "ث", nome: "tha", som: "th", posicao: "conecta ambos lados"},
        {letra: "ج", nome: "jim", som: "j", posicao: "conecta ambos lados"},
        {letra: "ح", nome: "ha", som: "h", posicao: "conecta ambos lados"},
        {letra: "خ", nome: "kha", som: "kh", posicao: "conecta ambos lados"},
        {letra: "د", nome: "dal", som: "d", posicao: "nao conecta a esquerda"},
        {letra: "ذ", nome: "dhal", som: "dh", posicao: "nao conecta a esquerda"},
        {letra: "ر", nome: "ra", som: "r", posicao: "nao conecta a esquerda"},
        {letra: "ز", nome: "zay", som: "z", posicao: "nao conecta a esquerda"},
        {letra: "س", nome: "sin", som: "s", posicao: "conecta ambos lados"},
        {letra: "ش", nome: "shin", som: "sh", posicao: "conecta ambos lados"},
        {letra: "ص", nome: "sad", som: "s", posicao: "conecta ambos lados"},
        {letra: "ض", nome: "dad", som: "d", posicao: "conecta ambos lados"},
        {letra: "ط", nome: "ta", som: "t", posicao: "conecta ambos lados"},
        {letra: "ظ", nome: "za", som: "z", posicao: "conecta ambos lados"},
        {letra: "ع", nome: "ain", som: "'", posicao: "conecta ambos lados"},
        {letra: "غ", nome: "ghain", som: "gh", posicao: "conecta ambos lados"},
        {letra: "ف", nome: "fa", som: "f", posicao: "conecta ambos lados"},
        {letra: "ق", nome: "qaf", som: "q", posicao: "conecta ambos lados"},
        {letra: "ك", nome: "kaf", som: "k", posicao: "conecta ambos lados"},
        {letra: "ل", nome: "lam", som: "l", posicao: "conecta ambos lados"},
        {letra: "م", nome: "mim", som: "m", posicao: "conecta ambos lados"},
        {letra: "ن", nome: "nun", som: "n", posicao: "conecta ambos lados"},
        {letra: "ه", nome: "ha", som: "h", posicao: "conecta ambos lados"},
        {letra: "و", nome: "waw", som: "w/u", posicao: "nao conecta a esquerda"},
        {letra: "ي", nome: "ya", som: "y/i", posicao: "conecta ambos lados"}
    ],
    
    modulos: [
        {
            id: 1,
            titulo: "Alfabeto Árabe e Primeiras Palavras",
            descricao: "Aprenda o alfabeto árabe, suas formas e pronunciação básica",
            topicos: ["Alfabeto", "Pronúncia", "Primeiras palavras"],
            vocabulario: [
                {arabe: "أهلاً وسهلاً", transliteracao: "ahlan wa sahlan", portugues: "bem-vindo"},
                {arabe: "مرحباً", transliteracao: "marhaban", portugues: "olá"},
                {arabe: "السلام عليكم", transliteracao: "as-salamu alaykum", portugues: "a paz esteja convosco"},
                {arabe: "صباح الخير", transliteracao: "sabah al-khayr", portugues: "bom dia"},
                {arabe: "مساء الخير", transliteracao: "masa al-khayr", portugues: "boa tarde/noite"},
                {arabe: "شكراً", transliteracao: "shukran", portugues: "obrigado"},
                {arabe: "عفواً", transliteracao: "afwan", portugues: "de nada"},
                {arabe: "نعم", transliteracao: "naam", portugues: "sim"},
                {arabe: "لا", transliteracao: "la", portugues: "não"},
                {arabe: "من فضلك", transliteracao: "min fadlik", portugues: "por favor"}
            ],
            gramatica: "Introdução ao sistema de escrita árabe: da direita para esquerda, conexão entre letras",
            cultura: "O mundo árabe: 22 países, diversidade cultural e linguística",
            receita: {
                nome: "حمص - Hummus",
                ingredientes: ["400g grão-de-bico", "3 dentes de alho", "2 colheres de tahine", "Suco de 1 limão", "Sal e pimenta"],
                preparo: "Cozinhe o grão-de-bico, bata no processador com alho, tahine e limão até formar pasta cremosa"
            },
            links: [
                {nome: "Al Jazeera Learn Arabic", url: "https://www.aljazeera.com/arabic"},
                {nome: "Arabic Alphabet Song", url: "https://www.youtube.com/watch?v=ZVwXfOZZHoU"},
                {nome: "Write Arabic", url: "https://writearabic.net/"}
            ]
        },
        {
            id: 2,
            titulo: "Saudações e Apresentações",
            descricao: "Aprenda a se apresentar e cumprimentar em árabe",
            topicos: ["Saudações", "Apresentações", "Cortesia"],
            vocabulario: [
                {arabe: "كيف حالك؟", transliteracao: "kayf halak?", portugues: "como você está?"},
                {arabe: "أنا بخير", transliteracao: "ana bi-khayr", portugues: "estou bem"},
                {arabe: "ما اسمك؟", transliteracao: "ma ismak?", portugues: "qual é o seu nome?"},
                {arabe: "اسمي", transliteracao: "ismi", portugues: "meu nome é"},
                {arabe: "من أين أنت؟", transliteracao: "min ayna anta?", portugues: "de onde você é?"},
                {arabe: "أنا من البرازيل", transliteracao: "ana min al-brasil", portugues: "sou do Brasil"},
                {arabe: "تشرفنا", transliteracao: "tasharrafna", portugues: "prazer em conhecê-lo"},
                {arabe: "إلى اللقاء", transliteracao: "ila al-liqa", portugues: "até logo"},
                {arabe: "مع السلامة", transliteracao: "ma'a as-salama", portugues: "vá com segurança"},
                {arabe: "أراك لاحقاً", transliteracao: "araka lahiqan", portugues: "vejo você mais tarde"}
            ],
            gramatica: "Estrutura básica das perguntas em árabe. Pronomes pessoais",
            cultura: "Etiqueta árabe: importância das saudações e hospitalidade",
            receita: {
                nome: "شاي بالنعناع - Chá de Hortelã",
                ingredientes: ["Chá verde", "Hortelã fresca", "Açúcar", "Água quente"],
                preparo: "Ferva a água, adicione chá verde e hortelã, adoce a gosto"
            },
            links: [
                {nome: "Arabic Greetings", url: "https://www.youtube.com/watch?v=greetings_arabic"},
                {nome: "Cultural Etiquette", url: "https://www.britannica.com/topic/Arab-culture"}
            ]
        },
        {
            id: 3,
            titulo: "Família e Relacionamentos",
            descricao: "Vocabulário sobre família, parentes e relacionamentos",
            topicos: ["Família", "Parentes", "Relacionamentos"],
            vocabulario: [
                {arabe: "أسرة", transliteracao: "usra", portugues: "família"},
                {arabe: "أب", transliteracao: "ab", portugues: "pai"},
                {arabe: "أم", transliteracao: "umm", portugues: "mãe"},
                {arabe: "أخ", transliteracao: "akh", portugues: "irmão"},
                {arabe: "أخت", transliteracao: "ukht", portugues: "irmã"},
                {arabe: "ابن", transliteracao: "ibn", portugues: "filho"},
                {arabe: "ابنة", transliteracao: "ibna", portugues: "filha"},
                {arabe: "جد", transliteracao: "jadd", portugues: "avô"},
                {arabe: "جدة", transliteracao: "jadda", portugues: "avó"},
                {arabe: "صديق", transliteracao: "sadiq", portugues: "amigo"}
            ],
            gramatica: "Gênero em árabe: masculino e feminino. Artigo definido الـ",
            cultura: "Estrutura familiar árabe: importância da família extensa",
            receita: {
                nome: "كنافة - Knafeh",
                ingredientes: ["Massa kataifi", "Queijo ricota", "Açúcar", "Água de rosas"],
                preparo: "Doce tradicional palestino com massa desfiada e queijo"
            },
            links: [
                {nome: "Arabic Family Terms", url: "https://www.youtube.com/watch?v=family_arabic"},
                {nome: "Middle Eastern Family", url: "https://www.bbc.com/arabic/family"}
            ]
        },
        {
            id: 4,
            titulo: "Casa e Rotina Diária",
            descricao: "Vocabulário sobre casa, cômodos e atividades diárias",
            topicos: ["Casa", "Cômodos", "Rotina"],
            vocabulario: [
                {arabe: "بيت", transliteracao: "bayt", portugues: "casa"},
                {arabe: "غرفة", transliteracao: "ghurfa", portugues: "quarto"},
                {arabe: "مطبخ", transliteracao: "matbakh", portugues: "cozinha"},
                {arabe: "حمام", transliteracao: "hammam", portugues: "banheiro"},
                {arabe: "صالة", transliteracao: "sala", portugues: "sala"},
                {arabe: "نوم", transliteracao: "nawm", portugues: "dormir"},
                {arabe: "أكل", transliteracao: "akl", portugues: "comer"},
                {arabe: "شرب", transliteracao: "shurb", portugues: "beber"},
                {arabe: "قراءة", transliteracao: "qira'a", portugues: "leitura"},
                {arabe: "تنظيف", transliteracao: "tandhif", portugues: "limpar"}
            ],
            gramatica: "Verbos no presente: formas básicas e conjugação",
            cultura: "Arquitetura árabe: características das casas tradicionais",
            receita: {
                nome: "فول مدمس - Ful Medames",
                ingredientes: ["Fava", "Alho", "Limão", "Azeite", "Cominho"],
                preparo: "Prato egípcio: fava cozida com temperos, servida no café da manhã"
            },
            links: [
                {nome: "Arabic House Vocabulary", url: "https://www.youtube.com/watch?v=house_arabic"},
                {nome: "Islamic Architecture", url: "https://www.metmuseum.org/toah/hd/arch/hd_arch.htm"}
            ]
        },
        {
            id: 5,
            titulo: "Comida e Restaurantes",
            descricao: "Vocabulário culinário e como pedir comida em árabe",
            topicos: ["Comida", "Restaurantes", "Bebidas"],
            vocabulario: [
                {arabe: "طعام", transliteracao: "ta'am", portugues: "comida"},
                {arabe: "مطعم", transliteracao: "mat'am", portugues: "restaurante"},
                {arabe: "فطور", transliteracao: "futur", portugues: "café da manhã"},
                {arabe: "غداء", transliteracao: "ghada", portugues: "almoço"},
                {arabe: "عشاء", transliteracao: "asha", portugues: "jantar"},
                {arabe: "خبز", transliteracao: "khubz", portugues: "pão"},
                {arabe: "لحم", transliteracao: "lahm", portugues: "carne"},
                {arabe: "دجاج", transliteracao: "dajaj", portugues: "frango"},
                {arabe: "أرز", transliteracao: "aruzz", portugues: "arroz"},
                {arabe: "ماء", transliteracao: "ma'", portugues: "água"}
            ],
            gramatica: "Números em árabe: 1-20. Como expressar quantidades",
            cultura: "Culinária árabe: diversidade regional e tradições alimentares",
            receita: {
                nome: "منسف - Mansaf",
                ingredientes: ["Cordeiro", "Arroz", "Jameed", "Amêndoas", "Pinhões"],
                preparo: "Prato nacional da Jordânia: cordeiro cozido com iogurte fermentado"
            },
            links: [
                {nome: "Arabic Cooking Channel", url: "https://www.youtube.com/channel/cooking_arabic"},
                {nome: "Middle Eastern Recipes", url: "https://www.themediterraneandish.com/"}
            ]
        },
        {
            id: 6,
            titulo: "Transporte e Direções",
            descricao: "Como se locomover e pedir direções em árabe",
            topicos: ["Transporte", "Direções", "Lugares"],
            vocabulario: [
                {arabe: "سيارة", transliteracao: "sayara", portugues: "carro"},
                {arabe: "حافلة", transliteracao: "hafila", portugues: "ônibus"},
                {arabe: "قطار", transliteracao: "qitar", portugues: "trem"},
                {arabe: "طائرة", transliteracao: "ta'ira", portugues: "avião"},
                {arabe: "مطار", transliteracao: "matar", portugues: "aeroporto"},
                {arabe: "محطة", transliteracao: "mahatta", portugues: "estação"},
                {arabe: "يمين", transliteracao: "yamin", portugues: "direita"},
                {arabe: "يسار", transliteracao: "yasar", portugues: "esquerda"},
                {arabe: "أمام", transliteracao: "amam", portugues: "em frente"},
                {arabe: "خلف", transliteracao: "khalf", portugues: "atrás"}
            ],
            gramatica: "Preposições de lugar. Como fazer perguntas sobre localização",
            cultura: "Transporte no mundo árabe: do camelo aos metrôs modernos",
            receita: {
                nome: "شاورما - Shawarma",
                ingredientes: ["Carne de cordeiro", "Pão árabe", "Molho tahine", "Salada"],
                preparo: "Carne grelhada verticalmente, servida em pão com molhos"
            },
            links: [
                {nome: "Arabic Directions", url: "https://www.youtube.com/watch?v=directions_arabic"},
                {nome: "Transportation Middle East", url: "https://www.bbc.com/travel/middle-east"}
            ]
        },
        {
            id: 7,
            titulo: "Trabalho e Estudos",
            descricao: "Vocabulário profissional e educacional",
            topicos: ["Profissões", "Educação", "Escritório"],
            vocabulario: [
                {arabe: "عمل", transliteracao: "amal", portugues: "trabalho"},
                {arabe: "مدرسة", transliteracao: "madrasa", portugues: "escola"},
                {arabe: "جامعة", transliteracao: "jami'a", portugues: "universidade"},
                {arabe: "طبيب", transliteracao: "tabib", portugues: "médico"},
                {arabe: "مهندس", transliteracao: "muhandis", portugues: "engenheiro"},
                {arabe: "معلم", transliteracao: "mu'allim", portugues: "professor"},
                {arabe: "طالب", transliteracao: "talib", portugues: "estudante"},
                {arabe: "كتاب", transliteracao: "kitab", portugues: "livro"},
                {arabe: "قلم", transliteracao: "qalam", portugues: "caneta"},
                {arabe: "ورقة", transliteracao: "waraqa", portugues: "papel"}
            ],
            gramatica: "Verbos modais: poder, dever, querer. Futuro simples",
            cultura: "Educação no mundo árabe: tradição e modernidade",
            receita: {
                nome: "قهوة عربية - Café Árabe",
                ingredientes: ["Café", "Cardamomo", "Açúcar", "Água"],
                preparo: "Café tradicional temperado com cardamomo, servido em pequenas xícaras"
            },
            links: [
                {nome: "Arabic Professions", url: "https://www.youtube.com/watch?v=professions_arabic"},
                {nome: "Education Middle East", url: "https://www.al-fanarmedia.org/"}
            ]
        },
        {
            id: 8,
            titulo: "Saúde e Corpo Humano",
            descricao: "Vocabulário médico e partes do corpo",
            topicos: ["Saúde", "Corpo", "Medicina"],
            vocabulario: [
                {arabe: "صحة", transliteracao: "sihha", portugues: "saúde"},
                {arabe: "مرض", transliteracao: "marad", portugues: "doença"},
                {arabe: "رأس", transliteracao: "ra's", portugues: "cabeça"},
                {arabe: "عين", transliteracao: "ayn", portugues: "olho"},
                {arabe: "أذن", transliteracao: "udhun", portugues: "ouvido"},
                {arabe: "يد", transliteracao: "yad", portugues: "mão"},
                {arabe: "رجل", transliteracao: "rijl", portugues: "perna"},
                {arabe: "قلب", transliteracao: "qalb", portugues: "coração"},
                {arabe: "مستشفى", transliteracao: "mustashfa", portugues: "hospital"},
                {arabe: "دواء", transliteracao: "dawa", portugues: "remédio"}
            ],
            gramatica: "Expressões de dor e desconforto. Verbos reflexivos",
            cultura: "Medicina árabe: contribuições históricas para a ciência",
            receita: {
                nome: "شوربة عدس - Sopa de Lentilha",
                ingredientes: ["Lentilha", "Cebola", "Alho", "Cominho", "Limão"],
                preparo: "Sopa nutritiva tradicionalmente consumida para fortificar a saúde"
            },
            links: [
                {nome: "Arabic Body Parts", url: "https://www.youtube.com/watch?v=body_arabic"},
                {nome: "Islamic Medicine", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/islamic-medicine/"}
            ]
        },
        {
            id: 9,
            titulo: "Viagens e Turismo",
            descricao: "Vocabulário para viagens e turismo no mundo árabe",
            topicos: ["Viagem", "Turismo", "Hospedagem"],
            vocabulario: [
                {arabe: "سفر", transliteracao: "safar", portugues: "viagem"},
                {arabe: "سائح", transliteracao: "sa'ih", portugues: "turista"},
                {arabe: "فندق", transliteracao: "funduq", portugues: "hotel"},
                {arabe: "غرفة", transliteracao: "ghurfa", portugues: "quarto"},
                {arabe: "جواز سفر", transliteracao: "jawaz safar", portugues: "passaporte"},
                {arabe: "تذكرة", transliteracao: "tadhkira", portugues: "bilhete"},
                {arabe: "مطار", transliteracao: "matar", portugues: "aeroporto"},
                {arabe: "شاطئ", transliteracao: "shati", portugues: "praia"},
                {arabe: "جبل", transliteracao: "jabal", portugues: "montanha"},
                {arabe: "صحراء", transliteracao: "sahra", portugues: "deserto"}
            ],
            gramatica: "Tempos verbais: passado, presente e futuro. Orações condicionais",
            cultura: "Destinos turísticos árabes: patrimônio mundial e belezas naturais",
            receita: {
                nome: "باقلاوة - Baklava",
                ingredientes: ["Massa filo", "Nozes", "Pistache", "Mel", "Açúcar"],
                preparo: "Doce em camadas com massa filo, nozes e calda de mel"
            },
            links: [
                {nome: "Arabic Travel Phrases", url: "https://www.youtube.com/watch?v=travel_arabic"},
                {nome: "Visit Middle East", url: "https://www.lonelyplanet.com/middle-east"}
            ]
        },
        {
            id: 10,
            titulo: "Mídia e Tecnologia",
            descricao: "Vocabulário moderno: tecnologia, internet e mídia",
            topicos: ["Tecnologia", "Internet", "Mídia"],
            vocabulario: [
                {arabe: "تكنولوجيا", transliteracao: "teknolojiya", portugues: "tecnologia"},
                {arabe: "حاسوب", transliteracao: "hasub", portugues: "computador"},
                {arabe: "هاتف", transliteracao: "hatif", portugues: "telefone"},
                {arabe: "إنترنت", transliteracao: "internet", portugues: "internet"},
                {arabe: "برنامج", transliteracao: "barnamaj", portugues: "programa"},
                {arabe: "تطبيق", transliteracao: "tatbiq", portugues: "aplicativo"},
                {arabe: "موقع", transliteracao: "mawqi", portugues: "site"},
                {arabe: "رسالة", transliteracao: "risala", portugues: "mensagem"},
                {arabe: "صورة", transliteracao: "sura", portugues: "foto"},
                {arabe: "فيديو", transliteracao: "fidyu", portugues: "vídeo"}
            ],
            gramatica: "Neologismos em árabe: como palavras modernas são criadas",
            cultura: "Mídia árabe: Al Jazeera, MBC e a revolução digital",
            receita: {
                nome: "معمول - Ma'amoul",
                ingredientes: ["Farinha", "Tâmaras", "Nozes", "Água de rosas", "Mahleb"],
                preparo: "Biscoitos tradicionais recheados, populares durante o Ramadã"
            },
            links: [
                {nome: "Arabic Technology Terms", url: "https://www.youtube.com/watch?v=tech_arabic"},
                {nome: "Arab Media", url: "https://www.aljazeera.com/"}
            ]
        },
        {
            id: 11,
            titulo: "Política e Sociedade",
            descricao: "Vocabulário político e discussões sociais",
            topicos: ["Política", "Governo", "Sociedade"],
            vocabulario: [
                {arabe: "سياسة", transliteracao: "siyasa", portugues: "política"},
                {arabe: "حكومة", transliteracao: "hukuma", portugues: "governo"},
                {arabe: "رئيس", transliteracao: "ra'is", portugues: "presidente"},
                {arabe: "وزير", transliteracao: "wazir", portugues: "ministro"},
                {arabe: "انتخابات", transliteracao: "intikhab", portugues: "eleições"},
                {arabe: "ديمقراطية", transliteracao: "dimuqratiya", portugues: "democracia"},
                {arabe: "حرية", transliteracao: "hurriya", portugues: "liberdade"},
                {arabe: "عدالة", transliteracao: "adala", portugues: "justiça"},
                {arabe: "سلام", transliteracao: "salam", portugues: "paz"},
                {arabe: "حقوق", transliteracao: "huquq", portugues: "direitos"}
            ],
            gramatica: "Linguagem formal vs. informal. Registro político e diplomático",
            cultura: "História política do mundo árabe: do califado aos estados modernos",
            receita: {
                nome: "ملوخية - Molokhia",
                ingredientes: ["Folhas de molokhia", "Frango", "Alho", "Coentro", "Limão"],
                preparo: "Prato tradicional egípcio com folhas verdes e frango"
            },
            links: [
                {nome: "Arabic Political Terms", url: "https://www.youtube.com/watch?v=politics_arabic"},
                {nome: "Arab Politics", url: "https://www.bbc.com/arabic/topics/politics"}
            ]
        },
        {
            id: 12,
            titulo: "Literatura e Fluência Avançada",
            descricao: "Textos literários e desenvolvimento da fluência",
            topicos: ["Literatura", "Poesia", "Fluência"],
            vocabulario: [
                {arabe: "أدب", transliteracao: "adab", portugues: "literatura"},
                {arabe: "شعر", transliteracao: "shi'r", portugues: "poesia"},
                {arabe: "قصة", transliteracao: "qissa", portugues: "história"},
                {arabe: "رواية", transliteracao: "riwaya", portugues: "romance"},
                {arabe: "شاعر", transliteracao: "sha'ir", portugues: "poeta"},
                {arabe: "كاتب", transliteracao: "katib", portugues: "escritor"},
                {arabe: "بلاغة", transliteracao: "balagha", portugues: "retórica"},
                {arabe: "قافية", transliteracao: "qafiya", portugues: "rima"},
                {arabe: "بيت", transliteracao: "bayt", portugues: "verso"},
                {arabe: "معنى", transliteracao: "ma'na", portugues: "significado"}
            ],
            gramatica: "Linguagem poética e literária. Figuras de linguagem em árabe",
            cultura: "Grandes escritores árabes: Naguib Mahfouz, Mahmoud Darwish",
            receita: {
                nome: "قطايف - Qatayef",
                ingredientes: ["Massa para panqueca", "Queijo", "Nozes", "Açúcar", "Água de rosas"],
                preparo: "Panquecas doces tradicionais do Ramadã, recheadas e fritas"
            },
            links: [
                {nome: "Arabic Literature", url: "https://www.youtube.com/watch?v=literature_arabic"},
                {nome: "Arab Writers", url: "https://www.adab.com/"}
            ]
        }
    ],

    cultura: {
        paises: [
            {pais: "مصر", transliteracao: "misr", portugues: "Egito", capital: "القاهرة", info: "Berço da civilização árabe moderna"},
            {pais: "لبنان", transliteracao: "lubnan", portugues: "Líbano", capital: "بيروت", info: "Paris do Oriente Médio"},
            {pais: "سوريا", transliteracao: "suriya", portugues: "Síria", capital: "دمشق", info: "Uma das cidades mais antigas do mundo"},
            {pais: "الأردن", transliteracao: "al-urdun", portugues: "Jordânia", capital: "عمان", info: "Reino hachemita estável"},
            {pais: "العراق", transliteracao: "al-iraq", portugues: "Iraque", capital: "بغداد", info: "Berço da civilização mesopotâmica"},
            {pais: "المغرب", transliteracao: "al-maghrib", portugues: "Marrocos", capital: "الرباط", info: "Portal da África para Europa"},
            {pais: "السعودية", transliteracao: "as-saudiyya", portugues: "Arábia Saudita", capital: "الرياض", info: "Berço do Islã"}
        ],
        culinaria: [
            {prato: "حمص", transliteracao: "hummus", descricao: "Pasta de grão-de-bico temperada", origem: "Levante"},
            {prato: "فلافل", transliteracao: "falafel", descricao: "Bolinhos fritos de grão-de-bico", origem: "Egito/Levante"},
            {prato: "تبولة", transliteracao: "tabbouleh", descricao: "Salada de salsinha com tomate", origem: "Líbano"},
            {prato: "كبة", transliteracao: "kibbeh", descricao: "Bolinho de trigo com carne", origem: "Levante"},
            {prato: "منسف", transliteracao: "mansaf", descricao: "Cordeiro com arroz e jameed", origem: "Jordânia"},
            {prato: "كسكس", transliteracao: "couscous", descricao: "Sêmola com legumes", origem: "Magreb"}
        ],
        musica: [
            {artista: "أم كلثوم", nome: "Umm Kulthum", pais: "Egito", info: "Estrela do Oriente"},
            {artista: "فيروز", nome: "Fairuz", pais: "Líbano", info: "Joia do Líbano"},
            {artista: "عبد الحليم حافظ", nome: "Abdel Halim Hafez", pais: "Egito", info: "Rouxinol Moreno"},
            {artista: "محمد عبده", nome: "Mohammed Abdu", pais: "Arábia Saudita", info: "Artista dos Árabes"}
        ],
        historia: [
            {periodo: "الجاهلية", nome: "Era Pré-Islâmica", anos: "Antes de 622", info: "Período das tribos árabes"},
            {periodo: "الدولة الأموية", nome: "Califado Omíada", anos: "661-750", info: "Primeira dinastia islâmica"},
            {periodo: "الدولة العباسية", nome: "Califado Abássida", anos: "750-1258", info: "Era de ouro da civilização islâmica"},
            {periodo: "الدولة العثمانية", nome: "Império Otomano", anos: "1299-1923", info: "Último califado islâmico"}
        ],
        religiao: [
            {conceito: "الإسلام", nome: "Islam", info: "Religião baseada na submissão a Allah"},
            {conceito: "القرآن", nome: "Alcorão", info: "Livro sagrado dos muçulmanos"},
            {conceito: "الصلاة", nome: "Salat", info: "Oração ritual cinco vezes ao dia"},
            {conceito: "الزكاة", nome: "Zakat", info: "Obrigação de caridade"},
            {conceito: "الحج", nome: "Hajj", info: "Peregrinação a Meca"}
        ]
    },

    quizzes: [
        {
            pergunta: "Como se diz 'olá' em árabe?",
            opcoes: ["مرحباً", "شكراً", "عفواً", "نعم"],
            resposta: 0,
            explicacao: "مرحباً (marhaban) é a forma mais comum de dizer 'olá' em árabe."
        },
        {
            pergunta: "Qual é a tradução de 'شكراً'?",
            opcoes: ["de nada", "por favor", "obrigado", "desculpe"],
            resposta: 2,
            explicacao: "شكراً (shukran) significa 'obrigado' em árabe."
        },
        {
            pergunta: "Como se pergunta 'Como você está?' em árabe?",
            opcoes: ["ما اسمك؟", "كيف حالك؟", "من أين أنت؟", "ما هذا؟"],
            resposta: 1,
            explicacao: "كيف حالك؟ (kayf halak?) significa 'Como você está?' em árabe."
        },
        {
            pergunta: "Qual palavra significa 'casa' em árabe?",
            opcoes: ["مدرسة", "مطعم", "بيت", "مستشفى"],
            resposta: 2,
            explicacao: "بيت (bayt) significa 'casa' em árabe."
        },
        {
            pergunta: "Como se diz 'água' em árabe?",
            opcoes: ["خبز", "ماء", "لحم", "أرز"],
            resposta: 1,
            explicacao: "ماء (ma') significa 'água' em árabe."
        }
    ]
};

// Sistema de gerenciamento da aplicação
class ArabicCourseApp {
    constructor() {
        this.currentModule = 1;
        this.userProgress = this.loadProgress();
        this.currentFlashcardIndex = 0;
        this.flashcardFlipped = false;
        this.currentQuizIndex = 0;
        this.quizScore = 0;
        this.currentCaligraphy = 0;
        this.dialogueHistory = [];
        this.currentAudioWord = 0;
        this.currentCultureTab = 'paises';
    }

    // Inicialização
    init() {
        this.renderModules();
        this.updateProgress();
        this.setupEventListeners();
        this.initializeCulture();
        this.setupCanvas();
        this.initializeAudio();
        console.log('App inicializada com sucesso!');
    }

    // Gerenciamento de progresso
    loadProgress() {
        try {
            const saved = localStorage.getItem('arabicCourseProgress');
            return saved ? JSON.parse(saved) : {
                completedModules: [],
                moduleProgress: {},
                totalProgress: 0
            };
        } catch (error) {
            console.warn('Não foi possível carregar o progresso:', error);
            return {
                completedModules: [],
                moduleProgress: {},
                totalProgress: 0
            };
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('arabicCourseProgress', JSON.stringify(this.userProgress));
        } catch (error) {
            console.warn('Não foi possível salvar o progresso:', error);
        }
    }

    updateProgress() {
        const totalModules = courseData.modulos.length;
        const completed = this.userProgress.completedModules.length;
        const percentage = Math.round((completed / totalModules) * 100);
        
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        const progressModules = document.getElementById('progress-modules');
        
        if (progressFill) progressFill.style.width = `${percentage}%`;
        if (progressText) progressText.textContent = `${percentage}% concluído`;
        if (progressModules) progressModules.textContent = `${completed}/${totalModules} módulos`;
    }

    // Renderização dos módulos
    renderModules() {
        const grid = document.getElementById('modules-grid');
        if (!grid) return;

        grid.innerHTML = '';
        courseData.modulos.forEach((modulo, index) => {
            const card = this.createModuleCard(modulo, index);
            grid.appendChild(card);
        });
    }

    createModuleCard(modulo, index) {
        const isCompleted = this.userProgress.completedModules.includes(modulo.id);
        const isLocked = index > 0 && !this.userProgress.completedModules.includes(index);
        const progress = this.userProgress.moduleProgress[modulo.id] || 0;

        const card = document.createElement('div');
        card.className = `module-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`;
        
        card.innerHTML = `
            <div class="module-card__header">
                <h3 class="module-card__title">Módulo ${modulo.id}</h3>
                <span class="module-card__status ${isCompleted ? 'completed' : isLocked ? 'locked' : 'in-progress'}">
                    ${isCompleted ? '✓ Concluído' : isLocked ? '🔒 Bloqueado' : '▶️ Disponível'}
                </span>
            </div>
            <h4>${modulo.titulo}</h4>
            <p class="module-card__description">${modulo.descricao}</p>
            <div class="module-card__progress">
                <div class="module-card__progress-fill" style="width: ${progress}%"></div>
            </div>
            <div class="module-card__topics">
                ${modulo.topicos.map(topic => `<span class="module-card__topic">${topic}</span>`).join('')}
            </div>
        `;

        // Adicionar event listener diretamente
        card.addEventListener('click', () => {
            if (!isLocked) {
                this.abrirModulo(modulo.id);
            }
        });

        return card;
    }

    // Event listeners
    setupEventListeners() {
        // Menu toggle
        const navToggle = document.querySelector('.nav__toggle');
        const navMenu = document.querySelector('.nav__menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // Navegação
        this.setupNavigation();

        // Resource cards
        this.setupResourceCards();

        // Culture tabs
        this.setupCultureTabs();

        // Botão "Começar Agora"
        const startButton = document.querySelector('.btn--primary');
        if (startButton && startButton.textContent.includes('Começar Agora')) {
            startButton.addEventListener('click', () => {
                this.iniciarCurso();
            });
        }

        // Fechar modais com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.fecharTodosModais();
            }
        });

        // Fechar modais clicando fora
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('active');
            }
        });

        // Event listeners para inputs
        this.setupInputListeners();
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                        // Fechar menu mobile
                        const navMenu = document.querySelector('.nav__menu');
                        if (navMenu) {
                            navMenu.classList.remove('active');
                        }
                    }
                }
            });
        });
    }

    setupResourceCards() {
        const resourceCards = document.querySelectorAll('.resource-card');
        resourceCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                switch(index) {
                    case 0: this.abrirFlashcards(); break;
                    case 1: this.abrirQuiz(); break;
                    case 2: this.abrirCaligrafia(); break;
                    case 3: this.abrirDialogo(); break;
                    case 4: this.abrirGlossario(); break;
                    case 5: this.abrirAudioPlayer(); break;
                }
            });
        });
    }

    setupCultureTabs() {
        const tabs = document.querySelectorAll('.culture-tab');
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                const categorias = ['paises', 'culinaria', 'musica', 'historia', 'religiao'];
                const categoria = categorias[index];
                
                // Atualizar tabs ativas
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Mostrar conteúdo
                this.mostrarCultura(categoria);
            });
        });
    }

    setupInputListeners() {
        // Glossário search
        const glossarioInput = document.getElementById('glossario-search-input');
        if (glossarioInput) {
            glossarioInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.buscarGlossario();
                }
            });
        }

        // Diálogo input
        const dialogoInput = document.getElementById('dialogo-input-text');
        if (dialogoInput) {
            dialogoInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.enviarMensagem();
                }
            });
        }
    }

    // Funcionalidades principais
    iniciarCurso() {
        console.log('Iniciando curso...');
        const modulosSection = document.getElementById('modulos');
        if (modulosSection) {
            modulosSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    abrirModulo(moduleId) {
        console.log('Abrindo módulo:', moduleId);
        const modulo = courseData.modulos.find(m => m.id === moduleId);
        if (!modulo) return;

        const modal = document.getElementById('module-modal');
        const title = document.getElementById('modal-title');
        const body = document.getElementById('modal-body');
        const progressFill = document.getElementById('modal-progress-fill');

        if (title) title.textContent = `Módulo ${modulo.id}: ${modulo.titulo}`;
        if (progressFill) progressFill.style.width = `${this.userProgress.moduleProgress[moduleId] || 0}%`;
        if (body) body.innerHTML = this.renderModuleContent(modulo);
        if (modal) modal.classList.add('active');
    }

    renderModuleContent(modulo) {
        return `
            <div class="module-content">
                <div class="module-section">
                    <h4>📚 Vocabulário</h4>
                    <div class="vocabulary-grid">
                        ${modulo.vocabulario.map(word => `
                            <div class="vocabulary-item">
                                <div class="vocabulary-arabic">${word.arabe}</div>
                                <div class="vocabulary-transliteration">${word.transliteracao}</div>
                                <div class="vocabulary-portuguese">${word.portugues}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="module-section">
                    <h4>📖 Gramática</h4>
                    <p>${modulo.gramatica}</p>
                </div>

                <div class="module-section">
                    <h4>🌍 Cultura</h4>
                    <p>${modulo.cultura}</p>
                </div>

                <div class="module-section">
                    <h4>🍽️ Receita Cultural</h4>
                    <div class="cultural-recipe">
                        <h5>${modulo.receita.nome}</h5>
                        <p><strong>Ingredientes:</strong></p>
                        <ul>
                            ${modulo.receita.ingredientes.map(ing => `<li>${ing}</li>`).join('')}
                        </ul>
                        <p><strong>Preparo:</strong> ${modulo.receita.preparo}</p>
                    </div>
                </div>

                <div class="module-section">
                    <h4>🔗 Recursos Externos</h4>
                    <div class="external-links">
                        ${modulo.links.map(link => `
                            <a href="${link.url}" target="_blank" class="external-link">
                                ${link.nome}
                            </a>
                        `).join('')}
                    </div>
                </div>

                <div class="module-section">
                    <h4>📝 Leitura Bilíngue</h4>
                    <div class="reading-text">
                        <div class="reading-arabic">
                            أهلاً وسهلاً بكم في رحلة تعلم اللغة العربية. هذه لغة جميلة وغنية بالثقافة والتاريخ.
                        </div>
                        <div class="reading-portuguese">
                            Bem-vindos à jornada de aprendizado da língua árabe. Esta é uma língua bela e rica em cultura e história.
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <button class="btn btn--primary" onclick="window.app.concluirModulo(${modulo.id})">
                        ✓ Concluir Módulo
                    </button>
                </div>
            </div>
        `;
    }

    concluirModulo(moduleId) {
        if (!this.userProgress.completedModules.includes(moduleId)) {
            this.userProgress.completedModules.push(moduleId);
            this.userProgress.moduleProgress[moduleId] = 100;
            this.saveProgress();
            this.updateProgress();
            this.renderModules();
            this.fecharModal();
            this.mostrarMensagem('Módulo concluído com sucesso! 🎉', 'success');
        }
    }

    fecharModal() {
        const modal = document.getElementById('module-modal');
        if (modal) modal.classList.remove('active');
    }

    // Flashcards
    abrirFlashcards() {
        console.log('Abrindo flashcards...');
        const modal = document.getElementById('flashcards-modal');
        if (modal) {
            modal.classList.add('active');
            this.currentFlashcardIndex = 0;
            this.flashcardFlipped = false;
            this.renderFlashcard();
        }
    }

    renderFlashcard() {
        const vocabulario = this.getAllVocabulary();
        if (vocabulario.length === 0) return;

        const currentWord = vocabulario[this.currentFlashcardIndex];
        const frontText = document.getElementById('flashcard-front-text');
        const backText = document.getElementById('flashcard-back-text');
        const counter = document.getElementById('flashcard-counter');
        const flashcard = document.getElementById('flashcard');

        if (frontText) frontText.textContent = currentWord.arabe;
        if (backText) backText.textContent = currentWord.portugues;
        if (counter) counter.textContent = `${this.currentFlashcardIndex + 1}/${vocabulario.length}`;
        if (flashcard) {
            flashcard.classList.remove('flipped');
            this.flashcardFlipped = false;
        }
    }

    getAllVocabulary() {
        return courseData.modulos.flatMap(modulo => modulo.vocabulario);
    }

    virarCard() {
        const flashcard = document.getElementById('flashcard');
        if (flashcard) {
            flashcard.classList.toggle('flipped');
            this.flashcardFlipped = !this.flashcardFlipped;
        }
    }

    proximoCard() {
        const vocabulario = this.getAllVocabulary();
        this.currentFlashcardIndex = (this.currentFlashcardIndex + 1) % vocabulario.length;
        this.renderFlashcard();
    }

    cardAnterior() {
        const vocabulario = this.getAllVocabulary();
        this.currentFlashcardIndex = this.currentFlashcardIndex === 0 ? vocabulario.length - 1 : this.currentFlashcardIndex - 1;
        this.renderFlashcard();
    }

    fecharFlashcards() {
        const modal = document.getElementById('flashcards-modal');
        if (modal) modal.classList.remove('active');
    }

    // Quiz
    abrirQuiz() {
        console.log('Abrindo quiz...');
        const modal = document.getElementById('quiz-modal');
        if (modal) {
            modal.classList.add('active');
            this.currentQuizIndex = 0;
            this.quizScore = 0;
            this.renderQuizQuestion();
        }
    }

    renderQuizQuestion() {
        if (this.currentQuizIndex >= courseData.quizzes.length) {
            this.finalizarQuiz();
            return;
        }

        const quiz = courseData.quizzes[this.currentQuizIndex];
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('quiz-options');
        const feedback = document.getElementById('quiz-feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const scoreElement = document.getElementById('quiz-score');
        const totalElement = document.getElementById('quiz-total');

        if (questionText) questionText.textContent = quiz.pergunta;
        if (scoreElement) scoreElement.textContent = this.quizScore;
        if (totalElement) totalElement.textContent = courseData.quizzes.length;

        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            quiz.opcoes.forEach((opcao, index) => {
                const button = document.createElement('button');
                button.className = 'quiz-option';
                button.textContent = opcao;
                button.addEventListener('click', () => this.selecionarOpcao(index));
                optionsContainer.appendChild(button);
            });
        }

        if (feedback) {
            feedback.innerHTML = '';
            feedback.className = 'quiz-feedback';
        }
        if (nextBtn) nextBtn.style.display = 'none';
    }

    selecionarOpcao(selectedIndex) {
        const quiz = courseData.quizzes[this.currentQuizIndex];
        const options = document.querySelectorAll('.quiz-option');
        const feedback = document.getElementById('quiz-feedback');
        const nextBtn = document.getElementById('next-question-btn');

        options.forEach((option, index) => {
            option.style.pointerEvents = 'none';
            if (index === quiz.resposta) {
                option.classList.add('correct');
            } else if (index === selectedIndex) {
                option.classList.add('incorrect');
            }
        });

        const isCorrect = selectedIndex === quiz.resposta;
        if (isCorrect) {
            this.quizScore++;
            if (feedback) {
                feedback.className = 'quiz-feedback correct show';
                feedback.innerHTML = `<strong>Correto!</strong> ${quiz.explicacao}`;
            }
        } else {
            if (feedback) {
                feedback.className = 'quiz-feedback incorrect show';
                feedback.innerHTML = `<strong>Incorreto.</strong> ${quiz.explicacao}`;
            }
        }

        if (nextBtn) {
            nextBtn.style.display = 'block';
            nextBtn.addEventListener('click', () => this.proximaPergunta());
        }
    }

    proximaPergunta() {
        this.currentQuizIndex++;
        this.renderQuizQuestion();
    }

    finalizarQuiz() {
        const percentage = Math.round((this.quizScore / courseData.quizzes.length) * 100);
        const feedback = document.getElementById('quiz-feedback');
        const nextBtn = document.getElementById('next-question-btn');
        
        if (feedback) {
            feedback.className = percentage >= 70 ? 'quiz-feedback correct show' : 'quiz-feedback incorrect show';
            feedback.innerHTML = `
                <h4>Quiz Finalizado!</h4>
                <p>Você acertou ${this.quizScore} de ${courseData.quizzes.length} perguntas (${percentage}%)</p>
                <p>${percentage >= 70 ? 'Parabéns! Você tem um bom conhecimento.' : 'Continue estudando para melhorar seu desempenho.'}</p>
            `;
        }
        
        if (nextBtn) {
            nextBtn.textContent = 'Reiniciar Quiz';
            nextBtn.addEventListener('click', () => this.abrirQuiz());
        }
    }

    fecharQuiz() {
        const modal = document.getElementById('quiz-modal');
        if (modal) modal.classList.remove('active');
    }

    // Caligrafia
    abrirCaligrafia() {
        console.log('Abrindo caligrafia...');
        const modal = document.getElementById('caligrafia-modal');
        if (modal) {
            modal.classList.add('active');
            this.currentCaligraphy = 0;
            this.renderCaligraphy();
        }
    }

    setupCanvas() {
        const canvas = document.getElementById('caligrafia-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = '#21808d';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';

        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        const startDrawing = (e) => {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX || e.touches[0].clientX - canvas.offsetLeft, e.offsetY || e.touches[0].clientY - canvas.offsetTop];
        };

        const draw = (e) => {
            if (!isDrawing) return;
            const currentX = e.offsetX || e.touches[0].clientX - canvas.offsetLeft;
            const currentY = e.offsetY || e.touches[0].clientY - canvas.offsetTop;
            
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(currentX, currentY);
            ctx.stroke();
            [lastX, lastY] = [currentX, currentY];
        };

        const stopDrawing = () => {
            isDrawing = false;
        };

        // Mouse events
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        // Touch events
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            startDrawing(e);
        });
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            draw(e);
        });
        canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            stopDrawing();
        });
    }

    renderCaligraphy() {
        const letter = courseData.alfabeto[this.currentCaligraphy];
        const display = document.getElementById('caligrafia-example');
        
        if (display) {
            display.innerHTML = `
                <div class="arabic-display">${letter.letra}</div>
                <div class="caligrafia-name">${letter.nome} (${letter.som})</div>
            `;
        }
    }

    selecionarNivelCaligrafia(nivel) {
        this.currentCaligraphy = 0;
        this.renderCaligraphy();
    }

    limparCanvas() {
        const canvas = document.getElementById('caligrafia-canvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    proximaLetra() {
        this.currentCaligraphy = (this.currentCaligraphy + 1) % courseData.alfabeto.length;
        this.renderCaligraphy();
    }

    fecharCaligrafia() {
        const modal = document.getElementById('caligrafia-modal');
        if (modal) modal.classList.remove('active');
    }

    // Diálogo
    abrirDialogo() {
        console.log('Abrindo diálogo...');
        const modal = document.getElementById('dialogo-modal');
        if (modal) {
            modal.classList.add('active');
            this.initializeDialogue();
        }
    }

    initializeDialogue() {
        if (this.dialogueHistory.length === 0) {
            this.adicionarMensagemIA("أهلاً وسهلاً! كيف يمكنني مساعدتك اليوم؟<br>Olá! Como posso ajudá-lo hoje?");
        } else {
            this.renderDialogueHistory();
        }
    }

    enviarMensagem() {
        const input = document.getElementById('dialogo-input-text');
        if (!input) return;
        
        const message = input.value.trim();
        if (!message) return;

        this.adicionarMensagemUsuario(message);
        input.value = '';
        
        setTimeout(() => {
            const response = this.gerarRespostaIA(message);
            this.adicionarMensagemIA(response);
        }, 1000);
    }

    adicionarMensagemUsuario(message) {
        const chat = document.getElementById('dialogo-chat');
        if (chat) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'dialogo-message user';
            messageDiv.textContent = message;
            chat.appendChild(messageDiv);
            chat.scrollTop = chat.scrollHeight;
        }
        this.dialogueHistory.push({type: 'user', message});
    }

    adicionarMensagemIA(message) {
        const chat = document.getElementById('dialogo-chat');
        if (chat) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'dialogo-message ai';
            messageDiv.innerHTML = message;
            chat.appendChild(messageDiv);
            chat.scrollTop = chat.scrollHeight;
        }
        this.dialogueHistory.push({type: 'ai', message});
    }

    gerarRespostaIA(userMessage) {
        const respostas = [
            "ممتاز! هذا صحيح.<br>Excelente! Está correto.",
            "يمكنك أن تقول: " + userMessage + "<br>Você pode dizer: " + userMessage,
            "هل تريد أن تتعلم المزيد؟<br>Quer aprender mais?",
            "النطق الصحيح هو مهم جداً.<br>A pronúncia correta é muito importante.",
            "هذا مفيد جداً للحديث اليومي.<br>Isso é muito útil para conversas diárias."
        ];
        return respostas[Math.floor(Math.random() * respostas.length)];
    }

    renderDialogueHistory() {
        const chat = document.getElementById('dialogo-chat');
        if (!chat) return;
        
        chat.innerHTML = '';
        this.dialogueHistory.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `dialogo-message ${msg.type}`;
            messageDiv.innerHTML = msg.message;
            chat.appendChild(messageDiv);
        });
        chat.scrollTop = chat.scrollHeight;
    }

    fecharDialogo() {
        const modal = document.getElementById('dialogo-modal');
        if (modal) modal.classList.remove('active');
    }

    // Glossário
    abrirGlossario() {
        console.log('Abrindo glossário...');
        const modal = document.getElementById('glossario-modal');
        if (modal) {
            modal.classList.add('active');
            this.renderGlossario();
        }
    }

    renderGlossario() {
        const results = document.getElementById('glossario-results');
        if (!results) return;
        
        const vocabulario = this.getAllVocabulary();
        results.innerHTML = vocabulario.map(word => `
            <div class="glossario-item">
                <div>
                    <div class="glossario-arabic">${word.arabe}</div>
                    <div class="glossario-transliteration">${word.transliteracao}</div>
                </div>
                <div class="glossario-portuguese">${word.portugues}</div>
            </div>
        `).join('');
    }

    buscarGlossario() {
        const input = document.getElementById('glossario-search-input');
        if (!input) return;
        
        const term = input.value.toLowerCase().trim();
        if (!term) {
            this.renderGlossario();
            return;
        }
        
        const vocabulario = this.getAllVocabulary();
        const filtered = vocabulario.filter(word => 
            word.arabe.includes(term) || 
            word.portugues.toLowerCase().includes(term) ||
            word.transliteracao.toLowerCase().includes(term)
        );
        
        const results = document.getElementById('glossario-results');
        if (results) {
            results.innerHTML = filtered.map(word => `
                <div class="glossario-item">
                    <div>
                        <div class="glossario-arabic">${word.arabe}</div>
                        <div class="glossario-transliteration">${word.transliteracao}</div>
                    </div>
                    <div class="glossario-portuguese">${word.portugues}</div>
                </div>
            `).join('');
        }
    }

    fecharGlossario() {
        const modal = document.getElementById('glossario-modal');
        if (modal) modal.classList.remove('active');
    }

    // Áudio
    abrirAudioPlayer() {
        console.log('Abrindo audio player...');
        const modal = document.getElementById('audio-modal');
        if (modal) {
            modal.classList.add('active');
            this.renderAudioPlayer();
        }
    }

    initializeAudio() {
        this.currentAudioWord = 0;
    }

    renderAudioPlayer() {
        const vocabulario = this.getAllVocabulary();
        const currentWord = vocabulario[this.currentAudioWord];
        
        const wordElement = document.getElementById('audio-word');
        const transliterationElement = document.getElementById('audio-transliteration');
        const practiceList = document.getElementById('audio-practice-list');
        
        if (wordElement) wordElement.textContent = currentWord.arabe;
        if (transliterationElement) transliterationElement.textContent = currentWord.transliteracao;
        
        if (practiceList) {
            practiceList.innerHTML = vocabulario.slice(0, 12).map((word, index) => `
                <div class="audio-practice-item" data-index="${index}">
                    <div style="font-size: 1.2em; margin-bottom: 4px;">${word.arabe}</div>
                    <div style="font-size: 0.9em; color: var(--color-text-secondary);">${word.portugues}</div>
                </div>
            `).join('');
            
            // Adicionar event listeners
            practiceList.querySelectorAll('.audio-practice-item').forEach(item => {
                item.addEventListener('click', () => {
                    const index = parseInt(item.dataset.index);
                    this.selecionarPalavraAudio(index);
                });
            });
        }
    }

    selecionarPalavraAudio(index) {
        this.currentAudioWord = index;
        this.renderAudioPlayer();
    }

    reproducirAudio() {
        this.mostrarMensagem('🔊 Reproduzindo áudio...', 'info');
        
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance();
            const vocabulario = this.getAllVocabulary();
            const currentWord = vocabulario[this.currentAudioWord];
            
            utterance.text = currentWord.transliteracao;
            utterance.lang = 'ar-SA';
            utterance.rate = 0.8;
            
            speechSynthesis.speak(utterance);
        }
    }

    repetirAudio() {
        this.reproducirAudio();
    }

    fecharAudio() {
        const modal = document.getElementById('audio-modal');
        if (modal) modal.classList.remove('active');
    }

    // Cultura
    initializeCulture() {
        this.mostrarCultura('paises');
    }

    mostrarCultura(categoria) {
        console.log('Mostrando cultura:', categoria);
        this.currentCultureTab = categoria;
        const content = document.getElementById('culture-content');
        if (!content) return;
        
        switch(categoria) {
            case 'paises':
                content.innerHTML = this.renderPaises();
                break;
            case 'culinaria':
                content.innerHTML = this.renderCulinaria();
                break;
            case 'musica':
                content.innerHTML = this.renderMusica();
                break;
            case 'historia':
                content.innerHTML = this.renderHistoria();
                break;
            case 'religiao':
                content.innerHTML = this.renderReligiao();
                break;
        }
    }

    renderPaises() {
        return `
            <div class="culture-grid">
                ${courseData.cultura.paises.map(pais => `
                    <div class="culture-item">
                        <h4>${pais.portugues}</h4>
                        <div class="arabic-text">${pais.pais}</div>
                        <div class="transliteration">${pais.transliteracao}</div>
                        <p><strong>Capital:</strong> ${pais.capital}</p>
                        <p>${pais.info}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderCulinaria() {
        return `
            <div class="culture-grid">
                ${courseData.cultura.culinaria.map(prato => `
                    <div class="culture-item">
                        <h4>${prato.transliteracao}</h4>
                        <div class="arabic-text">${prato.prato}</div>
                        <p><strong>Origem:</strong> ${prato.origem}</p>
                        <p>${prato.descricao}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderMusica() {
        return `
            <div class="culture-grid">
                ${courseData.cultura.musica.map(artista => `
                    <div class="culture-item">
                        <h4>${artista.nome}</h4>
                        <div class="arabic-text">${artista.artista}</div>
                        <p><strong>País:</strong> ${artista.pais}</p>
                        <p>${artista.info}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderHistoria() {
        return `
            <div class="culture-grid">
                ${courseData.cultura.historia.map(periodo => `
                    <div class="culture-item">
                        <h4>${periodo.nome}</h4>
                        <div class="arabic-text">${periodo.periodo}</div>
                        <p><strong>Período:</strong> ${periodo.anos}</p>
                        <p>${periodo.info}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderReligiao() {
        return `
            <div class="culture-grid">
                ${courseData.cultura.religiao.map(conceito => `
                    <div class="culture-item">
                        <h4>${conceito.nome}</h4>
                        <div class="arabic-text">${conceito.conceito}</div>
                        <p>${conceito.info}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Utilidades
    mostrarMensagem(mensagem, tipo = 'info') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `${tipo}-message`;
        messageDiv.textContent = mensagem;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 3000);
    }

    fecharTodosModais() {
        const modais = document.querySelectorAll('.modal');
        modais.forEach(modal => modal.classList.remove('active'));
    }
}

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado, inicializando aplicação...');
    
    // Criar instância da aplicação
    const app = new ArabicCourseApp();
    
    // Tornar disponível globalmente
    window.app = app;
    
    // Inicializar
    app.init();
    
    console.log('Aplicação inicializada com sucesso!');
});