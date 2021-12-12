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
  topic: string;
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
};

const Selector: React.FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();

  // 選択対象のトピックのリスト
  const topics: string[] = [
    'Python',
    'JavaScript',
    'TypeScript',
    'PHP',
    'Java',
    'Docker',
    'AWS',
    'Go',
    'Rust',
    'Flutter',
  ];

  return (
    <Box p={2} textAlign="right">
      <FormControl className={classes.formControl}>
        <InputLabel id="topic-select-helper-label">トピック</InputLabel>
        <Select
          labelId="topic-select-helper-label"
          id="topic-select-helper"
          value={props.topic}
          onChange={props.handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {topics.map((topic: string) => (
            <MenuItem value={topic} key={topic}>
              {topic}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>トピックを選択</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default Selector;
