import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Grid,
  ListItem,
  ListItemAvatar,
  Typography,
  TextField,
  Button,
  colors,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, IconAlternate, TypedText } from 'components/molecules';
import Pricing from './Pricing';
import { CardProduct } from 'components/organisms';

const FKTextField = withStyles({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: `1px solid ${colors.blueGrey[50]}`,
    },
    '& .MuiInput-underline:after': {
      borderBottom: `1px solid ${colors.indigo[200]}`,
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: `1px solid ${colors.indigo[200]}`,
    },
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  typed: {
    fontWeight: 'bold',
  },
  listItemAvatar: {
    minWidth: 28,
  },
  formCover: {
    objectFit: 'cover',
    borderBottomLeftRadius: '40%',
  },
  cardProduct: {
    [theme.breakpoints.up('md')]: {
      maxWidth: 400,
    },
  },
}));

const PricingSection = ({
  data,
  pricings,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container spacing={4}>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Pricing data={pricings} />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="flex-end"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Grid item>
            <SectionHeader
              //   label="make things done"
              title={
                <>
                  <span>
                    Gain access to our dashboard and discover personalized
                    <br />
                  </span>
                  <TypedText
                    component="span"
                    variant="h4"
                    color="secondary"
                    className={classes.typed}
                    typedProps={{
                      strings: [
                        'social media posts.',
                        'captions.',
                        'hashtags.',
                        'resources.',
                      ],
                      typeSpeed: 50,
                      loop: true,
                    }}
                  />
                </>
              }
              subtitle="Get more clients to the closing table with Copy and Post!  With creative, engaging and effective marketing to achieve your highest goals. Over 30 different categories including:"
              align="left"
              disableGutter
            />
            <Grid container spacing={0}>
              {data.map((item: any, index: number) => (
                <Grid item xs={6} key={index} data-aos="fade-up">
                  <ListItem disableGutters>
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <IconAlternate
                        size="extraSmall"
                        shape="circle"
                        fontIconClass="fas fa-check"
                        color={colors.green}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="primary" noWrap>
                      {item}
                    </Typography>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PricingSection;
