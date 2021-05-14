import { Ranking, RankingList } from 'components/ranking';
import { database } from '.';

export function getCount(userName: string, callback?: (count: number) => void) {
  return database
    .ref('ranking/' + userName + '/count')
    .on('value', (snapshot) => {
      callback && callback(snapshot.val() || 0);
    });
}
export function getCountOnce(userName: string): Promise<number> {
  return database
    .ref('ranking/' + userName + '/count')
    .once('value')
    .then((s) => s.val() || 0);
}

export function userInit(userName: string) {
  return database
    .ref('ranking/' + userName)
    .update({ count: 0, lastDate: getTimeStamp(), userName });
}

export function getRanking(callback: (ranking: RankingList) => void) {
  database.ref('ranking').on('value', (snapshot) => {
    const data = snapshot.val();

    callback(Object.keys(data).map((key) => data[key]));
  });
}
export function getRankingOnce(): Promise<RankingList> {
  return database
    .ref('ranking')
    .once('value')
    .then((snapshot) => snapshot.val());
}

export function setTell(userName: string, count: number) {
  const now = getTimeStamp();
  const data = {
    date: now,
  };
  return database
    .ref('users/' + userName + '/log')
    .push(data)
    .then(() =>
      database
        .ref('ranking/' + userName)
        .update({ count: count + 1, lastDate: now, userName })
    );
}

const getTimeStamp = (type?: 'full' | 'date' | 'time') => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  switch (type) {
    case 'full':
      return `${zero(month)}/${zero(date)} ${zero(hours)}:${zero(minutes)}`;
    case 'date':
      return `${zero(month)}/${zero(date)}`;
    case 'time':
      return `${zero(hours)}:${zero(minutes)}`;
    default:
      return `${zero(month)}/${zero(date)} ${zero(hours)}:${zero(minutes)}`;
  }
};
const createDate = () => { };

function zero(num: number) {
  return ('00' + num).slice(-2);
}

export function setDate(date: string) {
  database.ref('/').update({ date });
}

export function getDate(): Promise<string> {
  return database.ref('date').once('value').then((s) => {
    return s.val() || '';
  });
}
export async function isUpdate() {
  const dbDate = await getDate();
  const nowDate = getTimeStamp('date');
  return dbDate !== nowDate;
}

export async function updateDate(): Promise<void> {
  if (!await isUpdate()) {
    return;
  }
  return updateRanking();
}

function updateRanking(): Promise<void> {
  setDate(getTimeStamp('date'));
  return getRankingOnce().then((ranking) => {
    Object.keys(ranking).forEach((key: any) => {
      ranking[key] = {
        ...ranking[key],
        yesterday: ranking[key].count,
      };
    });
    database.ref('/').update({ ranking });
  });
}

export type Log = { [key: string]: { date: string } };
export function getLog(userName: string, callback?: (log: Log) => void) {
  database.ref("/users/" + userName + "/log").orderByChild("date").on('value', (snapshot) => {
    callback && callback(snapshot.val() || {});
  })
}