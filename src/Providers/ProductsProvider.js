import { createContext, useContext, useReducer } from "react";
import productsReducer from "./productsReducer";

const ProductsContext = createContext();
const ProductsContextDispatcher = createContext();

export const initialState = [
   {
      id: 1,
      name: "Air Zoom Pegasus",
      description: [
         { support: "گارانتی مادام العمر" },
         { support: "ارسال رایگان" },
         { support: "اورجینال" },
      ],
      body: "دویدن مراسم روزانه شماست و هر قدم شما را به هدف شخصی خود نزدیکتر می کند. اجازه دهید Nike Air Zoom Pegasus 39 با طراحی بصری خود به شما کمک کند تا به ارتفاعات جدیدی صعود کنید، چه در حال تمرین یا دویدن هستید. سبک‌تر از Pegasus 38 و ایده‌آل برای پوشیدن در هر فصلی، دارای حس حمایتی است که به حفظ پاهای شما کمک می‌کند، در حالی که بالشتک زیر پا و واحدهای Zoom Air دوبل (1 بیشتر از Peg 38) به شما جذابیت بیشتری می‌دهد. قدم شما اسب کار مورد اعتماد شما با بال بازگشته است. زمان پرواز",
      price: 430000,
      offPrice: 430000,
      discount: 0,
      category: "wallking",
      faCategory: "پیاده روی",
      image: {
         collection: [
            "assets/images/walking/Nike Air Zoom Pegasus/1.jpg",
            "assets/images/walking/Nike Air Zoom Pegasus/2.jpg",
            "assets/images/walking/Nike Air Zoom Pegasus/3.jpg",
            "assets/images/walking/Nike Air Zoom Pegasus/4.jpg",
            "assets/images/walking/Nike Air Zoom Pegasus/5.jpg",
            "assets/images/walking/Nike Air Zoom Pegasus/6.jpg",
         ],
         default: "assets/images/walking/Nike Air Zoom Pegasus/1.jpg",
      },
   },
   {
      id: 2,
      name: "Phantom Run Flyknit 2",
      description: [{ support: "گارانتی مادام العمر" }, { support: "اورجینال" }],
      body: "در Nike React Phantom Run Flyknit 2 با احساس آزادی بدوید و در عین حال تزیینات برجسته را به ظاهر خود بیاورید. طراحی بدون توری و فناوری Flyknit راحتی مطمئنی را ارائه می دهد. فوم Nike React برای کمک به حفظ بالشتک و راحتی قدم شما در هر قدم کمک می کند",
      price: 410000,
      offPrice: 398000,
      discount: 8,
      category: "wallking",
      faCategory: "پیاده روی",
      image: {
         collection: [
            "assets/images/walking/Nike React Phantom Run Flyknit 2/1.jpg",
            "assets/images/walking/Nike React Phantom Run Flyknit 2/2.jpg",
            "assets/images/walking/Nike React Phantom Run Flyknit 2/3.jpg",
            "assets/images/walking/Nike React Phantom Run Flyknit 2/4.jpg",
            "assets/images/walking/Nike React Phantom Run Flyknit 2/5.jpg",
            "assets/images/walking/Nike React Phantom Run Flyknit 2/6.jpg",
         ],
         default: "assets/images/walking/Nike React Phantom Run Flyknit 2/1.jpg",
      },
   },
   {
      id: 3,
      name: "Air Jordan XXXVI FS",
      description: [
         { support: "گارانتی مادام العمر" },
         { support: "اورجینال" },
         { support: "ارسال رایگان" },
      ],
      body: "بیانی پوشیدنی از انگیزه و انرژی که جرقه انقلاب بسکتبال را برانگیخت. طراحی آن مینیمال اما بادوام است و در نتیجه یکی از سبک ترین کفش های بازی Air Jordan تا به امروز است. مجهز به یک واحد زوم ایر استروبل تمام قد که روی یک واحد زوم ایر در جلوی پا قرار گرفته است، در صورت نیاز، بازگشت انرژی و پاسخگویی عالی را دریافت خواهید کرد. با این اطمینان وارد زمین شوید که هر کاری که انجام می دهید، کار سبکی است.",
      price: 398000,
      offPrice: 373000,
      discount: 10,
      category: "basketball",
      faCategory: "بسکتبال",
      image: {
         collection: [
            "assets/images/basketball/Air Jordan XXXVI FS/1.jpg",
            "assets/images/basketball/Air Jordan XXXVI FS/2.jpg",
            "assets/images/basketball/Air Jordan XXXVI FS/3.jpg",
            "assets/images/basketball/Air Jordan XXXVI FS/4.jpg",
            "assets/images/basketball/Air Jordan XXXVI FS/5.jpg",
            "assets/images/basketball/Air Jordan XXXVI FS/6.jpg",
         ],
         default: "assets/images/basketball/Air Jordan XXXVI FS/1.jpg",
      },
   },
   {
      id: 4,
      name: "Flex Runner 2",
      description: [
         { support: "گارانتی مادام العمر" },
         { support: "اورجینال" },
         { support: "ارسال رایگان" },
      ],
      body: "کفش دویدن آسان شد! Nike Flex Runner 2 برای بچه‌هایی ساخته شده است که در حال حرکت هستند و دوست دارند تمام روز بازی کنند - از کلاس بدنسازی تا دوی سرعت پایین. آنها بدون توری هستند، به این معنی که به سرعت بالا و پایین می روند. چه کسی برای مسابقه آماده است",
      price: 350000,
      offPrice: 328000,
      discount: 15,
      category: "running",
      faCategory: "دویدن",
      image: {
         collection: [
            "assets/images/running/Nike Flex Runner 2/1.jpg",
            "assets/images/running/Nike Flex Runner 2/2.jpg",
            "assets/images/running/Nike Flex Runner 2/3.jpg",
            "assets/images/running/Nike Flex Runner 2/4.jpg",
            "assets/images/running/Nike Flex Runner 2/5.jpg",
            "assets/images/running/Nike Flex Runner 2/6.jpg",
         ],
         default: "assets/images/running/Nike Flex Runner 2/1.jpg",
      },
   },
   {
      id: 5,
      name: "Giannis Immortality",
      description: [
         { support: "گارانتی مادام العمر" },
         { support: "اورجینال" },
         { support: "ارسال رایگان" },
      ],
      body: "آینده بسکتبال بی موقعیت است و هیچ کس مانند MVP جیانیس آنتتوکومپو این تکامل را مجسم نمی کند. Giannis Immortality یک کفش بازی برای بازیکنانی است که عاشق بازی چند بعدی جیانیس هستند و می خواهند تکه ای از سبک عجیب او را داشته باشند.",
      price: 550000,
      offPrice: 550000,
      discount: 0,
      category: "basketball",
      faCategory: "بسکتبال",
      image: {
         collection: [
            "assets/images/basketball/Giannis Immortality/1.jpg",
            "assets/images/basketball/Giannis Immortality/2.jpg",
            "assets/images/basketball/Giannis Immortality/3.jpg",
            "assets/images/basketball/Giannis Immortality/4.jpg",
            "assets/images/basketball/Giannis Immortality/5.jpg",
            "assets/images/basketball/Giannis Immortality/6.jpg",
         ],
         default: "assets/images/basketball/Giannis Immortality/1.jpg",
      },
   },
   {
      id: 6,
      name: "Kyrie Infinity",
      description: [
         { support: "گارانتی مادام العمر" },
         { support: "اورجینال" },
         { support: "ارسال رایگان" },
      ],
      body: "هرچه سرعت کایری بیشتر شود، سریعتر می تواند سرعت خود را افزایش دهد یا جهت را تغییر دهد. توانایی او در کنترل حرکت خود، مدافعان را در حدس زدن نگه می دارد و او را کنترل می کند. Kyrie Infinity یک تناسب سفارشی فشرده، پاسخ‌دهی بیشتر در قسمت جلویی پا و کشش به طرفین را فراهم می‌کند و به بازیکنان این امکان را می‌دهد تا در صورت درخواست سرعت و سرعت خود را افزایش دهند و از جدایی که ایجاد می‌کنند استفاده کنند.",
      price: 620000,
      offPrice: 609000,
      discount: 13,
      category: "basketball",
      faCategory: "بسکتبال",
      image: {
         collection: [
            "assets/images/basketball/Kyrie Infinity/1.jpg",
            "assets/images/basketball/Kyrie Infinity/2.jpg",
            "assets/images/basketball/Kyrie Infinity/3.jpg",
            "assets/images/basketball/Kyrie Infinity/4.jpg",
            "assets/images/basketball/Kyrie Infinity/5.jpg",
            "assets/images/basketball/Kyrie Infinity/6.jpg",
         ],
         default: "assets/images/basketball/Kyrie Infinity/1.jpg",
      },
   },
   {
      id: 7,
      name: "Infinity Run Flyknit 3",
      description: [
         { support: "گارانتی مادام العمر" },
         { support: "اورجینال" },
         { support: "ارسال رایگان" },
      ],
      body: "هنوز هم تست‌شده‌ترین کفش ما، ساخته شده تا به شما کمک کند تا پس از آن اهداف عالی دویدن بمانید. Nike React Infinity Run 3 با یک سواری نرم که شما را در مسیرهای طولانی و کوتاه طی می کند، نرم و پایدار است. یک رویه قابل تنفس به گونه ای ساخته شده است که احساس می شود در عین حال انعطاف پذیر است. حتی بالشتک‌های بیشتری در اطراف پاشنه و مچ پا برای ایجاد حس حمایتی اضافه کردیم. به دویدن ادامه بده، ما تو را داریم.",
      price: 570000,
      offPrice: 570000,
      discount: 13,
      category: "running",
      faCategory: "دویدن",
      image: {
         collection: [
            "assets/images/running/Nike React Infinity Run Flyknit 3/1.jpg",
            "assets/images/running/Nike React Infinity Run Flyknit 3/2.jpg",
            "assets/images/running/Nike React Infinity Run Flyknit 3/3.jpg",
            "assets/images/running/Nike React Infinity Run Flyknit 3/4.jpg",
            "assets/images/running/Nike React Infinity Run Flyknit 3/5.jpg",
            "assets/images/running/Nike React Infinity Run Flyknit 3/6.jpg",
         ],
         default: "assets/images/running/Nike React Infinity Run Flyknit 3/1.jpg",
      },
   },
   {
      id: 8,
      name: "ZoomX Invincible Run Flyknit 2",
      description: [
         { support: "گارانتی مادام العمر" },
         { support: "اورجینال" },
         { support: "ارسال رایگان" },
      ],
      body: "به دویدن های خود تا حد نهایی ادامه دهید. Nike ZoomX Invincible Run Flyknit 2 شما را با همان حس فوق نرم حفظ می کند که به شما امکان می دهد وقتی پایتان به پیاده رو برخورد می کند پتانسیل را احساس کنید. ما این کفش را با پاسخگویی سریع و بالاترین سطح پشتیبانی خود ایجاد کردیم تا احساس امنیت و رقابت را در شما حفظ کنیم. این یکی از تست‌شده‌ترین کفش‌های ما است که هنوز برای شما طراحی شده است تا در مسیر بمانید و از حاشیه دور بمانید.",
      price: 420000,
      offPrice: 408000,
      discount: 13,
      category: "wallking",
      faCategory: "پیاده روی",
      image: {
         collection: [
            "assets/images/walking/Nike ZoomX Invincible Run Flyknit 2/1.jpg",
            "assets/images/walking/Nike ZoomX Invincible Run Flyknit 2/2.jpg",
            "assets/images/walking/Nike ZoomX Invincible Run Flyknit 2/3.jpg",
            "assets/images/walking/Nike ZoomX Invincible Run Flyknit 2/4.jpg",
            "assets/images/walking/Nike ZoomX Invincible Run Flyknit 2/5.jpg",
            "assets/images/walking/Nike ZoomX Invincible Run Flyknit 2/6.jpg",
         ],
         default: "assets/images/walking/Nike ZoomX Invincible Run Flyknit 2/1.jpg",
      },
   },
   {
      id: 9,
      name: "ZoomX Invincible Run Flyknit 2",
      description: [
         { support: "گارانتی مادام العمر" },
         { support: "اورجینال" },
         { support: "ارسال رایگان" },
      ],
      body: "به دویدن های خود تا حد نهایی ادامه دهید. Nike ZoomX Invincible Run Flyknit 2 شما را با همان حس فوق نرم حفظ می کند که به شما امکان می دهد وقتی پایتان به پیاده رو برخورد می کند پتانسیل را احساس کنید. ما این کفش را با پاسخگویی سریع و بالاترین سطح پشتیبانی خود ایجاد کردیم تا احساس امنیت و رقابت را در شما حفظ کنیم. این یکی از تست‌شده‌ترین کفش‌های ما است که هنوز برای شما طراحی شده است تا در مسیر بمانید و از حاشیه دور بمانید.",
      price: 367000,
      offPrice: 367000,
      discount: 13,
      category: "running",
      faCategory: "دویدن",
      image: {
         collection: [
            "assets/images/running/Nike ZoomX Invincible Run Flyknit 2/1.jpg",
            "assets/images/running/Nike ZoomX Invincible Run Flyknit 2/2.jpg",
            "assets/images/running/Nike ZoomX Invincible Run Flyknit 2/3.jpg",
            "assets/images/running/Nike ZoomX Invincible Run Flyknit 2/4.jpg",
            "assets/images/running/Nike ZoomX Invincible Run Flyknit 2/5.jpg",
            "assets/images/running/Nike ZoomX Invincible Run Flyknit 2/6.jpg",
         ],
         default: "assets/images/running/Nike ZoomX Invincible Run Flyknit 2/1.jpg",
      },
   },
   {
      id: 10,
      name: "Air Zoom G.T. Jump",
      description: [
         { support: "گارانتی مادام العمر" },
         { support: "اورجینال" },
         { support: "ارسال رایگان" },
      ],
      body: "حساس می کنید که از گرانش سرپیچی می کنید؟ با یکی از پاسخگوترین سیستم های بالشتک نایک بسکتبال که تا به حال برای کفش های بازی طراحی شده است آشنا شوید. زوم ایر دوتایی با یک قاب پرش خارجی ساخته شده از PEBAX® که سبک، فنری و قوی است، هماهنگ کار می کند. رویه اسکلت بیرونی بافته شده به شما کمک می کند تا کاملاً به هم متصل شوید، بنابراین می توانید با اعتماد به نفس و قدرت حرکت کنید و نیرویی را که شما را تحت فشار قرار می دهد شکست دهید.",
      price: 830000,
      offPrice: 806000,
      discount: 13,
      category: "basketball",
      faCategory: "بسکتبال",
      image: {
         collection: [
            "assets/images/basketball/Nike Air Zoom G.T. Jump/1.jpg",
            "assets/images/basketball/Nike Air Zoom G.T. Jump/2.jpg",
            "assets/images/basketball/Nike Air Zoom G.T. Jump/3.jpg",
            "assets/images/basketball/Nike Air Zoom G.T. Jump/4.jpg",
            "assets/images/basketball/Nike Air Zoom G.T. Jump/5.jpg",
            "assets/images/basketball/Nike Air Zoom G.T. Jump/6.jpg",
         ],
         default: "assets/images/basketball/Nike Air Zoom G.T. Jump/1.jpg",
      },
   },
   {
      id: 11,
      name: "Cosmic Unity 2",
      description: [
         { support: "گارانتی مادام العمر" },
         { support: "اورجینال" },
         { support: "ارسال رایگان" },
      ],
      body: "عشق و لذت بازی را با Nike Cosmic Unity 2 جشن بگیرید. ساخته شده با حداقل 20٪ محتوای بازیافتی وزن، پاسخگویی و پشتیبانی بهتری را ارائه می دهد. این کفش به شما کمک می‌کند تا شما را با طراوت و ایمن نگه دارید بدون اینکه اونس اضافی آن را وارد کنید، به طوری که می‌توانید روی قفل کردن محیط به صورت دفاعی یا شروع استراحت سریع پس از یک ریباند تمرکز کنید.",
      price: 760000,
      offPrice: 748000,
      discount: 13,
      category: "basketball",
      faCategory: "بسکتبال",
      image: {
         collection: [
            "assets/images/basketball/Nike Cosmic Unity 2/1.jpg",
            "assets/images/basketball/Nike Cosmic Unity 2/2.jpg",
            "assets/images/basketball/Nike Cosmic Unity 2/3.jpg",
            "assets/images/basketball/Nike Cosmic Unity 2/4.jpg",
            "assets/images/basketball/Nike Cosmic Unity 2/5.jpg",
            "assets/images/basketball/Nike Cosmic Unity 2/6.jpg",
         ],
         default: "assets/images/basketball/Nike Cosmic Unity 2/1.jpg",
      },
   },
   {
      id: 12,
      name: "Mercurial Superfly 8",
      description: [
         { support: "گارانتی مادام العمر" },
         { support: "اورجینال" },
         { support: "ارسال رایگان" },
      ],
      body: "Nike Mercurial Superfly 8 Elite FG دارای ظاهری جدید با اجزای تخصصی است که به شما امکان می دهد از ابتدا تا انتها سریع ترین بازی خود را انجام دهید. یک یقه کشسان پشتیبانی اضافی را فراهم می کند و صفحه نوآورانه پاسخگویی فوری را برای برش های سریع تر در سرعت های بالا فراهم می کند.",
      price: 980000,
      offPrice: 980000,
      discount: 13,
      category: "soccer",
      faCategory: "فوتبال",
      image: {
         collection: [
            "assets/images/soccer/Nike Mercurial Superfly 8 Elite FG/1.jpg",
            "assets/images/soccer/Nike Mercurial Superfly 8 Elite FG/2.jpg",
            "assets/images/soccer/Nike Mercurial Superfly 8 Elite FG/3.jpg",
            "assets/images/soccer/Nike Mercurial Superfly 8 Elite FG/4.jpg",
            "assets/images/soccer/Nike Mercurial Superfly 8 Elite FG/5.jpg",
            "assets/images/soccer/Nike Mercurial Superfly 8 Elite FG/6.jpg",
         ],
         default: "assets/images/soccer/Nike Mercurial Superfly 8 Elite FG/1.jpg",
      },
   },
   {
      id: 13,
      name: "Zoom Freak 4",
      description: [
         { support: "گارانتی مادام العمر" },
         { support: "اورجینال" },
         { support: "ارسال رایگان" },
      ],
      body: "جیانیس طوفان بی وقفه ای از استقامت و مهارت است که به مدت 4 ربع یا بیشتر به سمت حریفان می آید. طراحی آینده‌نگر جدیدترین کفش امضا شده او به شما کمک می‌کند تا با یک لباس سبک وزن که با شما حرکت می‌کند، به پایین زمین بروید. این می تواند تغییرات سریع جهت را در هر دو طرف کف انجام دهد و به شما پایداری پهلو به پهلو و کشش چند جهته را در حین گام برداشتن یورو به حلقه ارائه دهد.",
      price: 718000,
      offPrice: 718000,
      discount: 13,
      category: "basketball",
      faCategory: "بسکتبال",
      image: {
         collection: [
            "assets/images/basketball/Zoom Freak 4/1.jpg",
            "assets/images/basketball/Zoom Freak 4/2.jpg",
            "assets/images/basketball/Zoom Freak 4/3.jpg",
            "assets/images/basketball/Zoom Freak 4/4.jpg",
            "assets/images/basketball/Zoom Freak 4/5.jpg",
            "assets/images/basketball/Zoom Freak 4/6.jpg",
         ],
         default: "assets/images/basketball/Zoom Freak 4/1.jpg",
      },
   },
   {
      id: 14,
      name: "Infinity Run Flyknit 3",
      description: [
         { support: "گارانتی مادام العمر" },
         { support: "اورجینال" },
         { support: "ارسال رایگان" },
      ],
      body: "هنوز هم تست شده ترین کفش ما. هنوز برای کمک به دویدن شما طراحی شده است. Nike React Infinity Run 3 حس نرم و پایداری با سواری نرم دارد که شما را از مسیرهای طولانی و کوتاه عبور می دهد. یک رویه قابل تنفس به گونه ای ساخته شده است که احساس می شود در عین حال انعطاف پذیر است. حتی بالشتک بیشتری به یقه اضافه کردیم تا حسی نرم و محافظت شده داشته باشیم. به دویدن ادامه بده، ما تو را داریم.",
      price: 540000,
      offPrice: 540000,
      discount: 13,
      category: "running",
      faCategory: "دویدن",
      image: {
         collection: [
            "assets/images/running/Nike React Infinity Run Flyknit 3 (black)/1.jpg",
            "assets/images/running/Nike React Infinity Run Flyknit 3 (black)/2.jpg",
            "assets/images/running/Nike React Infinity Run Flyknit 3 (black)/3.jpg",
            "assets/images/running/Nike React Infinity Run Flyknit 3 (black)/4.jpg",
            "assets/images/running/Nike React Infinity Run Flyknit 3 (black)/5.jpg",
            "assets/images/running/Nike React Infinity Run Flyknit 3 (black)/6.jpg",
         ],
         default: "assets/images/running/Nike React Infinity Run Flyknit 3 (black)/1.jpg",
      },
   },
   {
      id: 16,
      name: "ZoomX Zegama",
      description: [
         { support: "گارانتی مادام العمر" },
         { support: "اورجینال" },
         { support: "ارسال رایگان" },
      ],
      body: "با Nike ZoomX Zegama در فراز و نشیب‌های زمین بی‌نظیر حرکت کنید. این دستگاه که با چسبندگی و پایداری عالی ساخته شده است، شما را پوشانده است تا بتوانید به بالا رفتن ادامه دهید و زمانی که مسیر کثیف و شن و ماسه می شود، به ارتفاعات شخصی بیشتری برسید. خواه منظره‌ای چالش برانگیز و صخره‌ای در سربالایی باشد یا شیب تند و شیب‌دار در مسیری خائنانه، وقتی تصمیم به خارج شدن از جاده در آن گرفتید، احساس اطمینان کنید.",
      price: 680000,
      offPrice: 680000,
      discount: 13,
      category: "running",
      faCategory: "دویدن",
      image: {
         collection: [
            "assets/images/running/Nike ZoomX Zegama/1.jpg",
            "assets/images/running/Nike ZoomX Zegama/2.jpg",
            "assets/images/running/Nike ZoomX Zegama/3.jpg",
            "assets/images/running/Nike ZoomX Zegama/4.jpg",
            "assets/images/running/Nike ZoomX Zegama/5.jpg",
            "assets/images/running/Nike ZoomX Zegama/6.jpg",
         ],
         default: "assets/images/running/Nike ZoomX Zegama/1.jpg",
      },
   },
   {
      id: 17,
      name: "Zoom Mercurial Superfly 9",
      description: [
         { support: "گارانتی مادام العمر" },
         { support: "اورجینال" },
         { support: "ارسال رایگان" },
      ],
      body: "با طراحی جسورانه Superfly 9 Pro FG زمین را فوراً کج کنید. این دستگاه با یک واحد Zoom Air بارگذاری شده است، بنابراین می‌توانید در دقایق پایانی مسابقه - زمانی که مهم‌تر است - تسلط داشته باشید. سریع در هوا است.",
      price: 1870000,
      offPrice: 1855000,
      discount: 13,
      category: "soccer",
      faCategory: "فوتبال",
      image: {
         collection: [
            "assets/images/soccer/Nike Zoom Mercurial Superfly 9 Pro FG/1.jpg",
            "assets/images/soccer/Nike Zoom Mercurial Superfly 9 Pro FG/2.jpg",
            "assets/images/soccer/Nike Zoom Mercurial Superfly 9 Pro FG/3.jpg",
            "assets/images/soccer/Nike Zoom Mercurial Superfly 9 Pro FG/4.jpg",
            "assets/images/soccer/Nike Zoom Mercurial Superfly 9 Pro FG/5.jpg",
            "assets/images/soccer/Nike Zoom Mercurial Superfly 9 Pro FG/6.jpg",
         ],
         default: "assets/images/soccer/Nike Zoom Mercurial Superfly 9 Pro FG/1.jpg",
      },
   },
];

const ProductsProvider = ({ children }) => {
   const [products, dispatch] = useReducer(productsReducer, initialState);

   return (
      <ProductsContext.Provider value={products}>
         <ProductsContextDispatcher.Provider value={dispatch}>
            {children}
         </ProductsContextDispatcher.Provider>
      </ProductsContext.Provider>
   );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsActions = () => useContext(ProductsContextDispatcher);
