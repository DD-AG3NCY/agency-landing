import SEO from '@/components/SEO';
import React, { useEffect } from 'react';

type IAgencyRedirectProps = {};

const AgencyRedirect = (props: any) => {
  const {} = props;

  useEffect(() => {
    window.location.href =
      'https://airtable.com/appNP5rk00cAmDLUm/shrmaoyXneVOkRvw3';
  }, []);

  return (
    <React.Fragment>
      <SEO
        title="AGΞNCY ΞXPERTS"
        description="We are a collective web3 service provider curated out of Developer DAO members."
        image="/RRSS_build-with-us.png"
        url="https://agency.developerdao.com"
        twitterHandle="@ddweb3experts"
      />
    </React.Fragment>
  );
};

AgencyRedirect.getLayout = function getLayout(page: any) {
  return <>{page}</>;
};

export default AgencyRedirect;
