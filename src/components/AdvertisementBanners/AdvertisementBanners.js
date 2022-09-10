const AdvertisementBanners = () => {
   return (
      <section className="flex flex-col justify-center items-center rounded-lg">
         <div className="w-full h-0 pb-[75%] relative">
            <div className="flex absolute inset-0 rounded-lg overflow-hidden z-10">
               <img src="../assets/images/promotional photos/nike_shoe_ad.jpg" alt="" className="w-full object-cover object-center" />
            </div>
         </div>
      </section>
   );
};

export default AdvertisementBanners;
