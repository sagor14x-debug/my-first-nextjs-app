import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <h2>About Us</h2>
      <Image
        src="/img/profetional%20pic.jpg"
        width={500}
        height={550}
        alt="Professional picture"
      />
    </div>
  );
};

export default AboutPage;