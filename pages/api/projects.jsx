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
      image: "https://yt3.ggpht.com/ykLE0lkGepCs9kCQweOz3cc8lmiqj7paaXggjhhK-iVUy4bZ9_Srz2locM63LTo0CjmPrLgrcQ=s176-c-k-c0x00ffffff-no-rj",
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
