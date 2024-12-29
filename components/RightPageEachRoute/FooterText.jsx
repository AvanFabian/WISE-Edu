const FooterText1 = [
  { text: "Kebijakan Privasi", urltarget: "" },
  { text: "Syarat dan Ketentuan", urltarget: "" },
];
const FooterText2 = [
  { text: "FAQ", urltarget: "" },
  {
    text: "Hubungi Developer",
    urltarget: "https://www.linkedin.com/in/avan-fabian-daniswara-4342b1254/",
  },
];

const FooterText = () => {
  return (
    <>
      <div className="flex flex-row gap-4 justify-center mt-8">
        {FooterText1.map((item, index) => (
          <span
            key={index}
            className="text-[#5c5c5c] opacity-80 text-[13px] cursor-pointer font-bold subpixel-antialiased uppercase"
          >
            {item.text}
          </span>
        ))}
      </div>
      <div className="flex flex-row gap-4 justify-center mt-3 mb-6">
        {FooterText2.map((item, index) => (
          <span
            key={index}
            className="text-[#5c5c5c] opacity-80 text-[13px] cursor-pointer font-bold subpixel-antialiased uppercase"
          >
            {item.text}
          </span>
        ))}
      </div>
    </>
  );
};

export default FooterText;
