import Image from "next/image";



export const metadata = {
  title: 'My Docs Page',
  description: '...',
}

const DocsPage = () => {
    return (
        <div>
            <h2>Our Official Documentation</h2>
            <Image src = "/images/profetional pic.jpg" alt = "profetion pic" width = {400} height = {300} ></Image>
        </div>
    );
};

export default DocsPage;