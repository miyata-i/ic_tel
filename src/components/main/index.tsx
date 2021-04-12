import { setTell } from 'lib/firebase/function';
import { getUserName } from 'lib/localStorage';
import React from 'react';
import { style } from './style';
import Button from '@material-ui/core/Button';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ClockComponent from './clock';
import CircleSVG_Component, { SetSVG } from './circleSVG';
export type Props = {
  count: number,
};
const Component: React.FC<Props> = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClick = (message: string) => {
    setMessage(message);
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const tryTell = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setTell(getUserName(), props.count)
      .then(() => {
        //alert('お疲れ様です！登録しました。残りは' + (200 - props.count - 1) + '件です。');
        handleClick('お疲れ様です。登録しました。残り' + (200 - props.count - 1) + '件です。');
      })
      .catch(console.log)
      .finally(() => {
        setLoading(false);
      });
  };

  const snack = (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      action={
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );

  const info = (
    <div>
      <CircleSVG_Component
        {...SetSVG(Math.round(props.count / 200 * 100 * 100) / 100)}
      />
      <div className="count_num">
        <span>
          <strong>{props.count}件</strong>
        </span>
        <span>/200件</span>
        <div>{Math.round(props.count / 200 * 100 * 100) / 100}%</div>
      </div>
    </div>
  );

  return (
    <div {...props}>
      <div className="count">
        <h1>対応件数</h1>
        {info}
      </div>
      <div>
        <Button
          variant="contained"
          size="large"
          onClick={tryTell}
          endIcon={<PhoneInTalkIcon />}
        >
          電話取りました！
        </Button>
        {snack}
      </div>
      <ClockComponent />
    </div>
  );
};

export default style(Component);
