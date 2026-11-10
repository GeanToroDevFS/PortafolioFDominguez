export const profile = {
  name: 'Felipe Armando Domínguez Muñoz',
  given: 'Felipe Armando',
  family: 'Domínguez Muñoz',
  role: 'Abogado',
  specialty: 'Especialista en Educación en Derechos Humanos',
  location: 'Yumbo, Valle del Cauca',
  birth: '27 de septiembre de 1987',
  birthPlace: 'Buga, Valle del Cauca',
  civilStatus: 'Casado',
  document: 'C.C. 1.118.287.447 de Yumbo (Valle)',
  professionalCard: '338009',
  professionalCardIssuer: 'Consejo Superior de la Judicatura',
  address: 'Calle 13 No. 1-34, Barrio Bolívar',
  city: 'Yumbo, Valle del Cauca',
  phoneDisplay: '322 645 2867',
  phoneHref: 'tel:+573226452867',
  whatsapp: 'https://wa.me/573226452867',
  emails: ['felipedominguezabogado@gmail.com', 'felipedominguez0927@gmail.com'],
  maps: 'https://www.google.com/maps/search/?api=1&query=Calle%2013%20No.%201-34%20Barrio%20Bolivar%20Yumbo%20Valle%20del%20Cauca',
  paragraphs: [
    'Abogado egresado de la Universidad Libre de Cali, con especialización en Educación en Derechos Humanos de la Universidad Unicatólica. Cuenta con amplios conocimientos en asuntos legales y procesales, y se destaca por analizar, interpretar y redactar documentos jurídicos con precisión, a partir de la legislación, la jurisprudencia, la doctrina y la costumbre.',
    'Tiene una sólida capacidad de planificación y organización, liderazgo, adaptabilidad al cambio y trabajo en equipo. Sus principios sostienen relaciones basadas en el respeto y la ética profesional. Se reconoce como una persona íntegra, con visión estratégica, capacidad para liderar proyectos y tomar decisiones con responsabilidad y compromiso.',
  ],
}

export const sources = ['Legislación', 'Jurisprudencia', 'Doctrina', 'Costumbre']

export const values = [
  'Integridad',
  'Ética profesional',
  'Liderazgo',
  'Planificación',
  'Trabajo en equipo',
  'Visión estratégica',
]

export const areas = [
  {
    title: 'Derecho policivo',
    detail:
      'Inspección de policía urbana, Código Nacional de Seguridad y Convivencia Ciudadana (Ley 1801 de 2016) y derecho procesal policivo.',
  },
  {
    title: 'Derechos humanos',
    detail:
      'Especialización en educación en derechos humanos y seminario de la Universidad de Manizales sobre la materia.',
  },
  {
    title: 'Gestión pública',
    detail:
      'Ejercicio jurídico y de apoyo en secretarías de la Alcaldía de Yumbo: Jurídica, Gobierno, Tránsito y Paz.',
  },
  {
    title: 'Tránsito y transporte',
    detail:
      'Apoyo a la gestión en el área jurídica de la Secretaría de Tránsito y Transporte del municipio de Yumbo.',
  },
  {
    title: 'Paz y convivencia',
    detail: 'Acompañamiento técnico a la Secretaría de Paz y Convivencia del municipio de Yumbo.',
  },
  {
    title: 'Redacción jurídica',
    detail:
      'Análisis, interpretación y elaboración de documentos con base en las fuentes del derecho.',
  },
]

export type Period = { from: string; to: string }

export type Role = {
  org: string
  unit: string
  title: string
  kind: string
  periods: Period[]
  chief?: string
  summary: string
}

export const roles: Role[] = [
  {
    org: 'Alcaldía de Yumbo',
    unit: 'Secretaría de Gobierno, Seguridad y Convivencia',
    title: 'Inspector de Policía Urbana, Categoría 1ª',
    kind: 'Nombramiento provisional · Código 233, grado 01',
    periods: [{ from: '10 de agosto de 2022', to: '20 de abril de 2025' }],
    chief: 'Carlos Andrés Murgueitio, Secretario de Gobierno',
    summary:
      'Profesional al servicio de la Administración Central del Municipio de Yumbo. La certificación de la Alcaldía describe funciones de convivencia ciudadana, conocimiento de comportamientos contrarios a la convivencia, investigaciones, medidas correctivas, querellas policivas y coordinación con la Policía Nacional y la Secretaría de Seguridad y Convivencia.',
  },
  {
    org: 'Secretaría de Tránsito y Transporte',
    unit: 'Municipio de Yumbo · Área jurídica',
    title: 'Profesional de apoyo a la gestión',
    kind: 'Contratista',
    periods: [
      { from: '1 de febrero de 2022', to: '3 de agosto de 2022' },
      { from: '18 de mayo de 2021', to: '31 de diciembre de 2021' },
    ],
    summary:
      'Apoyo jurídico a la Secretaría de Tránsito y Transporte del municipio de Yumbo, en dos vigencias contractuales.',
  },
  {
    org: 'Secretaría Jurídica',
    unit: 'Alcaldía de Yumbo',
    title: 'Profesional abogado',
    kind: 'Contratista',
    periods: [
      { from: '20 de enero de 2021', to: '31 de diciembre de 2021' },
      { from: '3 de febrero de 2020', to: '24 de diciembre de 2020' },
    ],
    summary:
      'Ejercicio profesional como abogado contratista de la Secretaría Jurídica del municipio de Yumbo, en las vigencias 2020 y 2021.',
  },
  {
    org: 'Secretaría de Paz y Convivencia',
    unit: 'Municipio de Yumbo',
    title: 'Técnico de apoyo a la gestión',
    kind: 'Contratista',
    periods: [
      { from: '15 de febrero de 2019', to: '27 de diciembre de 2019' },
      { from: '1 de febrero de 2018', to: '26 de diciembre de 2018' },
    ],
    summary:
      'Apoyo técnico a la gestión de la Secretaría de Paz y Convivencia del municipio de Yumbo, en las vigencias 2018 y 2019.',
  },
]

export type SupportingDocument = {
  label: string
  src: string
  alt: string
}

export const formalStudies: Array<{
  level: string
  title: string
  school: string
  place: string
  date: string
  documents?: SupportingDocument[]
}> = [
  {
    level: 'Maestría en curso',
    title: 'Gobierno y Políticas Públicas',
    school: 'Universidad Icesi',
    place: 'Cali, Valle del Cauca',
    date: 'Primer semestre de 2026',
    documents: [
      {
        label: 'Ver constancia',
        src: '/certificados/constancia-icesi.jpg',
        alt: 'Constancia de estudio de la Maestría en Gobierno y Políticas Públicas, Universidad Icesi',
      },
    ],
  },
  {
    level: 'Especialización',
    title: 'Educación en Derechos Humanos',
    school: 'Universidad Unicatólica',
    place: 'Cali, Valle del Cauca',
    date: '2 de diciembre de 2022',
    documents: [
      {
        label: 'Ver título',
        src: '/certificados/acta-unicatolica.jpg',
        alt: 'Acta de graduación de Especialista en Educación en Derechos Humanos, Universidad Unicatólica',
      },
    ],
  },
  {
    level: 'Universitario',
    title: 'Derecho',
    school: 'Universidad Libre',
    place: 'Cali, Valle del Cauca',
    date: '26 de noviembre de 2019',
    documents: [
      {
        label: 'Ver título',
        src: '/certificados/acta-universidad-libre.jpg',
        alt: 'Acta de grado de abogado de la Universidad Libre, seccional Cali',
      },
      {
        label: 'Ver tarjeta profesional',
        src: '/certificados/tarjeta-profesional.jpg',
        alt: 'Tarjeta profesional de abogado número 338009',
      },
    ],
  },
  {
    level: 'Bachillerato técnico',
    title: 'Bachiller técnico',
    school: 'Colegio Cooperativo Técnico Industrial José Antonio Galán',
    place: 'Yumbo, Valle del Cauca',
    date: '2 de julio de 2004',
  },
]

export const complementary: Array<{
  title: string
  school: string
  hours: string
  date: string
  documents?: SupportingDocument[]
}> = [
  {
    title: 'Formulación de proyectos de innovación en la gestión pública',
    school: 'Universidad Autónoma de Occidente',
    hours: '30 horas',
    date: '28 de noviembre de 2024',
  },
  {
    title: 'Diplomado en derecho procesal policivo',
    school: 'Centro Integrado de Capacitación y Asesoramiento Profesional S.A.S. — CICAP',
    hours: '20 horas',
    date: '15 de agosto de 2023',
  },
  {
    title: 'Seminario de derecho procesal policivo',
    school: 'Escuela Superior de Administración Pública — ESAP',
    hours: '20 horas',
    date: '11 de agosto de 2023',
  },
  {
    title: 'Diplomado Ley 1801 de 2016, Código Nacional de Policía',
    school: 'Universidad Autónoma de Occidente',
    hours: '30 horas',
    date: '18 de octubre de 2022',
  },
  {
    title: 'Seminario en derechos humanos',
    school: 'Universidad de Manizales',
    hours: '40 horas',
    date: '5 de agosto de 2022',
    documents: [
      {
        label: 'Ver certificado',
        src: '/certificados/seminario-manizales.jpg',
        alt: 'Certificado del Seminario en Derechos Humanos de la Universidad de Manizales',
      },
    ],
  },
]

export const records = [
  {
    body: 'Comisión Nacional de Disciplina Judicial',
    detail:
      'Certificado de sanciones vigentes para abogados del 10 de julio de 2026: no registra sanciones vigentes. Tarjeta profesional No. 338009.',
  },
  {
    body: 'Policía Nacional de Colombia',
    detail:
      'Consulta de medidas correctivas del 10 de julio de 2026: no tiene medidas correctivas pendientes por cumplir, conforme a la Ley 1801 de 2016.',
  },
]
