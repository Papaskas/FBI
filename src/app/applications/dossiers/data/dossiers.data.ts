import type { Dossier } from './@types';

export const dossiersData: Dossier[] = [
  {
    fullName: 'Glukhikh Pavel Dmitrievich',
    crime: 'unauthorized access to the Pentagon',
    reward: 'empty',
    remarks: 'empty',
    description: {
      alias: 'Papaska',
      birthday: new Date('2001-10-19'),
      hair: 'brunette',
      height: 175,
      weight: 70,
      sex: 'male',
      nationality: 'Russian',
      placeOfBirth: 'Nizhny Novgorod',
      eyes: 'brown',
      race: 'white',
      NCIC: 'W76312W4A9',
    },
    pics: ['assets/dossier/papaska.jpg'],
  },
];
