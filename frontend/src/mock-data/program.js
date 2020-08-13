const getProgramImage = imageName => {
  return 'https://ismp-us-east-1.s3.amazonaws.com/program/' + imageName;
};

// With Translation
export const programInstructions = [
  {
    icon: 'wordpress forms',
    titleTKey: 'apply.title',
    blurbTKey: 'apply.blurb'
  },
  {
    icon: 'group',
    titleTKey: 'orientation.title',
    blurbTKey: 'orientation.blurb'
  },
  {
    icon: 'calendar alternate outline',
    titleTKey: '6weeks.title',
    blurbTKey: '6weeks.blurb'

  },
  {
    icon: 'thumbs up outline',
    titleTKey: 'decide.title',
    blurbTKey: 'decide.blurb'
  }
];

// With Translation
export const programDetails = [
  {
    headerImage: getProgramImage('program_america.jpg'),
    titleTKey: 'america.title',
    blurbTKey: 'america.blurb'
  },
  {
    headerImage: getProgramImage('program_english.jpg'),
    titleTKey: 'english.title',
    blurbTKey: 'english.blurb'
  },
  {
    headerImage: getProgramImage('program_grad.jpg'),
    titleTKey: 'grad.title',
    blurbTKey: 'grad.blurb'
  },
  {
    headerImage: getProgramImage('program_apply.jpg'),
    titleTKey: 'applying.title',
    blurbTKey: 'applying.blurb'
  }
];
