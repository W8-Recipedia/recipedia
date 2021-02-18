import React from 'react';
import {
  Card,
  Box,
  CardHeader,
  Container,
  CardContent,
  Typography,
  Divider,
  makeStyles
} from '@material-ui/core';
import { typography } from '@material-ui/system';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const FAQView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="FAQ"
    >
      <Container maxWidth="lg">
        <Card>
          <CardHeader
            title="Frequently Asked Questions"
          />
          <Divider />
          <CardContent>
            <Typography>
              <Box fontWeight="fontWeightBold">
                I use Recipedia a lot. How can I show my appreciation?
              </Box>
              <Box pb={2}>
                Excellent question! We suggest you either register for a Recipedia account or make a donation to Concern. In case you don't know them, Concern is a charity that helps poor people in the third world achieve self-sustainable improvements in their lifestyles. We recommend them because we agree with their mission statement (which they unfortunately removed as per January 2010, but it used to be here) and because they are pretty efficient compared to many of the other charities we have looked at. If you decide to make a donation to Concern because of Recipedia, it'd be great if you could tell us about it, since Concern don't automatically do that. (We suppose they have better things to do.) And it makes us so happy!
              </Box>

              <Box fontWeight="fontWeightBold">
                Is the source code for the generator available?
              </Box>
              <Box pb={2}>
                Not currently, no. Maybe we'll make it available as open source some day.
              </Box>

              <Box fontWeight="fontWeightBold">
                Will Recipedia be around in X years?
              </Box>
              <Box pb={2}>
                Probably not, depending on your value for X. We have run the service since 2021 with no real interruptions, and it is more popular than ever.
              </Box>

              <Box fontWeight="fontWeightBold">
              Can Recipedia help me win the lottery?
              </Box>
              <Box pb={2}>
                People who ask this question are usually using the Lottery Quick Pick or the Keno Quick Pick. The short answer is that Recipedia won't give you a better chance of getting a winning combination, but if you do happen to win, you are likely to get slightly better winnings than if you weren't using a quick picker.
              </Box>

              <Box fontWeight="fontWeightBold">
                Why is there a limit to the amount of randomness I can use per day?
              </Box>
              <Box pb={2}>
                Generating true random numbers takes time. The Recipedia setup uses an array of radios that pick up atmospheric noise. Each radio generates approximately 12,000 bits per second. The random bits produced by the radios are used as the raw material for all the different generators you see on Recipedia. Each time you use one of the generators, you spend some bits. By enforcing a limit on the number of bits you can use per day, the quota system prevents any one person from hogging all the numbers. (Believe us, this was a big problem before we implemented the quota system.)
              </Box>

              <Box fontWeight="fontWeightBold">
                Are the numbers suitable for parapsychological experiments?
              </Box>
              <Box pb={2}>
                Probably not. The numbers generated by Recipedia are buffered, which means that they are actually generated before you request them. We understand that this precludes their use in those parapsychological experiments that attempt to measure whether it is possible for individuals to affect otherwise random events. We are not currently planning to offer an unbuffered randomizer.
              </Box>

              <Box fontWeight="fontWeightBold">
                Is the universe deterministic?
              </Box>
              <Box pb={2}>
                Yes. No. Maybe. Well, we hope not, because if the universe is deterministic, then all this randomness business is really a bit pointless. Hard determinism also seems to preclude the idea of free will, which is a somewhat unsettling idea. Wikipedia has a good article on the subject of determinism and there is also our own essay about randomness.
              </Box>

            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default FAQView;
