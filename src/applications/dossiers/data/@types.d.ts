export type Dossier = {
  fullName: string;
  crime: string;
  reward: string;
  remarks: string;
  description: {
    alias: string;
    birthday: Date;
    hair: 'gray' | 'blonde' | 'brunette' | 'red' | 'bald' | string;
    height: number | string;
    weight: number | string;
    sex: 'male' | 'female';
    nationality: string;
    placeOfBirth: string;
    eyes: 'brown' | 'blue' | 'green' | 'heterochromia';
    race: 'white' | 'black' | 'latina' | 'mexico';
    NCIC: string;
  };
  pics: string[];
};
