import { dossiersData } from '@dossiers/data/dossiers.data';

export default class Index {
  static getDossier(NCIC: string) {
    return dossiersData.find((dossier) => dossier.description.NCIC === NCIC);
  }

  static getDossiers() {
    return dossiersData;
  }
}
