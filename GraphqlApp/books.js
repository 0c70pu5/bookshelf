const books = [
  {
    id: 'design-patterns',
    name: 'Design Patterns - Elements of Reusable Object-Oriented Software',
    date: '21 октября 1994 г.',
    authors: [
      0,
      1,
      2,
      3
    ],
    description: `
      Книга 1994 года о программной инженерии, описывающая шаблоны проектирования программного обеспечения. Авторами книги, которых прозвали «Бандой четырёх»[1], являются Эрих Гамма, Ричард Хелм, Ральф Джонсон (англ.)русск., Джон Влиссидес. Предисловие написал Гради Буч.
      Книга состоит из двух частей, в первых двух главах рассказывается о возможностях и недостатках объектно-ориентированного программирования, а во второй части описаны 23 классических шаблона проектирования. Примеры в книге написаны на языках программирования C++ и Smalltalk.
      Книга получила награды Jolt productivity (англ.)русск., и Software Development productivity в 1994 году[2]. Коллектив авторов был награждён премией SIGPLAN (англ.)русск. Programming Languages Achievement Award в 2005 году[3] за данную книгу.
      Книга издана 21 октября 1994 года с отметкой копирайта 1995 года. На июль 2013 года имеет 41 переиздание. Впервые представлена публике на встрече OOPSLA, Портланд, Орегон в октябре 1994 года. Продано более полумиллиона экземпляров книги на английском и 13 других языках. Перевод на русский издан издательством «Питер».
    `,
    comments: [
      {
        id: 1,
        userName: 'EsslingerLifelessly',
        text: 'must have'
      },
      {
        id: 2,
        userName: 'yegorman',
        text: 'Думаю, что мало, кто не слышал об этой книге. Это классика по паттернам. Это те самые ребята, кто первыми структурировали и всесторонне исследовали приемы объектно-ориентированного проектирования. Книгу просто необходимо прочитать. А потом через какое-то время вернуться к ней и в очередной раз узнать из нее много нового'
      },
      {
        id: 3,
        userName: 'ManOfOrange',
        text: 'Содержит множество красивых, изящных и работающих решений, использование которых значительно улучшает код, стабилизирует его работу и позволяет добиться нужного малыми силами. С одной стороны все описанные паттерны используют стандартные возможности языков, ничего сверхъестетсвенного, но это уже готовые и проверенные решения, дойти до которых самому было бы гораздо труднее и не так надёжно.'
      },
      {
        id: 4,
        userName: 'devfom',
        text: 'Must have в коллекции любого ООП разработчика. Новичку позволит дать скачок от новичка к чуть более понимающему новичку, при этом после первого прочтения(в моем случае) Вы едва ли поймете всю книгу и запомните все паттерны, но общее понимание того зачем они, и что вообще существует Вы точно получите, что положительно поспособствует решению практических задач, во время работы с которыми Вы станете замечать, что что-то знакомое описывалось в книге.'
      },
      {
        id: 5,
        userName: 'KDW',
        text: 'Для такого нуба как я - вещь неоценимая. И мало этого - написана доступно.'
      }
    ]
  },
  {
    id: 'refactoring',
    name: 'Refactoring - Improving the Design of Existing Code',
    date: '1 января 1999 г.',
    authors: [
      4
    ],
    description: `
      Книга была написана в 1999(!) году Мартином Фаулером(Martin Fowler), автором, имя которого любой программист должен был хотя бы слышать. Он написал просто массу материала(как книг, так и отдельных статей) посвящённого различным аспектам разработки; главным образом он пишет по архитектурной части приложений, конечно. Но другие труды нас сегодня не интересует, мы будем говорить про конкретную книгу — Refactoring.
      Существует распространённое заблуждение, что область информационных технологий несётся вперёд семимильными шагами, и что всё устаревает, не успев появится на свет, поэтому обзор книги, которая написана 17 лет назад, да ещё и не по фундаментальной теме, может у кого-то вызвать недоумение. Но, как я уже сказал, это всего лишь заблуждение — есть такие вещи, в нашей с вами профессии, которые действительно довольно быстро устаревают, но их гораздо меньше чем тех, что с годами становится только крепче и понимание их важности только растёт. Поэтому, я с уверенностью могу сказать: настоящая книга сейчас является не менее актуальной, чем она была 17 лет назад, а может быть стала ещё более актуальной, т.к. программ становится всё больше и они становится всё сложнее.
      По традиции, начну с языка книги: здесь всё в порядке,— обычный технический английский, без каких либо изысков. Читать книгу довольно легко. Достоинством книги также является её структура: начальная часть книги посвящена вопросу рефакторинга в широком смысле: что это? откуда взялось? зачем и кому это надо? Всё это занимает каких-то ~100 страниц, и является хорошим вступлением в довольно интересную тему. Вся остальная часть книги(почти вся) выполнена в виде рецептов: рассматривается проблема, предлагается её решение. Каждый рецепт является независимым, хотя пачки рецептов и объединены в группы, которые являются главами книги. Безусловно, главы в этой книги условны — просто в книге должны быть главы, и рецепты худо-бедно объединены по принципу схожести тематики. Даже в самой структуре книги уже видны зачатки архитектурного подхода — хорошо структурированный текст читать куда проще, чем просто список рецептов, пусть даже их группировка и является условной.
      Итак, что же представляет собой типичный рецепт? Рецепт состоит из заголовка — ёмкий заголовок, чтобы легче было искать впоследствии,— краткого описания проблемы, исходного кода и результирующего кода. Затем приводится мотивация того, зачем вообще нужно делать именно этот тип рефакторинга, приводится детальный план его выполнения и, наконец, приводится пример. Сразу хочется сказать, что примеры в этой книге приводятся исключительно для иллюстрации выполнения того или иного типа рефакторинга, они не блещут ни изяществом, ни архитектурной глубиной — и слава Богу! Все примеры в книге просты и понятны, они не пытаются запутать, а, наоборот, иллюстрируют применение только что прочитанного материала в «боевых» условиях.
      Книга не случайно организована именно так: она не предназначена для одного прочитывания и последующего лежания на полке, эта книга является настольной, чтобы программист, столкнувшись с проблемой, мог посмотреть как ему её решить. Т.к. готовых рецептов здесь хоть отбавляй, на многие проблемы здесь уже дан ответ. Не на все, безусловно, но подавляющее большинство задач рефакторинга, с которыми я сталкивался, так или иначе состояли из тех «базовых блоков», что описаны в этой книге. Очень удобным является тот факт, что в каждом рецепте приведена пошаговая инструкция, как лучше его выполнять, чтобы ничего не забыть(не уверен, что этим будет кто-то пользоваться, за исключением уж совсем новичков, но всё равно интересно).
      Большая часть книги посвящена «мелкому» рефакторингу, какой поддерживают современные утилиты типа ReSharper: т.е. такой рефакторинг, который оперирует переменными, функциями и классами. Правда, есть глава, которая посвящена «большому» рефакторингу, но она не может покрыть эту тему — слишком тема обширная. Вообще, «большой» рефакторинг это уже совершенно другой уровень, уровень смены архитектуры, а поэтому глупо было бы ожидать от этой книги полноценного раскрытия данной темы. Эта книга для повседневного написания кода, а не книга по архитектуре и проектированию систем.
      Теперь, что касается уровня книги: я читал её не так давно и не открыл в ней для себя ничего нового, фактически я её просто пролистал — почти всё, что в ней написано я уже познал либо сам, либо через статьи. Поэтому, вероятно, что человек с опытом работы от 5-6 лет(только не все 5-6 лет написания спагетти из кода, а хотя бы половину этого срока написание нормального, структурированного кода)  не найдёт здесь ничего нового. А вот те, у кого опыт поменьше, скажем год-два, на мой взгляд, могут открыть в этой книге много всего интересного, не набив многих ошибок собственным горбом(хотя кого я обманываю?). Тем более, как мне кажется, сейчас всё-таки требования к начинающим программистам выросли и от них уже в начале пути требуются навыки организации кода(хотя бы базовые), а когда нет времени пробираться сквозь все тернии в одиночку, такие книги могут оказаться хорошим подспорьем. Тем более, с повсеместным(?) внедрением TDD, без рефакторинга вообще никак. И лучше уметь делать его хорошо, чем никак.
      Так что, опытным специалистам нет смысла читать эту книгу? Я бы так не сказал, как минимум вы освежите память и повторите некоторые техники рефакторинга, но может получится и так, что вы узнаете и нечто новое — у всех разный опыт. Поэтому, на мой взгляд, эту книгу хотя бы раз стоит прочитать разработчикам всех уровней, исключая, наверное, начинающих — нет смысла учится рефакторингу, когда ты только азы программирования постигаешь, это только помешает.
      Исходя из всего вышесказанного, я бы поставил этой книге пятёрку, но не жирную; она хорошо справляется со своей задачей — после прочтения данной книги, у вас не должно остаться вопросов по поводу того, что такое рефакторинг и стоит ли его применять.
    `,
    comments: [
      {
        id: 1,
        userName: 'DaddyOfTwins',
        text: 'The title might hint that this is only for someone dealing with a large legacy code base. But another way to look at this book is that each section:'
      },
      {
        id: 2,
        userName: 'alejandro claro',
        text: 'This book is a bit old. It is the first, or among the first, which addresses the refactoring issue. However, everything in it is relevant today.'
      },
      {
        id: 3,
        userName: 'userName',
        text: 'Cool!'
      },
      {
        id: 4,
        userName: 'userName2',
        text: 'Awesome!'
      },
      {
        id: 5,
        userName: 'userName3',
        text: 'Must have!'
      },
      {
        id: 6,
        userName: 'userName4',
        text: 'excellent'
      },
      {
        id: 7,
        userName: 'userName5',
        text: 'Perfect'
      },
      {
        id: 8,
        userName: 'userName6',
        text: 'Comment'
      }
    ]
  },
  {
    id: 'patterns-of-enterprise-application-architecture',
    name: 'Patterns of Enterprise Application Architecture',
    date: '5 ноября 2002 г.',
    authors: [
      4
    ],
    description: `
      The practice of enterprise application development has benefited from the emergence of many new enabling technologies. Multi-tiered object-oriented platforms, such as Java and .NET, have become commonplace. These new tools and technologies are capable of building powerful applications, but they are not easily implemented. Common failures in enterprise applications often occur because their developers do not understand the architectural lessons that experienced object developers have learned.
      Patterns of Enterprise Application Architecture is written in direct response to the stiff challenges that face enterprise application developers. The author, noted object-oriented designer Martin Fowler, noticed that despite changes in technology--from Smalltalk to CORBA to Java to .NET--the same basic design ideas can be adapted and applied to solve common problems. With the help of an expert group of contributors, Martin distills over forty recurring solutions into patterns. The result is an indispensable handbook of solutions that are applicable to any enterprise application platform.
      This book is actually two books in one. The first section is a short tutorial on developing enterprise applications, which you can read from start to finish to understand the scope of the book's lessons. The next section, the bulk of the book, is a detailed reference to the patterns themselves. Each pattern provides usage and implementation information, as well as detailed code examples in Java or C#. The entire book is also richly illustrated with UML diagrams to further explain the concepts.
      Armed with this book, you will have the knowledge necessary to make important architectural decisions about building an enterprise application and the proven patterns for use when building them.
    `,
    comments: [
      {
        id: 1,
        userName: 'userName',
        text: 'Cool!'
      },
      {
        id: 2,
        userName: 'userName2',
        text: 'Awesome!'
      },
      {
        id: 3,
        userName: 'userName3',
        text: 'Must have!'
      },
      {
        id: 4,
        userName: 'userName4',
        text: 'excellent'
      },
      {
        id: 5,
        userName: 'userName5',
        text: 'Perfect'
      },
      {
        id: 6,
        userName: 'userName6',
        text: 'Comment'
      }
    ]
  },
  {
    id: 'domain-driven-design',
    name: 'Domain-Driven Design',
    date: '2003 г.',
    authors: [
      5
    ],
    description: `
      Классическая книга Э.Эванса освещает наиболее общий, стратегический круг вопросов, связанных с объектно-ориентированной разработкой программного обеспечения. Это переработка и структуризация знаний о предметных областях, применение типовых архитектурных шаблонов, построение и анализ моделей предметных областей, проектирование программных объектов с точки зрения качества их взаимодействия и передачи логической структуры знаний, организация программ на основе крупномасштабных структур, выработка общего языка и стратегии коммуникации в группе. Подход автора строится на динамичном рефакторинге модели и постоянной дистилляции знаний. Это позволяет достигнуть высокой степени гармонии между логикой предметной области и кодом программы, а также достаточной гибкости программной архитектуры для целей удобной доработки и интеграции программного обеспечения. Книга насыщена практическими примерами из реальных проектов.
      Мировое сообщество программистов признает, что моделирование предметных областей - ключевой раздел проектирования программного обеспечения. В моделях предметных областей разработчики выражают сложные функции своих программ, реализуя их затем в таком виде, который отвечает реальным потребностям пользователей. Но несмотря на очевидную важность предмета, существует очень мало пособий по эффективному внедрению моделирования предметных областей в практику разработки программ.
      Книга Эрика Эванса заполняет этот пробел. Она посвящена не отдельным технологиям, а систематическому предметно-ориентированному подходу. В ней представлен широкий набор приемов и методик, основанных на практическом опыте, и фундаментальных принципов, помогающих в реализации программных проектов из сложных предметных областей. Органично переплетая практику проектирования и реализации программ, эта книга содержит множество фактических примеров, иллюстрирующих применение общих стратегических принципов в реальных программных проектах.
      Из книги читатель узнает, как с помощью модели предметной области придать разработке сложной системы нужную направленность и динамику. Выделены основные приемы и образцы-шаблоны, образующие общий язык группы разработчиков. Особо подчеркивается необходимость рефакторинга не только кода, но и модели в его основе, что в сочетании с итерационной agile-методикой приводит к углублению знаний о предметной области и повышению качества взаимодействия между специалистами и программистами. Подход книги строится именно на этом фундаменте, предлагая модели и архитектуры для систем и организаций любой сложности.
    `,
    comments: [
      {
        id: 1,
        userName: 'userName',
        text: 'Cool!'
      },
      {
        id: 2,
        userName: 'userName2',
        text: 'Awesome!'
      },
      {
        id: 3,
        userName: 'userName3',
        text: 'Must have!'
      },
      {
        id: 4,
        userName: 'userName4',
        text: 'excellent'
      },
      {
        id: 5,
        userName: 'userName5',
        text: 'Perfect'
      },
      {
        id: 6,
        userName: 'userName6',
        text: 'Comment'
      }
    ]
  },
  {
    id: 'clean-code',
    name: 'Clean Code - A Handbook of Agile Software Craftsmanship',
    date: '1 августа 2008 г.',
    authors: [
      6
    ],
    description: `
      Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.
      Noted software expert Robert C. Martin presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship . Martin has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code “on the fly” into a book that will instill within you the values of a software craftsman and make you a better programmer—but only if you work at it.
      What kind of work will you be doing? You’ll be reading code—lots of code. And you will be challenged to think about what’s right about that code, and what’s wrong with it. More importantly, you will be challenged to reassess your professional values and your commitment to your craft.
      Clean Code is divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case study is an exercise in cleaning up code—of transforming a code base that has some problems into one that is sound and efficient. The third part is the payoff: a single chapter containing a list of heuristics and “smells” gathered while creating the case studies. The result is a knowledge base that describes the way we think when we write, read, and clean code.
    `,
    comments: [
      {
        id: 1,
        userName: 'userName',
        text: 'Cool!'
      },
      {
        id: 2,
        userName: 'userName2',
        text: 'Awesome!'
      },
      {
        id: 3,
        userName: 'userName3',
        text: 'Must have!'
      },
      {
        id: 4,
        userName: 'userName4',
        text: 'excellent'
      },
      {
        id: 5,
        userName: 'userName5',
        text: 'Perfect'
      },
      {
        id: 6,
        userName: 'userName6',
        text: 'Comment'
      }
    ]
  },
  {
    id: 'agile-software-development',
    name: 'Agile Software Development, Principles, Patterns, and Practices',
    date: '12 октября 2001 г.',
    authors: [
      6
    ],
    description: `
      Written by a software developer for software developers, this book is a unique collection of the latest software development methods. The author includes OOD, UML, Design Patterns, Agile and XP methods with a detailed description of a complete software design for reusable programs in C++ and Java. Using a practical, problem-solving approach, it shows how to develop an object-oriented application—from the early stages of analysis, through the low-level design and into the implementation. Walks readers through the designer's thoughts — showing the errors, blind alleys, and creative insights that occur throughout the software design process. The book covers: Statics and Dynamics; Principles of Class Design; Complexity Management; Principles of Package Design; Analysis and Design; Patterns and Paradigm Crossings. Explains the principles of OOD, one by one, and then demonstrates them with numerous examples, completely worked-through designs, and case studies. Covers traps, pitfalls, and work arounds in the application of C++ and OOD and then shows how Agile methods can be used. Discusses the methods for designing and developing big software in detail. Features a three-chapter, in-depth, single case study of a building security system. For Software Engineers, Programmers, and Analysts who want to understand how to design object oriented software with state of the art methods.
    `,
    comments: [
      {
        id: 1,
        userName: 'userName',
        text: 'Cool!'
      },
      {
        id: 2,
        userName: 'userName2',
        text: 'Awesome!'
      },
      {
        id: 3,
        userName: 'userName3',
        text: 'Must have!'
      },
      {
        id: 4,
        userName: 'userName4',
        text: 'excellent'
      },
      {
        id: 5,
        userName: 'userName5',
        text: 'Perfect'
      },
      {
        id: 6,
        userName: 'userName6',
        text: 'Comment'
      }
    ]
  }
];

module.exports = {
  books
};
