function ContactCard() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 tab2:grid-cols-2">
        <div className="flex flex-row items-start gap-5">
          <img src="/svg/addressPin.svg" width={25} height={25} />
          <div>
            <div className="text-h4 font-bold">Address</div>
            <div className="h-2" />
            <div className="text-secondary text-base">
              Department of Mechanical Engineering
            </div>
            <div className="h-2" />
            <div className="text-secondary text-base">
              Indian Institute of Technology, Bombay
            </div>
            <div className="h-2" />
            <div className="text-secondary text-base">
              Powai, Mumbai - 400076
            </div>
            <div className="h-2" />
            <div className="text-secondary text-base">Maharashtra, India</div>
            <div className="h-4" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-start gap-5">
            <img src="/svg/mobile.svg" width={25} height={25} />
            <div>
              <div className="text-h4 font-bold">Phone number</div>
              <div className="h-2" />
              <div className="text-secondary text-base">+91-22-25767531</div>
            </div>
          </div>
          <div className="flex flex-row items-start gap-5">
            <img src="/svg/fax.svg" width={25} height={25} />
            <div>
              <div className="text-h4 font-bold">Fax</div>
              <div className="h-2" />
              <div className="text-secondary text-base">12345 , 44 4554</div>
            </div>
          </div>
          <div className="flex flex-row items-start gap-5">
            <img src="/svg/mail.svg" width={25} height={25} />
            <div>
              <div className="text-h4 font-bold">Email</div>
              <div className="h-2" />
              <div className="text-secondary text-base">atulsr@iitb.ac.in</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
