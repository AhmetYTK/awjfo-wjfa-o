export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://bit.ly/3A0qR6j",
      name: "Tomerminator",
      description:
        "Tomerminator İnstagram sayfamız",
      link: "https://www.instagram.com/tomerminator/",
    },
    {
      id: 2,
      image: "https://yt3.ggpht.com/YCyvBzy14FHePAnfKtR4KePbew74f9pPmKNDQ56qtKXjMJD9T8Ho8RjNmdJOI_dmHrYYFn0RTw=s176-c-k-c0x00ffffff-no-rj-mo",
      name: "Youtube",
      description:
        "Kişisel Youtube Kanalım bu kanalda eğlence ve nasıl yapılır içerikleri bulunuyor.",
      link: "https://youtube.com/AhmetYTK",
    },
    {
      id: 3,
      image: "https://bit.ly/3A0qR6j",
      name: "Tomerminator Youtube Kanalı",
      description:
        "Tomerminator'ün Youtube Kanalı",
      link: "https://bit.ly/tomeryt",
    },
    
  ];
  res.status(200).json(data);
};
