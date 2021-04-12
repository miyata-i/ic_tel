import { Ranking, RankingList } from 'components/ranking';
import { database } from '.';

export function getCount(userName: string, callback: (count: number) => void) {
  database.ref('ranking/' + userName + '/count').on('value', (snapshot) => {
    callback(snapshot.val() || 0);
  });
}
export function userInit(userName: string) {
  return database
    .ref('ranking/' + userName)
    .update({ count: 0, lastDate: getTimeStamp(), userName });
}

export function getRanking(callback: (ranking: RankingList) => void) {
  database.ref('ranking').on('value', (snapshot) => {
    console.log(snapshot.val());
    const data = snapshot.val();

    callback(Object.keys(data).map((key) => data[key]));
  });
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

const getTimeStamp = () => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return `${zero(month)}/${zero(date)} ${zero(hours)}:${zero(minutes)}`;
};

function zero(num: number) {
  return ('00' + num).slice(-2);
}
