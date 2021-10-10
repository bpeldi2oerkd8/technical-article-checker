import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 180,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

type Props = {
  lang: string;
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
};

const Selector: React.FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();

  // 選択対象のプログラミング言語のリスト
  const languages: string[] = ['Python', 'JavaScript'];

  return (
    <Box p={2} textAlign="right">
      <FormControl className={classes.formControl}>
        <InputLabel id="language-select-helper-label">
          プログラミング言語
        </InputLabel>
        <Select
          labelId="language-select-helper-label"
          id="language-select-helper"
          value={props.lang}
          onChange={props.handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {languages.map((language: string) => (
            <MenuItem value={language} key={language}>
              {language}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>言語を選択</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default Selector;
