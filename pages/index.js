import Banner from "../components/Banner";
import BusinessTravelPost from "../components/BusinessTravelPost";
import LatestPost from "../components/LatestPost";
import MostPopularPost from "../components/MostPopularPost";
import DefaultLayout from "../layouts/defaultLayout/DefaultLayout";

export default function Home() {

  const title = "Blog Website";

  return (
    <>
      <DefaultLayout title={title}>
        <Banner/>
        <LatestPost/>
        <MostPopularPost/>
        <BusinessTravelPost/>
      </DefaultLayout>
    </>
  )
}
