import Image from "next/image";
import React from "react";


export const metadata = {
  title: 'BPL | About Us',
  description: '...',
}



const AboutPage = () => {
  return (
    <div>
      <h2>About Us</h2>

    <Image src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWS1EdlMTyIdVQUPacEfbMcnRA3QMMbU-J-wvCCqmgxQ&s=10" width={500} height={500} alt="Kane Williamson"></Image>

      <Image
        // src="/img/profetional%20pic.jpg"
        // src="/bannar.png"
        src= "/Mustafizur.jpg"
        width={500}
        height={550}
        alt="bannar picture"
      />
      <Image
        src="/images/Litondas.jpg"
        width={500}
        height={450}
        alt="Litondas"
      ></Image>
      <Image src="/images/ShakibAlHasan.jpg" width={500} height={400} alt="ShakibAlHasan"></Image>


    </div>
  );
};

export default AboutPage;
