import TransitionPage from "@/components/TransitionPage";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

import {
  TableBoxedLayoutContainer,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";

import {fakeDataReferrals} from "@/fakeData";

import Title from "@/components/Title";

import DataNotFound from "@/components/DataNotFound";

const MyReferralsList = () => {
  return (
    <TransitionPage>
      <Title>My Referrals</Title>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Level one</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Level Two</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Level Three</TableBoxedLayoutTH>
          </TableBoxedLayoutTR>
        </TableBoxedLayoutTHead>

        <TableBoxedLayoutTBody>
          {fakeDataReferrals.length > 0 ? (
            <DataNotFound colSpan={3} />
          ) : (
            fakeDataReferrals.map((item) => (
              <TableBoxedLayoutTR key={item.id}>
                <TableBoxedLayoutTD>{item.level1}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.level2}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.level3}</TableBoxedLayoutTD>
              </TableBoxedLayoutTR>
            ))
          )}
        </TableBoxedLayoutTBody>
      </TableBoxedLayoutContainer>

      <div className='mt-2rem flex items-center justify-between'>
        <PageLimit />
        <Pagination totalPages={1} />
      </div>
    </TransitionPage>
  );
};

export default MyReferralsList;
