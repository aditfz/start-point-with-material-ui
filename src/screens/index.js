import React from 'react';
import { getTranslate } from '../localization/index';
import { Typography } from '@material-ui/core';
const translate = getTranslate();

export default function index() {
  return <Typography variant='body1'>{translate.name} </Typography>;
}
