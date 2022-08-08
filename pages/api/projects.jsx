export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://marka-logo.com/wp-content/uploads/2020/12/Discord-Logo.png",
      name: "Discord Sunucum",
      description:
        "YTK Hanedanlığı discord sunucusu",
      link: "https://bit.ly/discordytk",
    },
    {
      id: 2,
      image: "https://yt3.ggpht.com/YCyvBzy14FHePAnfKtR4KePbew74f9pPmKNDQ56qtKXjMJD9T8Ho8RjNmdJOI_dmHrYYFn0RTw=s176-c-k-c0x00ffffff-no-rj-mo",
      name: "Youtube",
      description:
        " Merhaba ben Ahmet YTK Kanalımda vlog, eğlence ve nasıl yapılır videoları bulunuyor",
      link: "https://youtube.com/AhmetYTK",
    },
    
  ];
  res.status(200).json(data);
};
