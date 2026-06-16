import Image from "next/image";

interface HeaderProps {
  botyLogo?: string;
  clientLogo: string;
  clientLogoSecondary?: string;
  clientName: string;
}

export default function Header({ botyLogo, clientLogo, clientLogoSecondary, clientName }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__inner">
        {botyLogo && (
          <>
            <Image src={botyLogo} alt="Boty" width={160} height={40} className="header__logo" />
            <span className="header__sep">&amp;</span>
          </>
        )}
        <Image
          src={clientLogo}
          alt={clientName}
          width={176}
          height={44}
          className="header__logo header__logo--client"
        />
        {clientLogoSecondary && (
          <>
            <span className="header__sep">&amp;</span>
            <Image
              src={clientLogoSecondary}
              alt={`${clientName} Partner`}
              width={176}
              height={44}
              className="header__logo header__logo--client"
            />
          </>
        )}
      </div>
    </header>
  );
}
