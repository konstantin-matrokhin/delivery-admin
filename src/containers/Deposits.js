/* eslint-disable no-script-url */

import React from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Title from './Title'

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary">
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#">
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
