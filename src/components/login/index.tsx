import React from 'react';
import { Style } from './style';
import { stopPropagation } from 'lib';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

export type Props = {
  userName?: string,
  submit?: (nextUserName?: string) => void,
  cancel?: () => void,
};

const Component: React.FC<Props> = (props) => {
  const [userName, setUserName] = React.useState(props.userName || '');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }

  function handleSubmit(event: React.FocusEvent<HTMLFormElement>) {
    event.preventDefault();
    props.submit(userName);
  }

  function handleClick() {
    props.submit(userName);
  }

  function cancel() {
    props.cancel();
  }

  return (
    <Style onClick={cancel}>
      <Paper elevation={3} onClick={stopPropagation}>
        <div>ログイン</div>
        <div>
          <form onSubmit={handleSubmit}>
            <TextField
              className="input"
              id="standard-textarea"
              label="ニックネーム"
              placeholder="必須です。"
              onChange={handleChange}
              autoFocus
              color="primary"
            />
          </form>
        </div>
        <div>
          <Button onClick={handleClick} variant="outlined" color="primary">
            cancel
          </Button>

          <Button onClick={handleClick} variant="outlined" color="secondary">
            login
          </Button>
        </div>
      </Paper>
    </Style>
  );
};

export default Component;
