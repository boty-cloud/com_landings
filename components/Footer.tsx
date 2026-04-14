import Image from "next/image";

interface FooterProps {
  botyLogoFooter: string;
  copyText: string;
}

export default function Footer({ botyLogoFooter, copyText }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Image src={botyLogoFooter} alt="Boty" width={112} height={28} className="footer__logo" />
        <p className="footer__copy">{copyText}</p>
      </div>
    </footer>
  );
}
