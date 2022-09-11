import AdvertisementBanners from "../components/AdvertisementBanners/AdvertisementBanners";
import Filter from "../components/Filter/Filter";
import Products from "../components/Products/Products";
import SortAndSearch from "../components/SortAndSearch/SortAndSearch";

const HomePage = () => {
   return (
      <section className="grid grid-cols-12 gap-4 py-8">
         <section className="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col-reverse md:flex-col gap-y-4">
            <Filter />
            <AdvertisementBanners />
         </section>
         <section className="col-span-12 md:col-span-8 lg:col-span-9">
            <SortAndSearch />
            <Products />
         </section>
      </section>
   );
};

export default HomePage;
