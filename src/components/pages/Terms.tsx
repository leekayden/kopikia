import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const TermsOfUse: React.FC = () => {
  return (
    <>
      <Typography sx={{ fontSize: "9px" }} color="text.primary">
        LAST UPDATED: 1 May 2023
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#000000" }} component="p">
        <strong>1. ACCEPTANCE OF TERMS</strong>
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#000000" }} component="p">
        1.1 We are KopiKia, and we own and operate this website (“Site”) at{" "}
        <Link
          href={`https://${window.location.hostname}`}
          target="_blank"
        >
          {window.location.hostname}
        </Link>
        .
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#000000" }} component="p">
        1.2 Your use of this Site is subject to these Terms of Use. By using the
        Site, you are deemed to have accepted and agree to be bound by these
        Terms of Use. We may make changes to these Terms of Use from time to
        time. We may notify you of such changes by any reasonable means,
        including by posting the revised version of these Terms of Use on the
        Site. Your use of the Site following changes to these Terms of Use will
        constitute your acceptance of those changes.
      </Typography>
      <Typography variant="h6" gutterBottom>
        2. ABILITY TO ACCEPT TERMS OF USE
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#000000" }} component="p">
        2.1 You affirm that you are either more than 18 years of age, or possess
        legal parental or guardian consent, and are fully able and competent to
        enter into the terms, conditions, obligations, affirmations,
        representations, and warranties set forth in these Terms of Use, and to
        abide by and comply with these Terms of Use.
      </Typography>
      <Typography variant="h6" gutterBottom>
        3. SITE ACCESS
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#000000" }} component="p">
        3.1 You are responsible for all access to the Site using your internet
        connection, even if the access is by another person.
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#000000" }} component="p">
        3.2 We will use reasonable efforts to ensure that the Site is available
        at all times. However, we cannot guarantee that the Site or any
        individual function or feature of the Site will always be available
        and/or error free. The Site may be unavailable during periods when we
        are implementing upgrades or carrying our essential maintenance on the
        Site.
      </Typography>
      <Typography variant="h6" gutterBottom>
        4. ACCESS TO SITE OUTSIDE OF SINGAPORE
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#000000" }} component="p">
        4.1 We make no promise that the materials on the Site are appropriate or
        available for use in locations outside Singapore. Accessing the Site
        from territories where its contents are illegal or unlawful is
        prohibited. If you choose to access the Site from locations outside
        Singapore, you do so at your own risk and are responsible for compliance
        with local laws.
      </Typography>
      <Typography variant="h6" gutterBottom>
        5. USER CONTENT
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#000000" }} component="p">
        5.1 You are solely responsible for any content that you post, upload,
        publish or display on or through the Site, including any messages,
        comments, reviews, photos, videos, or other materials ("User Content").
        By posting, uploading, publishing, or displaying User Content on or
        through the Site, you grant ShopFront a perpetual, irrevocable,
        transferable, worldwide, royalty-free, and non-exclusive license to
        reproduce, adapt, modify, translate, publish, publicly perform, publicly
        display, distribute, create derivative works from, and otherwise use
        such User Content in any form, format, or media now known or hereafter
        developed, without any compensation or attribution to you.
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#000000" }} component="p">
        5.2 You represent and warrant that you have all the rights, power, and
        authority necessary to grant the above license, and that your User
        Content does not violate the rights of any third party or any applicable
        law, regulation or ordinance. You agree to indemnify and hold harmless
        ShopFront and its affiliates, officers, directors, employees, agents,
        and licensors from any claims, suits, proceedings, disputes, demands,
        liabilities, damages, losses, costs, and expenses, including reasonable
        attorneys' fees, arising out of or in any way related to your User
        Content or your use of the Site.
      </Typography>
      <Typography variant="h6" gutterBottom>
        6. INTELLECTUAL PROPERTY RIGHTS
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#000000" }} component="p">
        6.1 The content on the Site, including without limitation, the text,
        graphics, photos, software, and other materials, and the trademarks,
        service marks, and logos contained therein, are owned by or licensed to
        ShopFront and are subject to copyright and other intellectual property
        rights under Singapore and foreign laws and international conventions.
        Except as expressly provided in these Terms of Use, ShopFront and its
        licensors do not grant any express or implied rights to use the Site or
        the content and materials contained therein.
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#000000" }} component="p">
        6.2 You may not use, reproduce, modify, distribute, transmit, republish,
        display, sell, or exploit any of the content and materials on the Site
        without the prior written consent of ShopFront or the respective owners
        of such content and materials.
      </Typography>
    </>
  );
};

export default TermsOfUse;
