import PageContainer from 'layout/PageContainer';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import Styled from 'styled-components';
import theme from 'styles/theme';

const StyledBodyText = Styled.p`
    font-family: ${theme.fonts.Poppins};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
`;

const Privacy = () => {
  return (
    <PageContainer>
      <Grid doubling stackable>
        <Grid.Row columns={1}>
          <Grid.Column>
            <h1>Privacy Policy</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <StyledBodyText>
              {' '}
              Last updated June 1, 2020
              <h2>INTRODUCTION</h2>
              [BUSINESS ENTITY NAME] (“we” or “us” or “our”) respects the
              privacy of our users (“user” or “you”). This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website [name of website.com] [and
              our mobile application], including any other media form, media
              channel, mobile website, or mobile application related or
              connected thereto (collectively, the “Site”). Please read this
              privacy policy carefully. If you do not agree with the terms of
              this privacy policy, please do not access the site. We reserve the
              right to make changes to this Privacy Policy at any time and for
              any reason. We will alert you about any changes by updating the
              “Last Updated” date of this Privacy Policy. Any changes or
              modifications will be effective immediately upon posting the
              updated Privacy Policy on the Site, and you waive the right to
              receive specific notice of each such change or modification. You
              are encouraged to periodically review this Privacy Policy to stay
              informed of updates. You will be deemed to have been made aware
              of, will be subject to, and will be deemed to have accepted the
              changes in any revised Privacy Policy by your continued use of the
              Site after the date such revised Privacy Policy is posted. This
              Privacy Policy was generated by Termly’s Privacy Policy Generator.
            </StyledBodyText>
            <StyledBodyText>
              {' '}
              <h2>INTRODUCTION</h2>
              [BUSINESS ENTITY NAME] (“we” or “us” or “our”) respects the
              privacy of our users (“user” or “you”). This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website [name of website.com] [and
              our mobile application], including any other media form, media
              channel, mobile website, or mobile application related or
              connected thereto (collectively, the “Site”). Please read this
              privacy policy carefully. If you do not agree with the terms of
              this privacy policy, please do not access the site. We reserve the
              right to make changes to this Privacy Policy at any time and for
              any reason. We will alert you about any changes by updating the
              “Last Updated” date of this Privacy Policy. Any changes or
              modifications will be effective immediately upon posting the
              updated Privacy Policy on the Site, and you waive the right to
              receive specific notice of each such change or modification. You
              are encouraged to periodically review this Privacy Policy to stay
              informed of updates. You will be deemed to have been made aware
              of, will be subject to, and will be deemed to have accepted the
              changes in any revised Privacy Policy by your continued use of the
              Site after the date such revised Privacy Policy is posted. This
              Privacy Policy was generated by Termly’s Privacy Policy Generator.
            </StyledBodyText>
            <StyledBodyText>
              {' '}
              <h2>INTRODUCTION</h2>
              [BUSINESS ENTITY NAME] (“we” or “us” or “our”) respects the
              privacy of our users (“user” or “you”). This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website [name of website.com] [and
              our mobile application], including any other media form, media
              channel, mobile website, or mobile application related or
              connected thereto (collectively, the “Site”). Please read this
              privacy policy carefully. If you do not agree with the terms of
              this privacy policy, please do not access the site. We reserve the
              right to make changes to this Privacy Policy at any time and for
              any reason. We will alert you about any changes by updating the
              “Last Updated” date of this Privacy Policy. Any changes or
              modifications will be effective immediately upon posting the
              updated Privacy Policy on the Site, and you waive the right to
              receive specific notice of each such change or modification. You
              are encouraged to periodically review this Privacy Policy to stay
              informed of updates. You will be deemed to have been made aware
              of, will be subject to, and will be deemed to have accepted the
              changes in any revised Privacy Policy by your continued use of the
              Site after the date such revised Privacy Policy is posted. This
              Privacy Policy was generated by Termly’s Privacy Policy Generator.
            </StyledBodyText>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </PageContainer>
  );
};

export default Privacy;
