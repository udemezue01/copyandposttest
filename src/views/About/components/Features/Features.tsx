import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  Typography,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles((theme) => {
  return {
      grid: {
        maxWidth: '100%',
        background: theme.palette.copyandpost.grey,
      },
      textPrimary: {
        color: '#2d3748',
      },
      checkBox: {
        background: 'transparent',
        borderRadius: 0,
      },
      title: {
        fontWeight: 'bold',
      },
    }
  });

const Features = ({ data, className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container className={classes.grid}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Image
            src="https://assets.maccarianagency.com/the-front/photos/careers/team.png"
            srcSet="https://assets.maccarianagency.com/the-front/photos/careers/team@2x.png 2x"
          />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Section>
            <>
            <SectionHeader
              title="The concept isn't new."
              subtitle="There are companies out there providing similar services, but copyandpost.com is different."
              align="left"
              data-aos="fade-up"
              subtitleProps={{
                className: classes.textPrimary,
              }}
            />
            <List>
              {data.map((item: any, index: number) => (
                <ListItem disableGutters key={index} data-aos="fade-up">
                  <ListItemAvatar>
                    <Avatar
                      src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                      className={classes.checkBox}
                    />
                  </ListItemAvatar>
                  <Typography
                    variant="h6"
                    color="textPrimary"
                  >
                    {item}
                  </Typography>
                </ListItem>
              ))}
            </List>
            <br />
            <Typography
                variant="h6"
                color="textPrimary"
              >
                  Lastly, and most importantly, we're different because <b>we give back.</b>
              </Typography>
            <br />
            <Typography
              variant="h4"
              color="textPrimary"
            >
                  Here's to you!
            </Typography>
            
            </>
          </Section>
        </Grid>
      </Grid>
    </div>
  );
};

export default Features;
