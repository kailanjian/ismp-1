export const appFormStep = [
  {
    num: 1,
    class: 'personalInfo',
    icon: 'user',
    title: 'step.1.title',
    description: 'step.1.description'
  },
  {
    num: 2,
    class: 'academicInfo',
    icon: 'industry',
    title: 'step.2.title',
    description: 'step.2.description'
  },
  {
    num: 3,
    class: 'mentorshipInterest',
    icon: 'tag',
    title: 'step.3.title',
    description: 'step.3.description'
  }
];

export const getGenderOptions = t => [
  { key: '', text: '', value: '' },
  { key: 'm', text: t('fields.options.gender.male'), value: 'M' },
  { key: 'f', text: t('fields.options.gender.female'), value: 'F' }
];

export const getGradeLevelOptions = t => [
  {
    key: 'hs',
    text: t('fields.options.grade.high_school'),
    value: 'high_school'
  },
  {
    key: 'under',
    text: t('fields.options.grade.undergrad'),
    value: 'undergraduate'
  },
  { key: 'ex', text: t('fields.options.grade.exchange'), value: 'exchange' },
  { key: 't', text: t('fields.options.grade.transfer'), value: 'transfer' },
  { key: 'g', text: t('fields.options.grade.graduate'), value: 'graduate' }
];

export const getReferralOptions = t => [
  { key: 'f', text: t('fields.options.referral.friend'), value: 'friend' },
  { key: 't', text: t('fields.options.referral.teacher'), value: 'teacher' },
  { key: 'p', text: t('fields.options.referral.parent'), value: 'parent' },
  { key: 's', text: t('fields.options.referral.school'), value: 'school' },
  {
    key: 'sm',
    text: t('fields.options.referral.social'),
    value: 'socialMedia'
  },
  { key: 'i', text: t('fields.options.referral.internet'), value: 'internet' },
  { key: 'o', text: t('fields.options.referral.other'), value: 'other' }
];

export const getTopicsOptions = t => [
  { key: 'e', text: t('fields.options.topics.english'), value: 'english' },
  { key: 'fr', text: t('fields.options.topics.friends'), value: 'friends' },
  {
    key: 'c',
    text: t('fields.options.topics.connecting'),
    value: 'connecting'
  },
  { key: 'j', text: t('fields.options.topics.job'), value: 'job' },
  { key: 'a', text: t('fields.options.topics.culture'), value: 'culture' },
  {
    key: 't',
    text: t('fields.options.topics.travelling'),
    value: 'travelling'
  },
  { key: 'o', text: t('fields.options.topics.other'), value: 'other' }
];

export const getDestinationSchoolOptions = t => {
  let school_names = [
    "Berkeley City College",
    "California State University, East Bay",
    "Diablo Valley College",
    "George Mason University",
    "George Washington University",
    "Orange Coast College",
    "Rutgers University",
    "University of California, Berkeley",
    "University of California, Davis",
    "University of California, Irvine",
    "University of California, Los Angeles",
    "University of California, San Diego",
    "University of Maryland",
    "University of North Carolina, Chapel Hill",
    "University of Minnesota, Minneapolis",
    "University of Washington",
    "University of Southern California",
    "University of Texas, Austin",
    "Sacramento State University",
    "National University",
    "Santa Clara University",
    "De Anza College",
    "Foothill College",
    "Chabot College",
    "Ohlone College",
    "College of San Mateo",
    "Laney College",
    "College of Alameda"
  ].sort();

  let school_options = school_names.map((school_name) => ({
    key: school_name,
    text: school_name,
    value: school_name
  }));

  school_options.push({
    key: 'other',
    text: t('fields.other_destination_school.other_option'),
    value: 'other'
  })

  return school_options;
}
