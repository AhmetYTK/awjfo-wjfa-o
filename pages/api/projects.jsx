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
      image: "bg-neutral-800/10 p-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full",
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
