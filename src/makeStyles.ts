import {useMemo} from 'react';

import {Styles, UseStylesHook, VariousStyles} from './';
import processStyles from './processStyles';
import useTheme from './useTheme';

function makeStyles<
  T extends object, // theme
  P extends object = object, // props
  SK extends string = string // styles
>(makeStyles: Styles<T, P, SK>): UseStylesHook<P, Record<SK, VariousStyles>> {
  return function useStyles(props: P) {
    const theme = useTheme<T>();

    return useMemo(() => {
      return processStyles(theme, props, makeStyles);
    }, [theme, props, makeStyles]);
  };
}

export default makeStyles;
